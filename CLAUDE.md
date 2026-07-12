# Interact Club of Chinatown Website

Static, no-build website for the Interact Club of Chinatown, a Rotary International
youth service club in Manhattan's Chinatown. Plain HTML, CSS, and vanilla JS,
hosted on GitHub Pages. See `README.md` for the full layout.

## Writing style rules (MUST follow)

**Never use em dashes.** This is a hard rule with no exceptions.

- Do not put an em dash (Unicode U+2014, the long dash) anywhere: not in page copy,
  headings, `<title>` tags, alt text, meta descriptions, code comments, commit
  messages, PR descriptions, or documentation.
- Do not swap in an en dash (U+2013) as a substitute either. An en dash is fine
  only inside a numeric range that is already in the copy, such as ages 12 to 18.
- When you would reach for an em dash, rewrite the sentence instead: use a comma,
  a colon, parentheses, or split it into two sentences.
- Before committing, verify none crept in. This must return nothing:
  `grep -rnP "\x{2014}" . --include='*.html' --include='*.css' --include='*.js' --include='*.md'`

## Other conventions

- Keep the design tokens in `css/tokens/` aligned with the Interact Chinatown
  design system; they are treated as close-to-verbatim source of truth.
- Event and photo copy should stay factual: dates come from photo EXIF or the
  club's official reports, not invented.
