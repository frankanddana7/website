# Studio Subasio — candidate c5

Style: clean, timeless "floating boxes" — white cards on a white page,
separated by thin stone hairlines and a soft shadow, serif headings, sans
body, lots of air. Desktop gets a sticky left sidebar of projects; it
collapses to a plain top bar on phones so it never eats screen height.

"Studio Subasio" and the two artist names are placeholders — swap for the
real studio and artist names everywhere they appear.

## To add an image to a project page
1. Drop your photo into `images/` (e.g. `images/my-photo.jpg`).
2. Open the project's `.html` file and copy one whole
   `<!-- IMAGE BLOCK --> ... <!-- END IMAGE BLOCK -->` chunk.
3. Paste it where you want the new piece, change `src` to your file, write
   real `alt` text, and update the title/description in `<figcaption>`.
4. Save. No CSS or JS edits needed — the gallery and lightbox pick it up
   automatically.
