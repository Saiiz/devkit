# DevKit V1 — Release QA

## Automated checks

The project has already passed these checks on the maintainer machine:

- `npm install` — successful
- `npm run build` — successful (Vite production build)
- `npm test` — 3/3 tests passing

## QA fixes included in this package

- Complete light-theme overrides for navigation, cards, editors, results, filters, buttons, diff, color UI, cron and statistics.
- Accessible `:focus-visible` states for buttons, links and form controls.
- Base64 now uses `TextEncoder` / `TextDecoder` instead of the deprecated `escape` / `unescape` helpers.
- JWT Base64URL decoding now handles URL-safe characters and padding and decodes UTF-8 correctly.
- JWT remains explicitly **decode-only**; it never verifies a signature.
- Timestamp conversion now avoids calling `toISOString()` on invalid dates.
- Color picker falls back to a valid color while the HEX field contains an invalid value.
- Reduced-motion support remains enabled.

## Manual browser smoke test before publishing

For each tool, test: valid input, empty input, invalid input, copy action, and reset/navigation.

Also verify:

1. Dark → Light → Dark on the home page.
2. Dark → Light → Dark inside a tool page.
3. Sidebar active state and category filters.
4. Favorites add/remove and Favorites-only view.
5. `Ctrl+K` / `Cmd+K` search and `Escape` on mobile.
6. Mobile sidebar overlay and close button.
7. Browser console has no errors.
8. Chrome/Edge and Firefox if available.

## Security notes

All current tools are client-side. No application backend is required for the core features. Never paste production secrets into a third-party hosted instance unless you trust the deployment.

## Current V1 scope

The V1 tool catalog is intentionally limited to the tools implemented in `src/App.tsx`; feature ideas that are not implemented should not be advertised as available yet.
