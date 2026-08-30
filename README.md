# ⚡ DevKit

> V1 — first public release

A fast, open-source developer toolbox for everyday tasks.

## Features

DevKit V1 now includes **41 working tools**:

- JSON Formatter / Minifier and JSON Preview
- Base64, Number Base Converter and URL encoding
- UUID + Bulk UUID generation
- JWT Decoder, SHA hashes, HMAC, Password Generator and Password Strength
- Unix Timestamp and Cron Helper
- Regex Tester + Regex Cheat Sheet
- URL Parser, Query String, MIME Lookup, HTTP Status and IP/CIDR
- HEX/RGB/HSL/HSV/CMYK Color Converter, Palette and CSS Gradient
- Text Diff, Text Utilities, Slug and Case Converter
- HTML Escape, HTML Minifier, CSS Minifier and Markdown Preview
- XML Formatter, CSV ↔ JSON, JSON → TypeScript and `.env` Validator
- SQL Formatter, chmod Calculator, Lorem and Random Data
- SVG Optimizer
- Search, favorites, dark/light mode and responsive UI
- Client-side/local processing for developer inputs

## Requirements

- Node.js 20+
- npm

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Test

```bash
npm run test
```

## Contributing

Issues and pull requests are welcome. See `CONTRIBUTING.md`.

## License

MIT.

## Security & privacy

DevKit does not send tool input to a backend. JSON, Base64, JWT decoding, hashing, regex tests, URL encoding, color handling and text comparison run in the browser. JWT decoding **does not verify signatures**; it only parses the header and payload. Do not treat decoded claims as trusted.

The app also validates local storage reads, limits JWT/regex inputs, uses Web Crypto for SHA-256 and UUID generation when available, and respects `prefers-reduced-motion`.


## Audit note

The UI is intentionally client-only. There is no API key, database, analytics SDK, or server endpoint in the tool code. The JWT tool only decodes data and never claims a token is authentic. Regex input is bounded to reduce accidental browser freezes.


## What has been checked

The V1 release specifically hardens common edge cases and the expanded tool set: corrupted local storage, invalid Base64/JWT/URL input, unsafe timestamp ranges, invalid HEX colors, unavailable Clipboard/Web Crypto APIs, and overly long regex patterns. The navigation also supports keyboard search (`Ctrl/Cmd + K`), mobile drawer animation, active states, reduced-motion preferences, and staggered tool-card entry.

> Note: this environment could not complete `npm install` because the package registry request timed out, so a full dependency install/build was not executed here. The CI workflow uses `npm install` (not `npm ci`) because the repository intentionally does not ship a lockfile yet.

## GitHub Pages

This release is configured for `https://saiiz.github.io/devkit/` through `.github/workflows/deploy-pages.yml` and Vite `base: "/devkit/"`.
