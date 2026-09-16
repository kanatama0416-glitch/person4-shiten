import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const html = fs.readFileSync('index.html', 'utf8');
assert(html.startsWith('<!doctype html>'));
for (const id of ['intro', 'introEye', 'introBrand', 'introRays', 'tearToggle', 'p4Garden', 'p4GardenSvg']) {
  assert.equal(html.split(`id="${id}"`).length - 1, 1, `${id} must exist exactly once`);
}
assert(!/document\.(write|open)|\bfetch\s*\(|p4Preboot/.test(html), 'Serve complete HTML without a runtime loader');
for (const match of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
  const src = match[1].match(/src="([^"?]+)/)?.[1];
  if (src) {
    assert(src.startsWith('./'), 'Scripts must be local');
    assert(/\bdefer\b/.test(match[1]), 'External scripts must not block parsing');
    const code = fs.readFileSync(src, 'utf8');
    assert(!/document\.(write|open)|\bfetch\s*\(|\beval\s*\(/.test(code), 'No secondary code or HTML loaders');
    new vm.Script(code, { filename: src });
  } else new vm.Script(match[2]);
}
assert(html.includes("duration:650,delay:250"));
assert(html.includes("duration:600,delay:300"));
assert(html.includes("intro.remove()},1050)"));
console.log('Static HTML, common intro timings, local deferred scripts and JS syntax verified.');
