# Hard Sends

A small static site: plain HTML/CSS/JS, no build step. Open `index.html`
in a browser, or serve the folder with any static file server.

## Structure

```
hardsends/
├── index.html                 Home (welcome + "Climbing Info" section)
├── about.html                 About page
├── contact.html                Contact form (front-end only for now)
├── jctest.html                 "Take the Test" — placeholder, will redirect
│                                to Julian's climbing test site once that
│                                URL exists (see JULIANS_TEST_URL in the file)
├── tools/
│   ├── crimp-conversion.html   Edge-depth → load% calculator
│   └── climbing-plan.html      Placeholder — blank for now
├── css/
│   └── style.css               One shared stylesheet, all colors/fonts/
│                                spacing defined as CSS variables at the top
└── js/
    └── main.js                 Shared navbar behavior (dropdown + mobile menu)
```

## Adding a new top-level page

1. Copy any existing page (e.g. `about.html`) as a starting point.
2. Update the `<title>`.
3. In the copied navbar block, add/update `aria-current="page"` on the
   link that matches the new page.
4. Go back into **every other page's** navbar block and add a matching
   `<li><a href="yourpage.html">Your Page</a></li>` so the link shows
   up site-wide. (The navbar is plain copy-pasted HTML, not a shared
   template — this is the one bit of manual upkeep it costs in exchange
   for zero build tooling.)

## Adding a new "Other Tools" page

1. Create the file under `tools/`.
2. Add a link to it inside the `.dropdown-menu` block in **every** page's
   navbar (same manual-upkeep note as above).
3. Use `tools/crimp-conversion.html` as a template for relative paths —
   files under `tools/` reference the shared CSS/JS as `../css/style.css`
   and `../js/main.js`, and link back to top-level pages as `../about.html`.

## Styling

All colors, fonts, and spacing are defined once as CSS variables at the
top of `css/style.css` (`:root { ... }`). Change a value there and it
updates everywhere.

## Crimp Conversion math

`tools/crimp-conversion.html` interpolates linearly between the
reference points defined in the `REFERENCE_POINTS` array in that file's
script:

| Edge depth | Load % |
|---|---|
| 0 mm  | 0%   |
| 5 mm  | 50%  |
| 10 mm | 75%  |
| 15 mm | 90%  |
| 20 mm | 100% |

To change or add reference values, edit that one array — the table
shown on the page and the calculation both read from it automatically.
