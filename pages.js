/* Orefarer Wiki v13 — pages.js */
function render() {
    let s = '';
    let q = $('search').value.toLowerCase();
    s += renderOverviewPage();
    s += renderResourcesRefiningPage();
    s += renderPrintingPage();
    s += renderMiningLasersPage();
    s += renderEnginesPage();
    s += renderOtherFabricationPage();
    s += renderShipsPage();
    s += renderStationsProjectsPage();
    s += renderSkillsTalentsPage();
    s += renderCalculatorsPage();
    s += renderShoppingCartPage();
    $('content').innerHTML = unit(s || '<p>No matching entries.</p>');
    if (active === 'Skills & Talents')
        bindProfile();
    if (active === 'Calculators')
        bindCalcs();
    if (active === 'Resources & Refining')
        bindRefining();
    document.querySelectorAll('.cart-control').forEach(control => {
        let input = control.querySelector('.catalog-qty'), button = control.querySelector('.add-cart'), status = control.querySelector('.cart-status'), kind = button.dataset.cartKind, name = button.dataset.cartName, key = cartKey(kind, name);
        const normalize = x => Math.max(0, Math.floor(n(x)));
        const refresh = () => { let qty = saved.cart?.[key]?.qty || 0; button.textContent = qty ? 'Remove from cart' : 'Add to cart'; button.classList.toggle('in-cart', !!qty); status.textContent = qty ? 'In cart: ' + f(qty, 2) : 'Not in cart'; };
        const update = qty => {
            qty = normalize(qty);
            input.value = qty;
            if (qty)
                saved.cart[key] = { kind, name, qty };
            else
                delete saved.cart[key];
            save();
            refresh();
        };
        input.addEventListener('input', () => {
            if (input.value === '')
                return;
            update(input.value);
        });
        input.addEventListener('change', () => update(input.value));
        button.addEventListener('click', () => {
            if (saved.cart[key])
                update(0);
            else
                update(Math.max(1, normalize(input.value)));
        });
        control.querySelectorAll('.cart-increment').forEach(inc => {
            let delay = null, repeat = null, held = false, suppress = false;
            const stop = () => { clearTimeout(delay); clearInterval(repeat); delay = null; repeat = null; };
            const bump = amount => update(normalize(input.value) + amount);
            inc.addEventListener('pointerdown', e => {
                if (e.button !== 0)
                    return;
                stop();
                held = false;
                suppress = false;
                delay = setTimeout(() => { held = true; suppress = true; bump(1); repeat = setInterval(() => bump(1), 100); }, 350);
            });
            for (const event of ['pointerup', 'pointercancel', 'pointerleave'])
                inc.addEventListener(event, stop);
            inc.addEventListener('click', e => {
                if (suppress) {
                    e.preventDefault();
                    suppress = false;
                    return;
                }
                bump(Number(inc.dataset.amount));
            });
            inc.addEventListener('blur', stop);
        });
    });
    if (active === 'Shopping Cart')
        bindCart();
    document.querySelectorAll('[data-reset]').forEach(b => b.onclick = () => {
        if (b.dataset.reset === 'all')
            resetAll();
        else if (b.dataset.reset === 'refining') {
            delete saved.calcs.refineqty;
            delete saved.calcs.refineq;
            save();
            render();
        }
        else if (b.dataset.reset === 'ore') {
            ['ore', 'quality', 'oreprice'].forEach(k => delete saved.calcs[k]);
            save();
            render();
        }
        else if (b.dataset.reset === 'printing') {
            ['recipe', 'materialcost', 'listing'].forEach(k => delete saved.calcs[k]);
            save();
            render();
        }
        else if (b.dataset.reset === 'travel') {
            ['x1', 'y1', 'x2', 'y2', 'travelDistance', 'travelDistanceMode', 'travelengine', 'travelTier'].forEach(k => delete saved.calcs[k]);
            save();
            render();
        }
        else if (b.dataset.reset === 'drone') {
            ['laser', 'minedore', 'drone', 'dronen', 'shipcargo', 'droneDistance', 'droneTier'].forEach(k => delete saved.calcs[k]);
            save();
            render();
        }
    });
    document.querySelectorAll('[data-expand]').forEach(b => b.onclick = () => { let area = b.closest('.panel'); area.querySelectorAll('details.recipe').forEach(d => d.open = b.dataset.expand === 'all'); });
    document.querySelectorAll('[data-goto]').forEach(a => a.onclick = e => { e.preventDefault(); active = a.dataset.goto; $('search').value = ''; draw(); });
}

function bindRefining() {
    const update = () => {
        let a = read('refineqty'), b = Math.min(100, read('refineq'));
        $('refineout').innerHTML = unit(`${f(a * b / 100, 3)} m³ refined material · ${f(fee(a * b / 100), 3)}c refining fee`);
        for (let id of ['refineqty', 'refineq'])
            saved.calcs[id] = $(id).value;
        save();
    };
    ['refineqty', 'refineq'].forEach(id => $(id).addEventListener('input', update));
    update();
}

function profileUI() { return panel('Character profile — baseline by default', `<p>Skills determine unlocks; talent ranks change most bonuses. Every skill level-up grants one Talent Point. Rank 0 is the unmodified game baseline.</p><div><h3>Skill unlocks</h3><div class="profile skill-top">${['Captain', 'Drone Operator'].map(k => `<label>${esc(k)} level<input type="number" min="0" step="1" data-skill="${esc(k)}" value="${skill(k)}"></label>`).join('')}</div><p class="muted small">Captain: T1 for everyone, T2 at level 10, T3 at level 20. Drone Operator: 2 drones by default, 3 at level 10, 4 at level 20.</p></div><div><h3>Talent ranks</h3><div class="profile talent-grid">${D.talent_definitions.slice().sort((a, b) => a[0].localeCompare(b[0])).map(([name, effect, per, unit, comp]) => `<label>${esc(name)}<span class="small muted">${esc(effect)}: ${per}${unit === 'percent' ? '%' : unit === 'm3' ? ' m³' : ' slots'}/rank${comp ? ' (compounded)' : ''}</span><input type="number" min="0" step="1" data-talent="${esc(name)}" value="${rank(name)}"></label>`).join('')}</div></div><p><button class="action" id="reset">Reset to baseline</button></p><div id="profileout" class="subresult"></div>`) + note; }

function bindProfile() { document.querySelectorAll('[data-skill]').forEach(el => el.oninput = () => { window.profile.skills[el.dataset.skill] = n(el.value); profileSummary(); save(); }); document.querySelectorAll('[data-talent]').forEach(el => el.oninput = () => { window.profile.talents[el.dataset.talent] = n(el.value); profileSummary(); save(); }); $('reset').onclick = () => { window.profile = JSON.parse(JSON.stringify(D.character_defaults)); save(); render(); }; profileSummary(); }

function profileSummary() { let drones = skill('Drone Operator') >= 20 ? 4 : skill('Drone Operator') >= 10 ? 3 : 2; let tier = skill('Captain') >= 20 ? 3 : skill('Captain') >= 10 ? 2 : 1; $('profileout').textContent = `Maximum ship tier T${tier}; drone control limit ${drones}; refining fee ${f(fee(1))}c/m³; printing speed +${rank('Printer') * 2}%; fabrication speed +${rank('Fabricator') * 2}%.`; }

/** Build the Overview section. */
function renderOverviewPage() {
    let s = '';
    let q = $('search').value.toLowerCase();
    if (active === 'Overview')
        s = panel('Overview', `<p>Welcome to a rough draft of compiling information for Orefarer. This is intended to be a game assistance tool to help calculate recipes, travel times and crafting paths as well as explain some of the game mechanics. Please feel free to use this tool, but understand a lot of this is not perfect and the game changes frequently. There can be errors in the calculators or information. This was crafted with imperfect information and may contain errors.</p><p>Adjust your <a href="#skills" data-goto="Skills & Talents">skills and talents</a> to personalize costs, production times and unlocks.</p><div class="reset-tools"><button class="action" data-reset="all">Reset all skills, talents and calculators</button></div><div class="overview-bottom"><h3>Recipes and reference data</h3><p>${D.resources.length} raw resources · ${D.printing.length} printing recipes · ${D.fabrication_recipes.length} structured fabrication recipes · ${D.mining_lasers.length} mining laser configurations (some extrapolated) · ${D.ships.length} ships.</p><p>Resources and refined materials use m³, printed and fabricated products use items, and prices use coins (c).</p></div>`);
    return s;
}

/** Build the Resources & Refining section. */
function renderResourcesRefiningPage() {
    let s = '';
    let q = $('search').value.toLowerCase();
    if (active === 'Resources & Refining')
        s = panel('Resources', table(['Raw ore'], D.resources.filter(x => x.toLowerCase().includes(q)).sort((a, b) => oreOrder(a) - oreOrder(b)).map(x => [x]))) + panel('Refined products', D.resources.filter(x => x.toLowerCase().includes(q)).sort((a, b) => oreOrder(a) - oreOrder(b)).map(x => `<div class="recipe"><strong>${esc(x === 'Ice' ? 'Water' : x)}</strong> ${cartButton('refined', x === 'Ice' ? 'Water' : x)}</div>`).join('') + ['Fuel', 'Steel', 'Titanium Steel'].filter(x => x.toLowerCase().includes(q)).map(x => `<div class="recipe"><strong>${esc(x)}</strong> ${cartButton('refined', x)}</div>`).join('')) + panel('Refining and ore quality', `<p><b>Ore quality (%)</b> is the portion of mined ore that becomes refined material. A 15% quality ore yields 0.15 m³ refined for each 1 m³ raw ore.</p><p class="formula">Refined m³ = Raw ore m³ × (Quality % ÷ 100)</p><p>Example: 100 m³ Iron ore at 15% quality → <b>15 m³ Refined Iron</b>.</p><div class="fields"><label>Raw ore (m³)<input type="number" id="refineqty" min="0" step="any" value="${stored('refineqty', '100')}"></label><label>Ore quality (%)<input type="number" id="refineq" min="0" max="100" step="any" value="${stored('refineq', '15')}"></label></div><div class="result" id="refineout"></div><p>Base refining fee: approximately <b>1c per m³ of refined output</b>. Your talent-adjusted fee: <b>${f(fee(1))}c/m³</b>.</p>${resetButton('refining')}<div class="refine-steps">${[['Ice → Water', 'Ice purity determines Water output. Example: 100 m³ Ice at 85% purity produces 85 m³ Water.'], ['Water → Fuel', '5 m³ Water produces 1 m³ Fuel (20% yield).'], ['Steel', '1 m³ Refined Iron + 0.2 m³ Refined Carbon produces 0.4 m³ Steel.'], ['Titanium Steel', '1 m³ Refined Iron + 0.3 m³ Refined Carbon + 0.3 m³ Refined Titanium produces 0.4 m³ Titanium Steel.']].map(([a, b]) => `<div class="refine-step"><strong>${a}</strong><p>${b}</p></div>`).join('')}</div>${note}`);
    return s;
}

/** Build the Printing section. */
function renderPrintingPage() {
    let s = '';
    let q = $('search').value.toLowerCase();
    if (active === 'Printing') {
        let arr = filtered(D.printing).slice().sort(sortName);
        s = panel('Printing recipes', `${expandControls()}${arr.map(x => itemDetails(esc(x.name) + ` · ${f(x.base_fee_c_estimate)}c base fee`, `${table(['Refined input', 'm³ required'], Object.entries(x.inputs_m3).sort((a, b) => a[0].localeCompare(b[0])).map(([k, v]) => [k, f(v, 0)]))}<p>Base print time: ${time(x.base_seconds_estimate)} · With talents: ${time(duration(x.base_seconds_estimate, 'Printer'))}</p><p>Base fee: ${f(x.base_fee_c_estimate)}c · With talents: ${f(fee(x.base_fee_c_estimate))}c</p><p class="small muted">${esc(x.status)}</p>${cartButton('printed', x.name)}`)).join('')}${note}`);
    }
    return s;
}

/** Build the Mining Lasers section. */
function renderMiningLasersPage() {
    let s = '';
    let q = $('search').value.toLowerCase();
    if (active === 'Mining Lasers') {
        let arr = filtered(D.mining_lasers).slice().sort((a, b) => oreOrder(a.ore) - oreOrder(b.ore) || a.tier - b.tier || ({ Standard: 0, Fuel: 1, Nuclear: 2 }[a.variant] - { Standard: 0, Fuel: 1, Nuclear: 2 }[b.variant]));
        s = panel('Mining lasers', `${expandControls()}${info('Higher-tier component quantities for some ores are estimates, not verified recipes.')}${arr.map(x => itemDetails(esc(x.name) + ` · ${f(x.mining_rate_m3_s, 3)} m³/s`, `<h3>Printed parts required</h3>${table(['Component', 'Quantity'], [[x.frame, x.components_each], ['Wiring Bundle', x.components_each], [x.board, x.components_each], ['Heat Sink', x.components_each], [x.ore + ' Laser Head', x.components_each], ...(x.variant === 'Standard' ? [] : [['Pressure Vessel', x.components_each]])].map(([name, qty]) => [name, qty ?? 'Unknown']))}${x.quantity_status !== 'verified' ? '<p class="small muted">Estimated quantities; verify in game.</p>' : ''}${table(['Specification', 'Value'], [['Tier', `T${x.tier}`], ['Ore', `${x.ore} or Ice`], ['Mining rate', `${f(x.mining_rate_m3_s, 3)} m³/s`], ['Frame', x.frame], ['Circuit board', x.board], ['Each required component', x.components_each ?? 'Unknown'], ['Pressure Vessel', x.variant === 'Standard' ? 'None' : 'Required'], ['Fuel consumption', x.fuel_cartridge_pct_per_min ? `${f(x.fuel_cartridge_pct_per_min)}% cartridge/min` : 'None'], ['Baseline fabrication fee', `${f(x.base_fee_c_estimate)}c`], ['Talent-adjusted fee', `${f(fee(x.base_fee_c_estimate))}c`], ['Baseline fabrication time', time(x.base_seconds_estimate)], ['Talent-adjusted fabrication time', time(duration(x.base_seconds_estimate, 'Fabricator'))], ['Recipe evidence', x.quantity_status]])}${cartButton('laser', x.name)}`)).join('')}`);
    }
    return s;
}

/** Build the Engines section. */
function renderEnginesPage() {
    let s = '';
    let q = $('search').value.toLowerCase();
    if (active === 'Engines') {
        let arr = filtered(D.engines).slice().sort((a, b) => a.tier - b.tier || a.name.localeCompare(b.name));
        s = panel('Engines', `${expandControls()}${arr.map(x => itemDetails(esc(x.name) + ` · ${f(x.seconds_per_distance, 3)}s/distance`, `<h3>Printed parts required</h3>${table(['Component', 'Quantity'], Object.entries(x.inputs_items || {}).sort((a, b) => a[0].localeCompare(b[0])))}${table(['Specification', 'Value'], [['Travel time', `${f(x.seconds_per_distance, 3)}s/distance`], ['Fuel required', x.cartridge_pct_per_distance ? 'Yes — Fuel Cartridge' : 'No'], ['Unfueled travel time', x.cartridge_pct_per_distance ? `${f(x.unfueled_seconds_per_distance, 3)}s/distance` : 'Not applicable'], ['Fuel consumption', x.cartridge_pct_per_distance ? `${f(x.cartridge_pct_per_distance, 3)}% per distance` : 'None'], ['Base fabrication fee', `${f(x.base_fabrication_fee_c_estimate)}c`], ['Talent-adjusted fee', `${f(fee(x.base_fabrication_fee_c_estimate))}c`], ['Baseline fabrication time', time(x.base_seconds_estimate)], ['Talent-adjusted fabrication time', time(duration(x.base_seconds_estimate, 'Fabricator'))]])}${cartButton('fabricated', x.name)}`)).join('')}${info('Only Fuel Powered Engines require fuel; standard Engine 1 and Engine 2 operate without cartridges.')}`);
    }
    return s;
}

/** Build the Other Fabrication section. */
function renderOtherFabricationPage() {
    let s = '';
    let q = $('search').value.toLowerCase();
    if (active === 'Other Fabrication') {
        let groups = ['Drone Bays', 'Drones', 'Engines', 'Utility Equipment', 'Station Equipment'];
        s = groups.map(group => {
            let arr = filtered(D.fabrication_recipes.filter(x => x.category === group)).sort(sortName);
            if (!arr.length)
                return '';
            return panel(group, `${expandControls()}${arr.map(x => itemDetails(`${esc(x.name)} · ${f(x.base_fee_c)}c base fee`, `<p>${esc(x.description)}</p>${table(['Printed component', 'Items needed'], Object.entries(x.inputs_items).sort((a, b) => a[0].localeCompare(b[0])).map(([k, v]) => [k, v]))}<p>Base fee: ${f(x.base_fee_c)}c · With talents: ${f(fee(x.base_fee_c))}c</p><p>Base time: ${time(x.base_seconds)} · With talents: ${time(duration(x.base_seconds, 'Fabricator'))}</p><p class="small muted">${esc(x.status)}</p>${cartButton('fabricated', x.name)}`)).join('')}`);
        }).join('') + note;
    }
    return s;
}

/** Build the Ships section. */
function renderShipsPage() {
    let s = '';
    let q = $('search').value.toLowerCase();
    if (active === 'Ships') {
        let arr = filtered(D.ships).slice().sort((a, b) => a.tier - b.tier || a.name.localeCompare(b.name));
        s = panel('Ships and construction', `${expandControls()}${arr.map(x => itemDetails(esc(x.name) + ` · T${x.tier}`, `${table(['Specification', 'Value'], [['Cargo', x.cargo_slots ? `${x.cargo_slots} × ${f(x.slot_depth_m3, 0)} m³` : 'None'], ['Base travel time', `${f(x.seconds_per_distance, 3)}s/distance`], ['Mining laser slots', x.mining_mounts], ['Drone bay slots', x.drone_bays], ['Utility slots', x.utility_slots], ['Fuel cartridge capacity', x.cartridge_capacity], ['Base construction time', time(x.construction_hours * 3600)], ['With Shipwright talent', time(x.construction_hours * 3600 / (1 + rank('Shipwright') * .02))], ['Required Captain level', x.tier === 3 ? 20 : x.tier === 2 ? 10 : 0]])}<h3>Construction materials</h3>${table(['Refined material', 'm³ required'], Object.entries(x.construction_materials_m3).sort((a, b) => a[0].localeCompare(b[0])).map(([k, v]) => [k, f(v, 0)]))}${cartButton('ship', x.name)}`)).join('')}`);
    }
    return s;
}

/** Build the Stations & Projects section. */
function renderStationsProjectsPage() {
    let s = '';
    let q = $('search').value.toLowerCase();
    if (active === 'Stations & Projects')
        s = panel('Stations', table(['Station', 'Coordinates', 'Facilities'], filtered(D.stations).map(x => [x.name, x.coordinates.join(', '), x.facilities.join(', ')]))) + panel('How community projects work', `<p>Community projects allow players to contribute refined materials toward building stations and upgrading shared facilities. The game pays the displayed reward immediately when a contribution is made.</p><h3>Example: Add two refining lanes</h3><p>This is an <b>illustrative project</b>, not a current project listing. Imagine a station has a project requiring 100 m³ refined Iron and 50 m³ refined Copper. Completing it would add two shared refining lanes, letting two additional refining orders process at the same time.</p><p>If the project offers 12c per m³ of Iron, contributing 10 m³ Iron would immediately pay <b>120c</b> and advance the project's progress by 10 m³.</p><p>Any contribution resets the project's seven-day inactivity timer. If seven days pass without a contribution, the project expires and all contributed materials are lost. Previously paid rewards are issued at contribution time.</p>${info('The example amounts and reward rate are hypothetical. Always check the current in-game project for requirements, rates, location, and status.')}`) + panel('Station operations', `<p>Station inventory is private to each player. Refining, printing, and fabrication lanes are shared, and extra orders queue automatically when all lanes are occupied. Canceling a queued order refunds its processing fee; canceling an active order does not.</p><p>Stations are permanent. The map is a two-dimensional coordinate grid centered on Directorate HQ at (0, 0). Discovered spaces refresh after 24 hours unless active asteroid mining pauses expiration.</p>`);
    return s;
}

/** Build the Skills & Talents section. */
function renderSkillsTalentsPage() {
    let s = '';
    let q = $('search').value.toLowerCase();
    if (active === 'Skills & Talents')
        s = profileUI();
    return s;
}

/** Build the Calculators section. */
function renderCalculatorsPage() {
    let s = '';
    let q = $('search').value.toLowerCase();
    if (active === 'Calculators')
        s = calcUI() + panel('Crafting planner / shopping cart', `<p>Add refined materials, printed components, fabricated equipment or ships from their catalog pages, then view the complete ingredient breakdown.</p><button class="action" data-goto="Shopping Cart">Open shopping cart (${Object.values(saved.cart || {}).reduce((s, x) => s + x.qty, 0)} items)</button>`);
    return s;
}

/** Build the Shopping Cart section. */
function renderShoppingCartPage() {
    let s = '';
    let q = $('search').value.toLowerCase();
    if (active === 'Shopping Cart')
        s = cartUI();
    return s;
}
