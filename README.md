# cruan2.github.io

Personal site — QA engineering by day, game projects in flight by night.
Plain HTML/CSS/JS, no build step, no frameworks. Push to `main` and GitHub Pages serves it.

## Design notes

- Palette comes from the **NOBODY** city palette v4 (`Design/branding/city-palette.svg` in the
  game repo): Searchlight/Cladding whites for the field, Pollen Gold `#d6a93c` for wayfinding,
  the six corp accents (`#ffb020 #2fe0dc #ff2e78 #c6fb39 #8a78e0 #45a4ff`) as the "ad layer."
- The gold line that draws down the page as you scroll is the wayfinding/runner-vision motif —
  built in `js/main.js` from the invisible `.route-node` markers in `index.html`.
- Light theme is the daylight city; the toggle (or OS dark mode) switches to the night city.

## Editing

- **Add a project:** in `index.html`, find the HTML comment `── TEMPLATE: copy this card ──`
  inside the `#projects` section. Copy the template card over one of the `card slot`
  placeholders, pick a `--card-accent` color, a status chip class, and set the meter width.
- **Text/skills:** everything lives in `index.html`; styles in `css/style.css`.
- **Preview locally:** any static server works, e.g. `python -m http.server` then
  open <http://localhost:8000>.
