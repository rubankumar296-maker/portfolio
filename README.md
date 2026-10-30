# Ruban Kumar N — Data Analyst Portfolio

An editorial-style, single-page portfolio for an entry-level data analyst.
Built with plain HTML, CSS, and JavaScript — no framework, no build step, and no
external runtime dependencies. Fonts, custom cover art, dashboard screenshots,
and the résumé are all bundled locally, so the site works offline and straight
from the file system.

The portfolio features three end-to-end analytics case studies:

1. **Global Superstore Sales & Profit Analytics** — 4-page Power BI report on 51,290 sales transactions (2011–2014)
2. **Customer Financial Profile Analysis** — 4-page Power BI report on 1,000 customer profiles
3. **FIFA World Cup 2026 Player Performance** — 3-page Power BI report on 54,600 player-match records

Only these three projects are included.

---

## Open the portfolio

Double-click **`index.html`**.

If you prefer a local server:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

---

## What's included

### Design
- Warm monochrome editorial theme by default (off-white paper, warm-grey panels, near-black ink, clay accent), with an optional black + sand dark theme
- Dashboard-style card system: white hairline cards with cobalt data ink in light; charcoal cards with amber, cyan, and violet neon accents in dark
- Short section markers in the reference style: About me, Project Section, Service, Toolkit, Process, Credentials, Thank you
- Full-width "Project Section" band with three project cards, placed after About me
- Theme-aware SVG chart cover art (cream, paper, and ice tiles in light; neon-tinted charcoal tiles in dark) instead of dashboard screenshots
- Display typography (Instrument Serif) paired with Sora and Manrope
- Fine grid, soft neutral washes, and thin grey rules
- Responsive layouts for desktop, laptop, tablet, and mobile
- Animated tool marquee, cursor accent, and reveal-on-scroll transitions

### Content
- Hero introduction with live Chennai (IST) clock and headline stats: 3 case studies, 11 dashboard pages, 107K+ records analysed
- "About me" section with a profile summary card, shown first after the hero
- "Project Section" cards with custom covers, exact dataset sizes, project summaries, case-study links, and GitHub links
- Three case studies with challenge, approach, report contents, stack, and screenshots
- "Service": prepare &amp; explore, query &amp; model, visualise &amp; explain
- "Toolkit" grouped by programming, SQL, business intelligence, and workflow, mirroring the résumé skills
- "Process": four steps — Ask → Prepare → Analyse → Explain
- "Credentials": education only (B.E. ECE, 2022–2026, CGPA 7.09/10); the résumé PDF lists the four Coursera certifications
- "Thank you" contact section with email, phone, LinkedIn, GitHub, and downloadable résumé

### Interaction
- Theme toggle with a saved preference
- Mobile navigation with Escape-to-close
- Scroll progress bar and active section highlighting
- Swipeable selected-work carousel with arrow controls, counter, and keyboard support below 1080 px
- Animated counters and reveal-on-scroll effects
- Full case-study dialogs with screenshot galleries, thumbnails, and arrow-key navigation
- Copy-email button with confirmation feedback
- Skip link, visible focus styles, and reduced-motion support
- Native `<dialog>` focus trapping and return focus to the opening control

---

## File structure

```text
Default Project/
├── index.html
├── README.md
├── css/
│   ├── fonts.css          # Sora, Manrope, Instrument Serif (base64-embedded)
│   └── styles.css         # All layout, theme, and responsive styling
├── js/
│   └── script.js          # Interactions + case-study content
└── assets/
    ├── favicon.svg
    ├── Ruban-Kumar-N-Resume.pdf
    ├── work-superstore.svg   # Custom cover art — Global Superstore
    ├── work-financial.svg    # Custom cover art — Customer Financial Profile
    ├── work-fifa.svg         # Custom cover art — FIFA World Cup 2026
    ├── work-superstore.jpg   # Social preview image (Open Graph)
    ├── superstore-overview.png
    ├── superstore-sales.png
    ├── superstore-profit.png
    ├── superstore-customers.png
    ├── fifa-overview.png
    ├── fifa-players.png
    ├── fifa-teams.png
    ├── financial-overview.png
    ├── financial-profile.png
    ├── financial-risk.png
    └── financial-segments.png
```

---

## Personalise it

### 1. Contact details

Contact links are written directly in **`index.html`** inside the contact
section, footer, and header. Shared values also live in the `CONFIG` object at
the top of **`js/script.js`**:

```js
const CONFIG = {
  email: 'rubankumar296@gmail.com',
  phone: '+918428908154',
  linkedin: 'https://www.linkedin.com/in/rubankumar7',
  github: 'https://github.com/rubankumar296-maker',
  timeZone: 'Asia/Kolkata'
};
```

Update both places if your details change.

### 2. Page copy

All visible copy is in **`index.html`**. Section markers to search for:

- `HERO`
- `ABOUT`
- `WORK`
- `SERVICES`
- `TOOLKIT`
- `CREDENTIALS`
- `CONTACT`

### 3. Selected work covers

The three project cards live inside the `WORK` section of **`index.html`**.
Each card uses one of the custom SVG covers in `assets/`:

- `work-superstore.svg`
- `work-financial.svg`
- `work-fifa.svg`

Replace those files to change the artwork, keeping the same filenames. The cards
switch to a swipeable, scroll-snapped carousel below 1080 px, with arrows,
a counter, and arrow-key support handled in **`js/script.js`**.

### 4. Case-study dialogs

Each project's dialog content is stored in the `PROJECTS` object in
**`js/script.js`**:

- `category`
- `title`
- `tagline`
- `challenge`
- `highlights`
- `report`
- `stack`
- `github`
- `images` (each with `src` and `alt`)

The project cards in `index.html` are separate, so update both if a summary
changes.

### 5. Colours and fonts

Design tokens are at the top of **`css/styles.css`**:

```css
:root { /* light monochrome theme (default) */ }
[data-theme='dark'] { /* black + sand theme (optional) */ }
```

Key tokens include `--bg`, `--ink`, `--accent`, `--line`, and the font stacks
`--font-display`, `--font-body`, and `--font-ui`.

The default light palette uses `#f4f2ec` for the page, `#e9e9e5` for soft
panels, `#fcfcfa` for dashboard cards, `#171815` for ink, `#9c4a22` for clay
accents, and `#151512` for the contact band. The optional dark palette is
pure-editorial black: `#0b0b0a` for the page, `#171716` for dashboard cards,
`#1c1c19` for raised panels, `#f4f2ea` for ink, `#e9a077` for sand accents, and
`#000000` for the contact band. The `<html>` element ships with
`data-theme="light"`; the toggle stores the visitor's choice in `localStorage`
under `rk-theme-v3`.

The card system follows the two analytics dashboard references. Light cards are
white with hairline rules, a 16px radius, and a soft warm shadow. Their chart
tiles cycle cream `#f3ece1`, paper `#fbfaf5`, and ice `#d5e3fb`, with cobalt
`#0e3b89` data marks. Dark cards are charcoal `#171716` with tinted neon borders,
and their tiles cycle amber `#f08418`, cyan `#98f3ff`, and violet `#b56cff` over
tinted charcoal, with a soft neon glow on the chart marks, icons, and card
accents. Every card surface uses the same `--card-*`, `--cover-*`, and
`--chip-bg` tokens; change those to re-skin the grid.

Both themes share one interaction accent family: clay `#9c4a22` on paper, sand
`#e9a077` on black. It carries the heading italics ("Our *value*", "Thank
*you*"), the brand mark, primary buttons, status dots, scroll progress, link
hovers, selection, and focus rings. Card-level accents are separate: cobalt in
light and amber/cyan/violet in dark, so switching themes changes the palette,
not the hierarchy.

### 6. Résumé

**`assets/Ruban-Kumar-N-Resume.pdf`** is the current résumé and is linked from
the header, hero, about card, and contact section. It summarises the same three
projects, with 51,290 sales transactions, 1,000 customer financial profiles, and
54,600 player-match records, plus the B.E. ECE degree (2022–2026, CGPA 7.09/10)
and four Coursera certifications: IBM Databases and SQL for Data Science with
Python, Microsoft Power BI Fundamentals and Data Modeling, Google Data Analytics
Professional Certificate, and Google Crash Course on Python. The website's
Credentials section stays education-only; the certifications appear in the PDF.

Replace the file with a newer PDF using the same filename and every résumé link
will keep working.

---

## Deploy for free with GitHub Pages

### Option A — user site

1. Create a repository named **`rubankumar296-maker.github.io`**.
2. Upload `index.html`, `css/`, `js/`, `assets/`, and `README.md`.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the **main** branch and the **/(root)** folder, then save.
6. The site will be available at `https://rubankumar296-maker.github.io/`.

### Option B — project site

1. Create a repository, for example **`portfolio`**.
2. Upload the same files.
3. Enable GitHub Pages from the `main` branch and root folder.
4. The site will be available at
   `https://rubankumar296-maker.github.io/portfolio/`.

All paths are relative, so the site works from either location.

---

## Quality notes

- Tested in Chromium/Edge at 1440, 1280, 1024, 820, 768, 600, 480, 390, 360,
  and 320 px widths with no horizontal overflow.
- Selected-work carousel arrows, counter, swipe scrolling, and arrow-key
  navigation were verified at tablet and mobile widths.
- Automated accessibility checks (axe-core, WCAG 2.1/2.2 A–AA) report zero
  violations in both light and dark themes, including with a case-study dialog
  open.
- Text contrast meets WCAG AA in both themes; the clay-on-paper light palette
  (5.5:1) and the sand-on-black dark palette (9.15:1) both stay legible, and
  secondary text clears 4.5:1 on every surface.
- No analytics, tracking, or third-party scripts are included.
- The current year in the footer is filled in automatically.

---

**Ruban Kumar N**
Aspiring Data Analyst · Python · SQL · Power BI
[github.com/rubankumar296-maker](https://github.com/rubankumar296-maker) ·
[linkedin.com/in/rubankumar7](https://www.linkedin.com/in/rubankumar7)
