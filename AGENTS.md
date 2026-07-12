# Agent instructions

Guidance for any AI assistant or automated tool editing this repository.

## Never use em dashes

This is a hard rule with no exceptions.

- Do not put an em dash (Unicode U+2014, the long dash) anywhere: page copy,
  headings, `<title>` tags, alt text, meta descriptions, code comments, commit
  messages, PR descriptions, or docs.
- Do not substitute an en dash (U+2013) either. An en dash is acceptable only
  inside a numeric range already in the copy, such as ages 12 to 18.
- Rewrite instead: use a comma, a colon, parentheses, or two sentences.
- Verify before committing. This must return nothing:
  `grep -rnP "\x{2014}" . --include='*.html' --include='*.css' --include='*.js' --include='*.md'`

See `CLAUDE.md` for full project context and additional conventions.
