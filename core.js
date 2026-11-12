/* Orefarer Wiki v13 — core.js */

let D;

let active = 'Overview';

const sections = ['Overview', 'Resources & Refining', 'Printing', 'Mining Lasers', 'Engines', 'Other Fabrication', 'Ships', 'Stations & Projects', 'Skills & Talents', 'Calculators', 'Shopping Cart'];

const $ = id => document.getElementById(id);

const esc = x => String(x ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const n = x => Math.max(0, Number(x) || 0);

const f = (x, d = 2) => Number.isFinite(x) ? x.toLocaleString('en-US', { minimumFractionDigits: Math.min(2, d), maximumFractionDigits: 2 }) : '—';

const fmt = o => Object.entries(o || {}).map(([k, v]) => `${f(Number(v), 2)} ${k}`).join(', ');

const sortName = (a, b) => a.name.localeCompare(b.name);

const panel = (title, body) => `<section class="panel"><h2>${esc(title)}</h2>${body}</section>`;

const table = (h, rows) => `<div class="scroll"><table><thead><tr>${h.map(x => `<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(x => `<td>${esc(x ?? '—')}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

const time = s => { if (!Number.isFinite(s))
    return '—'; let x = Math.round(s), h = Math.floor(x / 3600), m = Math.floor((x % 3600) / 60), sec = x % 60; return (h ? `${h}h ` : '') + (m ? `${m}m ` : '') + `${sec}s`; };

const rank = name => n(window.profile?.talents?.[name]);

const skill = name => n(window.profile?.skills?.[name]);

const industrial = () => Math.pow(.98, rank('Industrialist'));

const fee = base => base * industrial();

const duration = (base, talent) => base / (1 + rank(talent) * .02);

const read = id => n($(id)?.value);

const opts = (arr, value) => arr.map(x => `<option value="${esc(value(x))}">${esc(x.name)}</option>`).join('');

const filtered = items => items.filter(x => JSON.stringify(x).toLowerCase().includes($('search').value.toLowerCase()));

const warnInfo = (message) => `<span class="warn-wrap"><strong class="warn-label">Warning</strong><details class="info-tip warn-tip"><summary aria-label="Warning details" title="Warning details">i</summary><div>${message}</div></details></span>`;

const info = (message) => `<details class="info-tip"><summary aria-label="More information" title="More information">i</summary><div>${message}</div></details>`;

const note = info('Baseline values may be inferred from discounted screenshots. Speed bonuses are modeled as rate increases; exact rounding and modifier stacking are not verified.');

const STORE = 'orefarer-wiki-v3';

const ORE_ORDER = ['Iron', 'Copper', 'Silicon', 'Carbon', 'Titanium', 'Silver', 'Gold', 'Uranium'];

const oreOrder = x => { let i = ORE_ORDER.indexOf(x); return i < 0 ? 999 : i; };

const calcDefaults = { ore: '100', quality: '15', oreprice: '3.98', materialcost: '30', listing: '500', x1: '0', y1: '0', x2: '3', y2: '4', travelDistance: '5', dronen: '2', shipcargo: '120', droneDistance: '5', refineqty: '100', refineq: '15' };

let saved = { profile: null, calcs: {}, cart: {} };

try {
    saved = Object.assign(saved, JSON.parse(localStorage.getItem(STORE) || '{}'));
}
catch (e) { }

const save = () => { try {
    localStorage.setItem(STORE, JSON.stringify({ profile: window.profile, calcs: saved.calcs, cart: saved.cart }));
}
catch (e) { } };

const stored = (id, def) => esc(saved.calcs[id] ?? def);

const selected = (id, val) => saved.calcs[id] === val ? ' selected' : '';

const resetCalcs = () => { saved.calcs = {}; save(); render(); };

const resetAll = () => { saved.cart = {}; saved.calcs = {}; window.profile = JSON.parse(JSON.stringify(D.character_defaults)); save(); render(); };

const resetButton = (scope) => `<div class="reset-tools"><button class="action" data-reset="${scope}">Reset calculator</button></div>`;

const unit = x => String(x).replace(/m³/g, 'm<sup>3</sup>');

const cartKey = (kind, name) => kind + '|' + name;

const cartButton = (kind, name) => { const key = cartKey(kind, name), qty = saved.cart?.[key]?.qty ?? 0; const extra = kind === 'refined' || kind === 'printing' ? 5 : 0; return `<span class="cart-control" data-cart-control="${esc(key)}"><label class="cart-quantity-label">Quantity<input class="catalog-qty" aria-label="Quantity of ${esc(name)}" type="number" min="0" step="1" value="${qty || 1}" data-cart-kind="${esc(kind)}" data-cart-name="${esc(name)}"></label><button type="button" class="action cart-increment" data-amount="1" title="Click for +1; hold to add 10 per second">+1</button>${extra ? '<button type="button" class="action cart-increment" data-amount="5" title="Click for +5; hold to add 10 per second">+5</button>' : ''}<button class="action add-cart ${qty ? 'in-cart' : ''}" data-cart-kind="${esc(kind)}" data-cart-name="${esc(name)}">${qty ? 'Remove from cart' : 'Add to cart'}</button><span class="cart-status">${qty ? `In cart: ${f(qty, 2)}` : 'Not in cart'}</span></span>`; };

const expandControls = () => `<div class="expand-tools"><button class="action" data-expand="all">Expand all</button><button class="action" data-expand="none">Collapse all</button></div>`;

const itemDetails = (heading, body) => `<details class="recipe"><summary>${heading}</summary><div class="recipe-body">${body}</div></details>`;
