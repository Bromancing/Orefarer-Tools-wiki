/* Orefarer Wiki v13 — bootstrap.js */

function draw() { document.querySelectorAll('nav button').forEach(x => x.classList.toggle('active', x.dataset.page === active)); render(); }

function migrateItemNames() {
    for (const [kind, oldName, name] of [
        ['refined', 'Fuel', 'Liquid Hydrogen'],
        ['printed', 'Fuel Cartridge', 'Liquid Hydrogen Cartridge'],
    ]) {
        const oldKey = cartKey(kind, oldName);
        const item = saved.cart[oldKey];
        if (!item) continue;
        const key = cartKey(kind, name);
        saved.cart[key] = { kind, name, qty: n(saved.cart[key]?.qty) + n(item.qty) };
        delete saved.cart[oldKey];
    }
    if (saved.calcs.recipe === 'Fuel Cartridge') saved.calcs.recipe = 'Liquid Hydrogen Cartridge';
}

function init(d) { D = d; migrateItemNames(); window.profile = saved.profile && typeof saved.profile === 'object' ? saved.profile : JSON.parse(JSON.stringify(D.character_defaults)); $('nav').innerHTML = sections.map(x => `<button data-page="${esc(x)}">${esc(x)}</button>`).join(''); $('nav').onclick = e => { let p = e.target.dataset.page; if (p) {
    active = p;
    $('search').value = '';
    draw();
} }; $('search').oninput = render; draw(); }

if (window.OREFARER_DATA)
    init(window.OREFARER_DATA);
else
    fetch('data.json').then(r => { if (!r.ok)
        throw Error('data unavailable'); return r.json(); }).then(init).catch(e => { $('content').innerHTML = `<section class="panel"><h2>Could not load database</h2><p>Start a local web server or use the standalone HTML version.</p></section>`; });
