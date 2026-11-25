/* Orefarer Wiki v13 — cart.js */

function cartUI() { let entries = Object.entries(saved.cart || {}); let rows = entries.map(([key, x]) => `<tr><td>${esc(x.name)}</td><td>${esc(x.kind)}</td><td><input class="cart-qty" type="number" min="0" step="any" data-key="${esc(key)}" value="${f(x.qty, 0)}"></td><td><button class="action cart-remove" data-key="${esc(key)}">Remove</button></td></tr>`).join(''); return panel('Shopping Cart / Crafting Planner', `<p>Build a shopping list from refined materials, printed parts, fabricated equipment, and ships. Quantities of refined products are m³; all others are item counts.</p><div class="scroll"><table><thead><tr><th>Product</th><th>Type</th><th>Quantity</th><th></th></tr></thead><tbody>${rows || '<tr><td colspan="4">Your cart is empty. Add items from the catalog pages.</td></tr>'}</tbody></table></div><label class="quality-toggle"><input type="checkbox" id="individualQuality" ${saved.calcs.individualQuality === 'true' ? 'checked' : ''}> Set separate ore quality percentages</label><div class="fields"><label>Universal ore quality (%)<input type="number" id="cartquality" min="0.001" max="100" step="any" value="${stored('cartquality', '15')}" ${saved.calcs.individualQuality === 'true' ? 'disabled' : ''}></label><label>Ice purity (%)<input type="number" id="cartice" min="0.001" max="100" step="any" value="${stored('cartice', '85')}"></label></div><div id="individualQualityFields" class="fields" ${saved.calcs.individualQuality === 'true' ? '' : 'hidden'}>${ORE_ORDER.map(ore => `<label>${ore} quality (%)<input type="number" class="individual-quality" data-ore="${ore}" id="cartq_${ore}" min="0.001" max="100" step="any" value="${stored('cartq_' + ore, '15')}"></label>`).join('')}</div><div class="reset-tools"><button class="action" id="cartreset">Reset cart</button></div><div id="cartresults"></div>${info('Raw-ore estimates assume uniform ore quality for each resource. Refining, printing, fabrication and ship construction work durations are summed as work time, not wall-clock completion time; queues and parallel lanes can change elapsed time. Refining assumes a general refinery and the entered ore qualities. Material and time totals use proportional batches. Available batch sizes and rounding can change actual requirements. Ship construction times are fixed base values, reduced when a job starts with Shipwright talents. These estimates do not include mining or hauling time.')}`); }

function cartBreakdown() {
    let raw = {}, refined = {}, stages = { refining: 0, printing: 0, fabrication: 0, shipbuilding: 0 }, costs = { refining: 0, printing: 0, fabrication: 0 }, missing = [];
    let quality = Math.max(.00001, Math.min(100, read('cartquality'))) / 100, oreQuality = name => saved.calcs.individualQuality === 'true' ? Math.max(.00001, Math.min(100, read('cartq_' + name))) / 100 : quality, iceQuality = Math.max(.00001, Math.min(100, read('cartice'))) / 100;
    const add = (obj, k, v) => { obj[k] = (obj[k] || 0) + v; };
    const refine = (name, qty, depth = 0) => { if (qty <= 0)
        return; if (depth > 12) {
        missing.push('Circular recipe: ' + name);
        return;
    } add(refined, name, qty); const recipe = D.refining.products[name];
    if (recipe) {
        const batches = qty / recipe.output;
        stages.refining += duration(recipe.seconds * batches, 'Refiner');
        costs.refining += fee(qty);
        for (const [ingredient, amount] of Object.entries(recipe.inputs))
            refine(ingredient, amount * batches, depth + 1);
        return;
    } if (name === 'Water') {
        add(raw, 'Ice', qty / iceQuality);
        stages.refining += duration(5 * qty / iceQuality, 'Refiner');
        costs.refining += fee(qty);
        return;
    } if (D.resources.includes(name) && name !== 'Ice') {
        add(raw, name, qty / oreQuality(name));
        stages.refining += duration(10 * qty / oreQuality(name), 'Refiner');
        costs.refining += fee(qty);
        return;
    } missing.push('Unknown refined material: ' + name); };
    const printed = (name, qty) => { let r = D.printing.find(x => x.name === name); if (!r) {
        missing.push('Missing printing recipe: ' + name);
        return;
    } stages.printing += qty * duration(r.base_seconds, 'Printer'); costs.printing += qty * fee(r.base_fee_c); for (let [k, v] of Object.entries(r.inputs_m3))
        refine(k, qty * v); };
    const fabricated = (name, qty) => { let r = D.fabrication_recipes.find(x => x.name === name); if (!r) {
        missing.push(D.reference_items.some(item => item.name === name) ? name + ' has no current fabrication recipe.' : 'Missing fabrication recipe: ' + name);
        return;
    } stages.fabrication += qty * duration(r.base_seconds, 'Fabricator'); costs.fabrication += qty * fee(r.base_fee_c); for (let [k, v] of Object.entries(r.inputs_items))
        printed(k, qty * v); };
    const laser = (name, qty) => { let r = D.mining_lasers.find(x => x.name === name); if (!r) {
        missing.push('Unknown laser: ' + name);
        return;
    } for (const [part, amount] of Object.entries(r.inputs_items))
        printed(part, amount * qty);
    costs.fabrication += qty * fee(r.base_fee_c); stages.fabrication += qty * duration(r.base_seconds, 'Fabricator'); };
    for (let x of Object.values(saved.cart || {})) {
        let qty = n(x.qty);
        if (!qty)
            continue;
        if (x.kind === 'refined')
            refine(x.name, qty);
        else if (x.kind === 'printed')
            printed(x.name, qty);
        else if (x.kind === 'laser')
            laser(x.name, qty);
        else if (x.kind === 'fabricated')
            fabricated(x.name, qty);
        else if (x.kind === 'ship') {
            let ship = D.ships.find(s => s.name === x.name);
            if (!ship) {
                missing.push('Unknown ship: ' + x.name);
                continue;
            }
            for (let [k, v] of Object.entries(ship.construction_materials_m3))
                refine(k, qty * v);
            stages.shipbuilding += qty * ship.construction_hours * 3600 / (1 + rank('Shipwright') * .02);
        }
    }
    let materialRows = Object.entries(raw).sort((a, b) => oreOrder(a[0]) - oreOrder(b[0])).map(([k, v]) => [k, `${f(v, 2)} m³`]);
    let refinedRows = Object.entries(refined).sort((a, b) => oreOrder(a[0]) - oreOrder(b[0]) || a[0].localeCompare(b[0])).map(([k, v]) => [k, `${f(v, 2)} m³`]);
    let stageRows = Object.entries(stages).map(([k, v]) => [k, time(v)]);
    let costRows = Object.entries(costs).map(([k, v]) => [k, `${f(v, 3)}c`]);
    $('cartresults').innerHTML = `<h3>Raw resources required</h3>${table(['Raw ore', 'Required volume'], materialRows)}<h3>Refined materials required</h3><p class="small muted">Includes intermediate refined materials such as Water, Steel, and Titanium Steel. Quantities are production requirements, not additional raw-ore costs.</p>${table(['Refined material', 'Required volume'], refinedRows)}<h3>Processing and construction work</h3>${table(['Stage', 'Summed processing time'], stageRows)}<h3>Processing fees (talent-adjusted)</h3>${table(['Stage', 'Credits'], costRows)}<p class="result">Total processing fees: ${f(Object.values(costs).reduce((a, b) => a + b, 0), 3)}c</p>${missing.length ? warnInfo(missing.map(x => `<p>${esc(x)}</p>`).join('')) : ''}`;
}

function bindCart() { document.querySelectorAll('.cart-qty').forEach(el => el.oninput = () => { let x = saved.cart[el.dataset.key]; if (!x)
    return; x.qty = n(el.value); if (!x.qty)
    delete saved.cart[el.dataset.key]; save(); cartBreakdown(); }); document.querySelectorAll('.cart-remove').forEach(el => el.onclick = () => { delete saved.cart[el.dataset.key]; save(); render(); }); $('individualQuality').onchange = () => { saved.calcs.individualQuality = String($('individualQuality').checked); $('cartquality').disabled = $('individualQuality').checked; $('individualQualityFields').hidden = !$('individualQuality').checked; save(); cartBreakdown(); }; for (let id of ['cartquality', 'cartice', ...ORE_ORDER.map(x => 'cartq_' + x)])
    $(id).oninput = () => { saved.calcs[id] = $(id).value; save(); cartBreakdown(); }; $('cartreset').onclick = () => { saved.cart = {}; save(); render(); }; cartBreakdown(); }
