# Studio Subasio — candidate c8

Style: editorial / exhibition catalogue. White page, serif display
headings, small-caps letterspaced labels, thin stone hairlines as the
only divider, full-bleed images, index-style numbering (01, 02...).
"Studio Subasio" and both artist names are placeholders.

## To add an image
1. Drop your photo into `images/` (e.g. `images/my-photo.jpg`).
2. On the project page, copy one whole `<!-- IMAGE BLOCK -->...<!-- END
   IMAGE BLOCK -->` chunk and paste it where you want the new piece.
3. Change the `src` to `images/my-photo.jpg`, write real `alt` text, and
   edit the title/description in `<figcaption>`.
4. Add `piece--bleed` to the `<figure>` class and wrap the `<img>` in a
   `<div class="bleed">` if you want it to run full-width.

No numbering, CSS, or JS edits are needed — piece numbers and the fade-in
are automatic.
