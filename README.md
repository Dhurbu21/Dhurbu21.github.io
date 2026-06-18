# Dharmendra Kalauni — personal website

A clean, multi-page academic site. Deep navy + warm gold, serif headlines over a clean sans.
No build step, no framework — plain HTML/CSS/JS that runs as-is on GitHub Pages.

## Files

```
index.html          Home — who you are + portfolio overview
research.html       Research narrative, dissertation model, methods
publications.html   20 journal articles + in-review + Extension publications
teaching.html       Teaching record + experience
awards.html         Awards (with photo slots)
styles.css          Shared styling (edit colors here)
script.js           Small scroll-reveal + footer year
images/             Put your photos here (see below)
```

## How to publish (replaces your current site)

1. Download the ZIP and **unzip it** on your computer — you'll get the files above.
2. Go to your repo: `github.com/Dhurbu21/Dhurbu21.github.io`
3. Click **Add file → Upload files**.
4. Drag in **all the files at once**, including the **`images` folder**. The new `index.html`
   replaces your old one; the rest are added.
5. Click **Commit changes**. Your site updates in 1–2 minutes at `https://dhurbu21.github.io`.

## Add your photos (anytime)

Drop image files into the `images/` folder using these exact names. Until a photo is added, a
tidy placeholder shows in its place — so you can publish first and add photos later.

| Where it appears              | File to add                      |
|-------------------------------|----------------------------------|
| Home — headshot (circle)      | `images/profile.jpg`             |
| Awards — NACTA 2026           | `images/award-nacta.jpg`         |
| Awards — AAAE 2026            | `images/award-aaae-2026.jpg`     |
| Awards — AAAE 2024            | `images/award-aaae-2024.jpg`     |
| Awards — AIAEE 2023           | `images/award-aiaee-2023.jpg`    |
| Awards — Best Oral 2019       | `images/award-nysc-2019.jpg`     |
| Awards — GlobalG.A.P. 2018    | `images/award-globalgap-2018.jpg`|

Tip: roughly landscape photos (e.g. 1200×750) look best in the award cards; the headshot can be square.
`.png` works too — just keep the same name (e.g. `profile.png`) and update the `src` in the HTML, or rename your file to `.jpg`.

## Add your CV

Upload a file named **`cv.pdf`** to the repo (same upload step). Every "CV / Download CV" button already points to it.

## Two small edits still needed

Open `teaching.html` and update the two employment dates:
- Graduate Research Assistant **start year** (currently shows 2021 — confirm).
- Agricultural Extension Officer **years** in Nepal (currently `20XX – 20XX`).

## Changing the colors

All colors live at the top of `styles.css` under `:root`. The two you'd most likely touch:
- `--gold` (the warm accent) and `--navy` (the dark backgrounds).
