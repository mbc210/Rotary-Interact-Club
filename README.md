# Interact Club of Chinatown — Website

Static website for the **Interact Club of Chinatown**, a youth service club and branch of **Rotary International** (Interact is Rotary's program for young people aged 12–18), serving Manhattan's Chinatown in New York City.

Implemented from the club's [Claude Design](https://claude.ai/design) project — *Interact Chinatown Design System* — which is built on Rotary International's public brand guidelines.

## Pages

| Page | Description |
| --- | --- |
| `index.html` | Home — hero, impact stats, mission, upcoming events, CTA band |
| `events.html` | Events & volunteer days, filterable by category |
| `join.html` | Get involved — club info + membership application form |

## Extras

- `newsletter/index.html` — monthly email newsletter template
- `social/event-square.html` — 1080×1080 event announcement graphic
- `social/stat-square.html` — 1080×1080 impact-stat graphic
- `social/story-recruit.html` — 1080×1920 recruiting story graphic

The social templates are fixed-size artboards: open one in a browser and screenshot the `.post` element (e.g. with a browser device-size of 1080×1080) to export a post image.

## Structure

- `css/styles.css` — design-system entry point (imports all tokens)
- `css/tokens/` — brand tokens: colors, typography, spacing, effects, fonts (verbatim from the design system)
- `css/site.css` — website component and layout styles
- `js/site.js` — mobile nav, event filters, join-form success state

No build step — open `index.html` directly or host with any static server (works as-is on GitHub Pages).

## Brand notes

- **Colors:** Sky Blue `#00A2E0` (Interact identity), Rotary Royal Blue `#17458F`, Rotary Gold `#F7A81B` (high-emphasis accent, used sparingly). Extended palette colors code event categories.
- **Type:** Open Sans (Frutiger substitute) for headlines/UI; Georgia (Sentinel substitute) for body prose.
- **Logo:** the official Interact wheel logo is *not* included — it may only be generated from Rotary's official logo builder. The type-only wordmark in the header/footer is a stand-in; swap in the real lockup when available.
- **Photography:** event cards, highlight cards, and heroes fall back to brand gradients until photos are added. Club photos live in `assets/photos/` and are wired into the homepage "Recent highlights" section (`.hl-media`) and event-card `.event-media` slots.
