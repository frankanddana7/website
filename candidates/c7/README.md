# Studio Subasio — candidate c7 (editorial / exhibition catalogue)

A typography-and-whitespace style: no boxes, no cards, no shadows. Large
serif headings, small-caps letterspaced labels, thin stone hairline rules,
and a narrow reading column offset to one side on desktop (like a printed
catalogue), collapsing to one column on mobile. "Studio Subasio" is a
placeholder studio name — swap it everywhere via find-and-replace.

## To add a new piece to a project page
Open the page (e.g. `paintings.html`), copy one whole block that starts
with `<!-- IMAGE BLOCK -->` and ends with `<!-- END IMAGE BLOCK -->`, paste
it just above `</div>` at the end of the list, then edit the image `src`,
`alt` text, title and description. Renumber the `<span class="piece-num">`
if you want the numbering to stay in order (it's just text, not automatic).

## To add a whole new project/series
Rename `blank-1.html` or `blank-2.html` (both are ready-to-edit copies of
the template), update its title/heading/intro and swap its image blocks,
then link to it from the nav on every page and from the index list on
`index.html`.
