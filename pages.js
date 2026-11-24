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
            ['x1', 'y1', 'x2', 'y2', 'travelDistance', 'travelDistanceMode', 'travelengine', 'travelHull', 'travelFuel', 'expansions', 'tanks', 'travelTier'].forEach(k => delete saved.calcs[k]);
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

// Order follows the Skills and Talents tabs on MMO main.
const profileSkills = {
    Miner: 'Extract ore from asteroids.',
    Refiner: 'Refine raw materials at a station.',
    Printer: 'Print components at a station.',
    Fabricator: 'Fabricate equipment at a station.',
    Builder: 'Supply construction projects.',
    Trader: 'Trade goods on the market.',
    'Drone Operator': 'Gain one active hauling drone slot every ten levels.',
    Captain: 'Unlock tier 2 ships at level 10 and tier 3 at level 20.',
    Explorer: 'Discover new coordinates.',
    'Long Distance Traveler': 'Gain five Silver Coin wallet spaces every ten levels.',
};

const talentGroups = {
    Flight: ['Piloting', 'Drone Operator', 'Wallet Capacity'],
    Mining: ORE_ORDER.map(ore => ore + ' Miner'),
    Production: ['Refiner', 'Printer', 'Fabricator', 'Shipwright', 'Industrialist'],
    'Cargo & Storage': ['Cargo Management', 'Drone Logistics', 'Heavy Hauler', 'Tetris Master'],
    Contracts: ['Contract Negotiator', 'Contract Specialist'],
};

let profilePage = 'Skills';
let draftRanks = {};
const rankCost = value => value * (value + 1) / 2;
const xpThresholds = [0, 0];
let points = 0;
while (xpThresholds.at(-1) <= Number.MAX_SAFE_INTEGER) {
    const level = xpThresholds.length - 1;
    points += Math.floor(level + 300 * 2 ** (level / 7));
    xpThresholds.push(Math.round(Math.floor(points / 4) * (100 / 83)));
}

function skillProgress(name) {
    // Older profiles stored only the level. Start them at its XP threshold.
    const oldLevel = Math.min(xpThresholds.length - 2, Math.max(1, Math.floor(skill(name))));
    const xp = window.profile.skillXp?.[name] ?? xpThresholds[oldLevel];
    const level = xpThresholds.findIndex(threshold => threshold > xp) - 1;
    return { xp, level, earned: xp - xpThresholds[level], required: xpThresholds[level + 1] - xpThresholds[level] };
}

function profileBudget() {
    const skills = Object.keys(profileSkills).map(skillProgress);
    const earned = skills.reduce((sum, skill) => sum + skill.level - 1, 0);
    const spent = D.talent_definitions.reduce((sum, [name]) => sum + rankCost(rank(name)), 0);
    const planned = Object.entries(draftRanks).reduce((sum, [name, value]) =>
        sum + rankCost(value) - rankCost(rank(name)), 0);
    return { earned, spent, planned, available: earned - spent - planned,
        totalXp: skills.reduce((sum, skill) => sum + skill.xp, 0) };
}

function skillRows(budget) {
    const matches = name => (name + ' ' + profileSkills[name]).toLowerCase().includes($('search').value.toLowerCase());
    return `<div class="profile-stat">Total XP <strong>${budget.totalXp.toLocaleString()}</strong></div>
        <div class="profile-stat">Character level <strong>${budget.earned + 1}</strong></div>
        <h3>Skills</h3>` + Object.keys(profileSkills).filter(matches).map(name => {
        const { level, xp, earned, required } = skillProgress(name);
        return `<div class="wiki-skill" title="${esc(profileSkills[name])}">
            <div class="profile-stat"><strong>${esc(name)}</strong><div class="skill-values">
            <label>Level <input type="number" aria-label="${esc(name)} level" min="1" max="${xpThresholds.length - 2}" value="${level}" data-level="${esc(name)}"></label>
            <label>Total XP <input type="number" aria-label="${esc(name)} total XP" min="0" step="1" max="${Number.MAX_SAFE_INTEGER}" value="${xp}" data-xp="${esc(name)}"></label>
            <span>${earned.toLocaleString()} / ${required.toLocaleString()} XP</span></div></div>
            <progress aria-label="${esc(name)} progress to next level" value="${earned}" max="${required}"></progress>
            </div>`;
    }).join('');
}

function talentBenefit(def, value) {
    const [, , per, unit, compounded] = def;
    const amount = compounded ? 100 * ((1 - per / 100) ** value - 1) : value * per;
    const suffix = { percent: '%', m3: ' m³', coins: ' capacity', slots: ' slots' }[unit];
    return (amount < 0 ? '' : '+') + Number(amount.toFixed(2)) + suffix;
}

function talentRows(budget) {
    const definitions = new Map(D.talent_definitions.map(def => [def[0], def]));
    const groups = Object.entries(talentGroups).map(([group, names]) => {
        const rows = names.filter(name => (group + ' ' + definitions.get(name).slice(0, 2).join(' ')).toLowerCase().includes($('search').value.toLowerCase())).map(name => {
            const def = definitions.get(name), current = rank(name), target = draftRanks[name] ?? current;
            const changed = current !== target;
            const previous = changed ? `<span class="muted">${talentBenefit(def, current)} (rank ${current}) → </span>` : '';
            return `<article class="wiki-talent" data-planned="${changed}"><div class="talent-heading">
                <strong>${esc(name)}</strong><span>${previous}${talentBenefit(def, target)} (rank ${target})</span>
                <div class="rank-actions"><button type="button" data-minus="${esc(name)}" aria-label="Undo planned rank for ${esc(name)}" ${changed ? '' : 'disabled'}>−</button>
                <button type="button" data-plus="${esc(name)}" aria-label="Increase ${esc(name)} rank" ${budget.available >= target + 1 ? '' : 'disabled'}>+</button>
                <small>${target + 1} TP</small></div></div>
                <div class="small muted">${esc(def[1])} · ${talentBenefit(def, 1)} per rank${def[4] ? ' compounded' : ''}</div></article>`;
        });
        return rows.length ? `<section class="talent-group"><h3>${esc(group)}</h3>${rows.join('')}</section>` : '';
    });
    return `<div class="profile-stat"><strong>Available Talent Points: ${budget.available}</strong>
        <button class="action" id="apply-ranks" ${budget.planned && budget.available >= 0 ? '' : 'disabled'}>Apply (${budget.planned} TP)</button></div>
        <p class="small muted">${budget.earned} earned · ${budget.spent} spent · ${budget.planned} planned. Each skill level above one earns a Talent Point.</p>` + groups.join('');
}

function profileUI() {
    const budget = profileBudget();
    const tabs = ['Skills', 'Talents'].map(name => `<button class="action" data-profile-page="${name}" aria-pressed="${name === profilePage}">${name}</button>`).join('');
    return panel('Skills & Talents', `<div class="profile-tabs" role="group" aria-label="Profile pages">${tabs}</div>
        ${profilePage === 'Skills' ? skillRows(budget) : talentRows(budget)}
        <p><button class="action" id="reset">Reset profile to baseline</button></p>`);
}

function bindProfile() {
    document.querySelectorAll('[data-profile-page]').forEach(button => button.onclick = () => {
        profilePage = button.dataset.profilePage;
        $('search').value = '';
        render();
        document.querySelector('[data-profile-page][aria-pressed="true"]').focus();
    });
    document.querySelectorAll('[data-level], [data-xp]').forEach(input => input.onchange = () => {
        const value = input.valueAsNumber;
        if (!Number.isSafeInteger(value) || !input.validity.valid) { render(); return; }
        const name = input.dataset.level ?? input.dataset.xp;
        window.profile.skillXp ??= {};
        window.profile.skillXp[name] = input.dataset.level ? xpThresholds[value] : value;
        window.profile.skills[name] = skillProgress(name).level;
        save();
        render();
    });
    document.querySelectorAll('[data-plus], [data-minus]').forEach(button => button.onclick = () => {
        const name = button.dataset.plus ?? button.dataset.minus;
        const target = (draftRanks[name] ?? rank(name)) + (button.dataset.plus ? 1 : -1);
        if (target === rank(name)) delete draftRanks[name];
        else draftRanks[name] = target;
        render();
    });
    if ($('apply-ranks')) $('apply-ranks').onclick = () => {
        const budget = profileBudget();
        if (!budget.planned || budget.available < 0) return;
        Object.assign(window.profile.talents, draftRanks);
        draftRanks = {};
        save();
        render();
    };
    $('reset').onclick = () => {
        window.profile = structuredClone(D.character_defaults);
        draftRanks = {};
        save();
        render();
    };
}

/** Build the Overview section. */
function renderOverviewPage() {
    let s = '';
    let q = $('search').value.toLowerCase();
    if (active === 'Overview')
        s = panel('Overview', `<p>Welcome to a rough draft of compiling information for Orefarer. This is intended to be a game assistance tool to help calculate recipes, travel times and crafting paths as well as explain some of the game mechanics. Please feel free to use this tool, but understand a lot of this is not perfect and the game changes frequently. There can be errors in the calculators or information. This was crafted with imperfect information and may contain errors.</p><p>Adjust your <a href="#skills" data-goto="Skills & Talents">skills and talents</a> to personalize costs, production times and unlocks.</p><div class="reset-tools"><button class="action" data-reset="all">Reset all skills, talents and calculators</button></div><div class="overview-bottom"><h3>Recipes and reference data</h3><p>${D.resources.length} raw resources · ${D.printing.length} printing recipes · ${D.fabrication_recipes.length} structured fabrication recipes · ${D.mining_lasers.length} mining laser configurations · ${D.ships.length} ships.</p><p>Resources and refined materials use m³, printed and fabricated products use items, and prices use credits (c).</p></div>`);
    return s;
}

/** Build the Resources & Refining section. */
function renderResourcesRefiningPage() {
    let s = '';
    let q = $('search').value.toLowerCase();
    if (active === 'Resources & Refining')
        s = panel('Resources', table(['Raw ore'], D.resources.filter(x => x.toLowerCase().includes(q)).sort((a, b) => oreOrder(a) - oreOrder(b)).map(x => [x]))) + panel('Refined products', D.resources.filter(x => x.toLowerCase().includes(q)).sort((a, b) => oreOrder(a) - oreOrder(b)).map(x => `<div class="recipe"><strong>${esc(x === 'Ice' ? 'Water' : x)}</strong> ${cartButton('refined', x === 'Ice' ? 'Water' : x)}</div>`).join('') + Object.keys(D.refining.products).filter(x => x.toLowerCase().includes(q)).map(x => `<div class="recipe"><strong>${esc(x)}</strong> ${cartButton('refined', x)}</div>`).join('')) + panel('Refining and ore quality', `<p><b>Ore quality (%)</b> is the portion of mined ore that becomes refined material. A 15% quality ore yields 0.15 m³ refined for each 1 m³ raw ore.</p><p class="formula">Refined m³ = Raw ore m³ × (Quality % ÷ 100)</p><p>Example: 100 m³ Iron ore at 15% quality → <b>15 m³ Refined Iron</b>.</p><div class="fields"><label>Raw ore (m³)<input type="number" id="refineqty" min="0" step="any" value="${stored('refineqty', '100')}"></label><label>Ore quality (%)<input type="number" id="refineq" min="0" max="100" step="any" value="${stored('refineq', '15')}"></label></div><div class="result" id="refineout"></div><p>Base refining fee: approximately <b>1c per m³ of refined output</b>. Your talent-adjusted fee: <b>${f(fee(1))}c/m³</b>.</p>${resetButton('refining')}<div class="refine-steps">${[['Ice → Water', 'Ice purity determines Water output. Example: 100 m³ Ice at 85% purity produces 85 m³ Water.'], ['Liquid Hydrogen', '5 m³ Water produces 1 m³ Liquid Hydrogen.'], ['Methane', '1.90 m³ Water and 0.29 m³ Carbon produce 2 m³ Methane.'], ['Steel', '1 m³ Refined Iron + 0.2 m³ Refined Carbon produces 0.4 m³ Steel.'], ['Titanium Steel', '1 m³ Refined Iron + 0.3 m³ Refined Carbon + 0.3 m³ Refined Titanium produces 0.4 m³ Titanium Steel.']].map(([a, b]) => `<div class="refine-step"><strong>${a}</strong><p>${b}</p></div>`).join('')}</div>`);
    return s;
}

/** Build the Printing section. */
function renderPrintingPage() {
    let s = '';
    let q = $('search').value.toLowerCase();
    if (active === 'Printing') {
        let arr = filtered(D.printing).slice().sort(sortName);
        s = panel('Printing recipes', `${expandControls()}${arr.map(x => itemDetails(esc(x.name) + ` · ${f(x.base_fee_c)}c base fee`, `${table(['Refined input', 'm³ required'], Object.entries(x.inputs_m3).sort((a, b) => a[0].localeCompare(b[0])).map(([k, v]) => [k, f(v, 0)]))}<p>Base print time: ${time(x.base_seconds)} · With talents: ${time(duration(x.base_seconds, 'Printer'))}</p><p>Base fee: ${f(x.base_fee_c)}c · With talents: ${f(fee(x.base_fee_c))}c</p>${cartButton('printed', x.name)}`)).join('')}`);
    }
    return s;
}

/** Build the Mining Lasers section. */
function renderMiningLasersPage() {
    let s = '';
    let q = $('search').value.toLowerCase();
    if (active === 'Mining Lasers') {
        let arr = filtered(D.mining_lasers).slice().sort((a, b) => oreOrder(a.ore) - oreOrder(b.ore) || a.tier - b.tier || ({ Standard: 0, Fuel: 1, Nuclear: 2 }[a.variant] - { Standard: 0, Fuel: 1, Nuclear: 2 }[b.variant]));
        s = panel('Mining lasers', `${expandControls()}${arr.map(x => itemDetails(esc(x.name) + ` · ${f(x.mining_rate_m3_s, 3)} m³/s`, `<h3>Printed parts required</h3>${table(['Component', 'Quantity'], Object.entries(x.inputs_items))}${table(['Specification', 'Value'], [['Tier', `T${x.tier}`], ['Ore', `${x.ore} or Ice`], ['Mining rate', `${f(x.mining_rate_m3_s, 3)} m³/s`], ['Frame', x.frame], ['Circuit board', x.board], ['Each required component', x.components_each ?? 'Unknown'], ['Pressure Vessel', x.variant === 'Standard' ? 'None' : 'Required'], ['Fuel consumption', x.fuel_cartridge_pct_per_min ? `${f(x.fuel_cartridge_pct_per_min)}% cartridge/min` : 'None'], ['Baseline fabrication fee', `${f(x.base_fee_c)}c`], ['Talent-adjusted fee', `${f(fee(x.base_fee_c))}c`], ['Baseline fabrication time', time(x.base_seconds)], ['Talent-adjusted fabrication time', time(duration(x.base_seconds, 'Fabricator'))]])}${cartButton('laser', x.name)}`)).join('')}`);
    }
    return s;
}

/** Build the Engines section. */
function renderEnginesPage() {
    let s = '';
    let q = $('search').value.toLowerCase();
    if (active === 'Engines') {
        let arr = filtered(D.engines).slice().sort((a, b) => a.tier - b.tier || a.name.localeCompare(b.name));
        s = panel('Engines', `${expandControls()}${arr.map(x => itemDetails(esc(x.name) + ` · ${f(x.seconds_per_distance, 3)}s/distance`, `<h3>Printed parts required</h3>${table(['Component', 'Quantity'], Object.entries(x.inputs_items || {}).sort((a, b) => a[0].localeCompare(b[0])))}${table(['Specification', 'Value'], [['Travel time', `${f(x.seconds_per_distance, 3)}s/distance`], ['Fuel required', x.cartridge_pct_per_distance ? 'Liquid Hydrogen Cartridge' : 'No'], ['Unfueled travel time', x.cartridge_pct_per_distance ? `${f(x.unfueled_seconds_per_distance, 3)}s/distance` : 'Not applicable'], ['Fuel consumption', x.cartridge_pct_per_distance ? `${f(x.cartridge_pct_per_distance, 3)}% per distance` : 'None'], ['Base fabrication fee', `${f(x.base_fee_c)}c`], ['Talent-adjusted fee', `${f(fee(x.base_fee_c))}c`], ['Baseline fabrication time', time(x.base_seconds)], ['Talent-adjusted fabrication time', time(duration(x.base_seconds, 'Fabricator'))]])}${cartButton('fabricated', x.name)}`)).join('')}${info('Only Fuel Powered Engines require fuel; standard Engine 1 and Engine 2 operate without cartridges.')}`);
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
            return panel(group, `${expandControls()}${arr.map(x => itemDetails(`${esc(x.name)} · ${f(x.base_fee_c)}c base fee`, `<p>${esc(x.description)}</p>${table(['Printed component', 'Items needed'], Object.entries(x.inputs_items).sort((a, b) => a[0].localeCompare(b[0])).map(([k, v]) => [k, v]))}<p>Base fee: ${f(x.base_fee_c)}c · With talents: ${f(fee(x.base_fee_c))}c</p><p>Base time: ${time(x.base_seconds)} · With talents: ${time(duration(x.base_seconds, 'Fabricator'))}</p>${cartButton('fabricated', x.name)}`)).join('')}`);
        }).join('') + panel('Legacy and event items', filtered(D.reference_items).map(item => itemDetails(esc(item.name), esc(item.description))).join(''));
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
        s =
            panel(
                "Recorded station locations",
                "<p>These community records are a snapshot. Check the game map for current facilities and newly built stations.</p>" +
                    table(
                        ["Station", "Coordinates", "Facilities"],
                        filtered(D.stations).map((x) => [x.name, x.coordinates.join(", "), x.facilities.join(", ")]),
                    ),
            ) +
            panel(
                "How community projects work",
                `<p>Community projects allow players to deliver the goods specified by each project. Station maintenance uses whole fabricated modules, and Slingshot construction uses printed components. The game pays the displayed reward immediately when a contribution is made.</p><h3>Example: Add two refining lanes</h3><p>This is an <b>illustrative project</b>, not a current project listing. Imagine a station has a project requiring 100 m³ refined Iron and 50 m³ refined Copper. Completing it would add two shared refining lanes, letting two additional refining orders process at the same time.</p><p>If the project offers 12c per m³ of Iron, contributing 10 m³ Iron would immediately pay <b>120c</b> and advance the project's progress by 10 m³.</p><p>Ordinary projects expire after seven days without a contribution. Equipment maintenance and Slingshot construction remain open until completion or administrative closure.</p>${info("The example amounts and reward rate are hypothetical. Always check the current in-game project for requirements, rates, location, and status.")}`,
            ) +
            panel(
                "Station operations",
                `<p>Station inventory is private to each player. Refining, printing, and fabrication have private and shared production lanes. A player can rent one extra private lane per facility at a station for 5,000 credits for 24 hours. Canceling a queued order refunds its processing fee; canceling an active order does not.</p><p>Stations are permanent. The map is a two-dimensional coordinate grid centered on Directorate HQ at (0, 0). Discovered spaces refresh after 24 hours unless active asteroid mining pauses expiration.</p>`,
            );
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
