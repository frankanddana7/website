# Studio Subasio — website

A static site for two artists working near Assisi. No build step, no framework,
no external dependencies — plain HTML, CSS and a little vanilla JS, so it can be
edited with a text editor and hosted directly on GitHub Pages.

## Right now: choosing a design

`index.html` is a **candidates picker**, not the real home page. It links to nine
complete skeleton sites in `candidates/c1` … `candidates/c9`, across three visual
styles and three levels of complexity. Open `index.html` and click through them.

Every candidate has the same nine pages and the same filenames, so they are
interchangeable:

| file | what it is |
|---|---|
| `index.html` | home |
| `about.html` | about the two artists |
| `paintings.html` | project page |
| `graphic-design.html` | project page |
| `silhouettes.html` | project page |
| `mosaics.html` | project page |
| `photography.html` | project page |
| `blank-1.html`, `blank-2.html` | spare project pages, ready to be renamed |
| `style.css` | all styling, one file |
| `images/` | artwork |

## Adopting a candidate

Move the contents of the chosen candidate folder to the repository root,
replacing this picker, and delete the other eight.

## Adding artwork

1. Put the image file in that candidate's `images/` folder.
2. Open the relevant project page and find the block marked
   `<!-- IMAGE BLOCK — copy this whole block to add another piece -->`.
3. Copy the whole block, paste it below, and change the `src`, the `alt`,
   the title and the description.

Every project page follows that identical pattern, which is what makes it safe to
hand to a chatbot: "add these three photos to the mosaics page, following the
existing image blocks."

## Placeholders to replace

- Studio name **Studio Subasio** and artist names **Nome Uno** / **Nome Due**
- Contact details `ciao@studiosubasio.example` and `+39 000 000 000`
- Every `.svg` in each `images/` folder — these are generated stand-ins
