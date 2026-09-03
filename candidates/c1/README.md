# Studio Subasio — candidate c1

Style: modern, rounded corners, pill-shaped nav and buttons, soft card
shadows, chunky system-font headings — a clean, obviously AI-generated
2024-style landing page look. White background, stone-tinted gradients
only on small surfaces (hero, cards, contact banner). No JavaScript, no
build step, one `style.css` file.

"Studio Subasio" and the two artist names are placeholders — swap them
for the real studio and artist names everywhere they appear.

## How to add an image
1. Drop your image file into `images/` (e.g. `images/my-photo.jpg`).
2. Open the relevant project page (e.g. `paintings.html`).
3. Copy one whole block between `<!-- IMAGE BLOCK -->` and
   `<!-- END IMAGE BLOCK -->` and paste it just above `</main>`'s
   contact banner, or anywhere in the sequence.
4. Change `src="images/01.svg"` to your new file, update the `alt` text,
   and edit the title/description in the `<figcaption>`.

To add a whole new project: rename `blank-1.html` or `blank-2.html`,
update its `<title>`/`<h1>`/intro, fill in image blocks, then add a link
to it from the nav (copy a `<nav class="pillnav">` line) on every page
and from the card grid on `index.html`.
