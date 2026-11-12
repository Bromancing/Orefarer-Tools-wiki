/* Orefarer Wiki v13 — calculators.js */

function laserOptions() { let ores = [...new Set(D.mining_lasers.map(x => x.ore))].sort((a, b) => oreOrder(a) - oreOrder(b)); return ores.map(ore => { let arr = D.mining_lasers.filter(x => x.ore === ore).sort((a, b) => a.tier - b.tier || ({ Standard: 0, Fuel: 1, Nuclear: 2 }[a.variant] - { Standard: 0, Fuel: 1, Nuclear: 2 }[b.variant])); return `<optgroup label="${esc(ore)}">${arr.map(x => `<option value="${esc(x.name)}"${selected('laser', x.name)}>T${x.tier} ${esc(x.variant)}${x.variant === 'Standard' ? '' : ' Powered'} Mining Laser</option>`).join('')}</optgroup>`; }).join(''); }

function calcUI() { let recipes = D.printing.slice().sort(sortName), drones = D.drone_specs.slice().sort(sortName); let field = (id, label, value) => `<label>${label}<input id="${id}" type="number" value="${stored(id, value)}" ${['x1', 'y1', 'x2', 'y2'].includes(id) ? '' : 'min="0"'}></label>`; let choose = (id, arr) => `<select id="${id}">${arr.map(x => `<option value="${esc(x.name)}"${selected(id, x.name)}>${esc(x.name)}</option>`).join('')}</select>`; return panel('Ore refining cost', `<div class="fields">${field('ore', 'Ore quantity m³', 100)}${field('quality', 'Quality %', 15)}${field('oreprice', 'Ore price c/m³', 3.98)}</div>${resetButton('ore')}<div id="oreout" class="result"></div>`) + panel('Printing and market', `<div class="fields"><label>Printed item${choose('recipe', recipes)}</label>${field('materialcost', 'Average refined material cost c/m³', 30)}${field('listing', 'Market listing price (c) for profit', 500)}</div>${resetButton('printing')}<div id="printout" class="result"></div>${info('Average material cost is an approximation; all refined inputs currently use the same price.')}`) + panel('Travel', `<div class="fields">${field('x1', 'Start X', 0)}${field('y1', 'Start Y', 0)}${field('x2', 'End X', 3)}${field('y2', 'End Y', 4)}${field('travelDistance', 'Distance (or enter coordinates)', 5)}<label>Ship tier<select id="travelTier"><option value="1"${selected('travelTier', '1')}>T1 (50 distance/click)</option><option value="2"${selected('travelTier', '2')}>T2 (75 distance/click)</option><option value="3"${selected('travelTier', '3')}>T3 (100 distance/click)</option></select></label><label>Engine / travel option<select id="travelengine"><option value="Wayfarer"${selected('travelengine', 'Wayfarer')}>Wayfarer (15s/distance)</option>${D.engines.slice().sort(sortName).map(x => `<option value="${esc(x.name)}"${selected('travelengine', x.name)}>${esc(x.name)}</option>`).join('')}</select></label></div>${resetButton('travel')}<div id="travelout" class="result"></div>${info('Piloting is modeled as a speed increase. Exact travel modifier stacking is not verified.')}`) + panel('Infinite mining / sustainable drone hauling', `<p>Maximum ship-to-station distance where drone hauling matches mining output.</p>${info('A steady-state model: drones fly round trips and refuel at the ship or station. Fuel availability, turnaround timing and cargo buffering may affect actual results. A full fuel tank per trip is not required.')}<div id="laserresource" class="mining-resource-title"></div><div class="fields"><label>Mining laser<select id="laser">${laserOptions()}</select></label><label>Resource being mined<select id="minedore"></select></label><label>Drone model${choose('drone', drones)}</label>${field('dronen', 'Active drones', 2)}${field('shipcargo', 'Ship cargo capacity m³', 120)}${field('droneDistance', 'Distance from station', 5)}<label>Ship tier<select id="droneTier"><option value="1"${selected('droneTier', '1')}>T1</option><option value="2"${selected('droneTier', '2')}>T2</option><option value="3"${selected('droneTier', '3')}>T3</option></select></label></div>${resetButton('drone')}<div id="droneout" class="result"></div><div id="dronedetails" class="subresult"></div>${info('Drone Operator talent changes drone speed, while its skill level changes the control limit. Drones refuel as needed at either endpoint. Veinseeker dual-laser power sharing is not included in this calculator. Active laser count is always one.')}`) + note; }

function syncMinedOre() { let laser = D.mining_lasers.find(x => x.name === $('laser')?.value); let ore = $('minedore'); if (!laser || !ore)
    return; let current = ore.value || saved.calcs.minedore; let allowed = [laser.ore, 'Ice']; ore.innerHTML = allowed.map(v => `<option value="${esc(v)}">${esc(v)}</option>`).join(''); ore.value = allowed.includes(current) ? current : laser.ore; saved.calcs.minedore = ore.value; let display = $('laserresource'); if (display)
    display.textContent = 'Resource being mined: ' + ore.value; }

function bindCalcs() {
    syncMinedOre();
    const coordIds = ['x1', 'y1', 'x2', 'y2'];
    const updateDistance = () => {
        const coords = coordIds.map(id => Number($(id).value));
        if (coords.some(v => !Number.isFinite(v)))
            return;
        const distance = Math.hypot(coords[2] - coords[0], coords[3] - coords[1]);
        $('travelDistance').value = String(Number(distance.toFixed(2)));
        saved.calcs.travelDistance = $('travelDistance').value;
        saved.calcs.travelDistanceMode = 'coordinates';
    };
    // Coordinates are authoritative unless the last deliberate edit was a manual distance.
    if (saved.calcs.travelDistanceMode !== 'manual')
        updateDistance();
    document.querySelectorAll('#content input,#content select').forEach(el => {
        const handle = () => {
            if (el.id === 'laser')
                syncMinedOre();
            saved.calcs[el.id] = el.value;
            if (coordIds.includes(el.id))
                updateDistance();
            else if (el.id === 'travelDistance')
                saved.calcs.travelDistanceMode = 'manual';
            save();
            calculate();
        };
        el.addEventListener('input', handle);
        if (coordIds.includes(el.id))
            el.addEventListener('change', handle);
    });
    calculate();
}

function calculate() {
    let ore = read('ore'), q = read('quality') / 100, out = ore * q;
    $('oreout').innerHTML = unit(`${f(out, 3)} m³ refined · ${f(ore * read('oreprice') + fee(out))}c total · ${f(fee(out))}c processing fee`);
    let rec = D.printing.find(x => x.name === $('recipe').value), material = Object.values(rec.inputs_m3).reduce((a, b) => a + b, 0) * read('materialcost'), prod = material + fee(rec.base_fee_c_estimate), listing = read('listing');
    $('printout').innerHTML = unit(`${f(prod)}c production · ${time(duration(rec.base_seconds_estimate, 'Printer'))} printing · ${f(listing * .98 - prod)}c profit after 2% market fee`);
    let dist = read('travelDistance'), eng = D.engines.find(x => x.name === $('travelengine').value), way = $('travelengine').value === 'Wayfarer', speed = way ? 15 : (eng?.seconds_per_distance ?? 30);
    let travelTier = Math.max(1, Math.min(3, read('travelTier') || 1)), travelMax = [0, 50, 75, 100][travelTier], clicks = dist > 0 ? Math.ceil((dist - 1e-9) / travelMax) : 0;
    let travelWarning = travelTier > (skill('Captain') >= 20 ? 3 : skill('Captain') >= 10 ? 2 : 1) ? warnInfo('Captain level is insufficient for the selected ship tier.') : '';
    $('travelout').innerHTML = unit(`${f(dist, 3)} distance · ${time(dist * speed / (1 + rank('Piloting') * .025))} travel · <b>${clicks} travel click${clicks === 1 ? '' : 's'}</b> (max ${travelMax} distance/click)${!way && eng?.cartridge_pct_per_distance ? ` · ${f(dist * eng.cartridge_pct_per_distance)}% of a Fuel Cartridge` : ' · no engine fuel required'} ${travelWarning}`);
    let laser = D.mining_lasers.find(x => x.name === $('laser').value), drone = D.drone_specs.find(x => x.name === $('drone').value), oreName = $('minedore').value, minerBonus = rank(oreName + ' Miner') * .02, rate = laser.mining_rate_m3_s * (1 + minerBonus);
    let num = Math.max(1, read('dronen')), cap = drone.cargo_m3 + rank('Drone Logistics'), spd = drone.seconds_per_distance / (1 + rank('Drone Operator') * .025), limit = skill('Drone Operator') >= 20 ? 4 : skill('Drone Operator') >= 10 ? 3 : 2;
    let theoretical = Math.max(0, (num * cap / rate) / (2 * spd));
    let practical = theoretical;
    let droneTier = Math.max(1, Math.min(3, read('droneTier') || 1));
    let actualDistance = read('droneDistance');
    let roundTripSeconds = 2 * actualDistance * spd;
    let throughput = roundTripSeconds > 0 ? num * cap / roundTripSeconds : Infinity;
    let netRate = Math.max(0, rate - throughput);
    let fillSeconds = netRate > 1e-10 ? read('shipcargo') / netRate : Infinity;
    let fuelPerTrip = 2 * actualDistance * drone.fuel_m3_per_distance;
    let fuelPerSecond = roundTripSeconds > 0 ? num * fuelPerTrip / roundTripSeconds : 0;
    let fuelUntilFull = Number.isFinite(fillSeconds) ? fuelPerSecond * fillSeconds : Infinity;
    let fuelPerHour = fuelPerSecond * 3600;
    $('droneout').innerHTML = unit(`Maximum theoretical sustainable distance: ${f(theoretical, 3)} distance units`);
    let notes = [];
    if (droneTier > (skill('Captain') >= 20 ? 3 : skill('Captain') >= 10 ? 2 : 1))
        notes.push(`Captain skill is insufficient to pilot a T${droneTier} ship.`);
    if (num > limit)
        notes.push(`Warning: Drone Operator skill level ${skill('Drone Operator')} permits only ${limit} drones.`);
    if (read('shipcargo') < cap)
        notes.push('Warning: Ship cargo capacity is smaller than one drone load.');
    if (laser.variant !== 'Standard')
        notes.push('Fueled mining lasers require cartridges and stop mining when cartridges run out; uninterrupted operation also requires ongoing cartridge supply.');
    if (laser.tier > (skill('Captain') >= 20 ? 3 : skill('Captain') >= 10 ? 2 : 1))
        notes.push('Warning: selected laser tier exceeds your Captain ship-tier unlock.');
    if (drone.tier > (skill('Captain') >= 20 ? 3 : skill('Captain') >= 10 ? 2 : 1))
        notes.push('Warning: selected drone tier exceeds your Captain ship-tier unlock.');
    $('dronedetails').innerHTML = unit(`<p>Mining rate: <b>${f(rate, 3)} m³/s</b> · Per-drone load: <b>${f(cap, 3)} m³</b> · Adjusted one-way drone time: <b>${f(spd, 3)} s/distance</b>.</p><div class="drone-metrics"><div><span>Entered distance</span><strong>${f(actualDistance, 3)}</strong></div><div><span>Drone hauling rate</span><strong>${Number.isFinite(throughput) ? f(throughput, 3) + ' m³/s' : 'Instantaneous (distance 0)'}</strong></div><div><span>Time until ship fills</span><strong>${Number.isFinite(fillSeconds) ? time(fillSeconds) : 'Sustainable / no fill'}</strong></div><div><span>Fuel per round trip, per drone</span><strong>${f(fuelPerTrip, 3)} m³</strong></div><div><span>${Number.isFinite(fillSeconds) ? 'Estimated drone fuel until full' : 'Estimated drone fuel per hour'}</span><strong>${f(Number.isFinite(fillSeconds) ? fuelUntilFull : fuelPerHour, 3)} m³</strong></div></div>${info('Estimates assume an initially empty ship, continuous mining, full-load drone trips, continuous average hauling, sufficient refueling supplies and no turnaround delays. Actual cargo fills in steps, so the true time may differ. Fuel use includes both outbound and return travel. Drones can refuel at either endpoint.')}${notes.length ? warnInfo(notes.map(x => `<p>${esc(x)}</p>`).join('')) : ''}`);
}
