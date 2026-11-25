import { readFileSync, writeFileSync } from 'node:fs';

const file = name => new URL(name, import.meta.url);
const read = name => readFileSync(file(name), 'utf8');
const data = JSON.parse(read('data.json'));
writeFileSync(file('data.js'), '/* Generated from data.json by build.mjs. */\nwindow.OREFARER_DATA = ' + JSON.stringify(data, null, 2) + ';\n');
const page = read('index.html')
    .replace(/<link href="styles.css" rel="stylesheet"\s*\/>/, () => '<style>\n' + read('styles.css') + '</style>')
    .replace(/<script defer="" src="([\w.-]+\.js)">\s*<\/script>/g,
        (_, path) => '<script>\n' + read(path).replace(/<\/script/gi, '<\\/script') + '</script>');
writeFileSync(file('Orefarer_Wiki_Standalone_v1.01.html'), page.trimEnd() + '\n');
