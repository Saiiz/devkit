# Security Policy

## Current design

DevKit is client-side: tool inputs are processed in the browser and are not intentionally uploaded by the tool implementations.

- JWT decoding parses header/payload only; it does **not** verify signatures.
- SHA-256 uses the browser Web Crypto API.
- UUIDs use `crypto.randomUUID()` or `crypto.getRandomValues()`.
- Local storage is treated as untrusted and parsed defensively.
- Regex patterns are limited to 500 characters to reduce accidental UI freezes.
- Clipboard copy has a secure-context API path plus a legacy fallback.
- A conservative Content Security Policy is included in the app shell.

## Reporting

If you discover a security vulnerability, please do not disclose sensitive details in a public issue. Contact the maintainers privately and provide enough information to reproduce and assess the issue.
