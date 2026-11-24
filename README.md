# Orefarer Wiki v1.01

This is the editable, multi-file edition of the Orefarer Wiki.

## Open the wiki

Keep all files together in the same folder. Double-click **index.html** to open it in Edge or Chrome. The website uses ordinary local JavaScript files and does not require Python or an internet connection.

If your browser blocks local scripts, serve the folder using a local HTTP server, for example `py -m http.server 8000`, then open `http://localhost:8000`.

## Files

- `index.html`: Page structure and script loading.
- `styles.css`: Visual design, layout, responsive styling.
- `data.json`: Human-readable game data for editing or importing.
- `data.js`: The same game data, loaded directly in the browser. When editing data, keep `data.json` and `data.js` synchronized.
- `core.js`: Shared utilities, settings, cart controls and formatting.
- `pages.js`: Wiki page rendering and character profile.
- `calculators.js`: Refining, travel, printing and drone calculators.
- `cart.js`: Shopping cart and crafting-material breakdown.
- `bootstrap.js`: Navigation and startup.

## Skills and talents

In **Skills & Talents**, enter skill levels or total XP on the Skills tab. On the Talents tab, use + and − to plan ranks, then select **Apply** to save them to the local calculator profile. Each skill level above one grants a Talent Point. Older saved levels start at the minimum XP for that level.

## Community projects

The outdated project directory was removed. The Stations & Projects page now contains a hypothetical project example explaining the mechanics. It does **not** claim to show currently active projects.

## Notes

- Browser-saved settings use the same key as v12, where the browser permits local storage.
- Catalogue values and calculator rules use MMO main at `da4a5b5a`. Station records are historical community observations.
- Edit `data.json` and the source scripts, then run `node build.mjs` to regenerate both `data.js` and the standalone HTML. Node is required only for rebuilding.

## Single-file offline version

Open `Orefarer_Wiki_Standalone_v1.01.html` directly in your browser. It embeds all styles, scripts, and game data. Keep the other files for readable editing and future development.
