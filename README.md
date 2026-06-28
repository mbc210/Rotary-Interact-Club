# Rotary Interact Club of Chinatown

A static marketing/community website for the Rotary Interact Club of Chinatown —
a youth service club (members ages 12–18) sponsored by Rotary International.

## What's here

| File | Purpose |
|------|---------|
| `index.html` | All page content (single-page site with anchored sections) |
| `styles.css` | Styling, responsive layout, Rotary brand palette |
| `script.js` | Mobile nav, scroll reveal, animated impact counters, contact form |

The site is fully **self-contained** — no build step, no frameworks, and no
external assets or CDN dependencies. Brand iconography is inline SVG and all
imagery is rendered with CSS gradients, so it works offline and hosts anywhere.

## Sections

Hero · About (What is Interact?) · What We Do (four avenues of service) ·
Projects · Upcoming Events · Impact stats · Join / contact form · Footer.

## Running it

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Customising

- **Colors** live as CSS variables at the top of `styles.css` (`:root`).
- **Content** (text, projects, events, contact details) is plain HTML in
  `index.html` — search for the section comment headers.
- The contact form is a front-end demo; wire the `submit` handler in
  `script.js` to a real endpoint (e.g. Formspree, Netlify Forms, or your own
  API) to receive messages.

## Note

This site was built as a from-scratch recreation. *Rotary* and *Interact* are
programs of Rotary International; replace placeholder contact details, dates,
and project descriptions with your club's real information before publishing.
