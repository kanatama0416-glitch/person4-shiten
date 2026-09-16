# person4-shiten

04 is served as complete static `index.html`. The standard intro markup, CSS,
animation and 250/650/1050 ms timings match the current shared person1 base.
There is no runtime HTML fetch, document.write, or 04-specific loading screen.

- `p4-garden.js`: existing plant geometry and drawing; start/cancel and sizing
  are owned here. Path sampling starts on interaction, not during the intro.
- `p4-hints.js`: local snapshot of the shared eye hint and eye sprout designs;
  starts once after the intro, without fetching or evaluating remote code.
- `scripts/check-static.mjs`: static loading and syntax checks for deployment.
- `.github/workflows/pages.yml`: deploys only the page and its two scripts.
  A static `core.html` alias is generated for the existing 03 prefetch. It is
  never fetched by 04 to construct its page.

The obsolete runtime generator and document.write interception patches have
been removed. Future updates should edit these source files directly, without
adding HTML loaders or cross-repository runtime patches.

Run `node scripts/check-static.mjs` before deployment.
