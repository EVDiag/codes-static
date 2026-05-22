# codes.evdiag.net

Static website for the **codes.** mobile app — privacy policy, terms,
support, and landing page.

## What this is

This repository is hosted via **GitHub Pages** at the custom domain
`codes.evdiag.net`. The site is plain HTML/CSS with no build step.

## Structure

```
/                       — landing page (index.html)
/privacy                — privacy policy (privacy.html)
/terms                  — terms of service (terms.html)
/support                — support and FAQ (support.html)
/.well-known/
  apple-app-site-association   — iOS Universal Links (placeholders)
  assetlinks.json              — Android App Links (placeholders)
```

## Deployment

GitHub Pages serves the `main` branch. Pushing changes to `main`
automatically deploys to https://codes.evdiag.net within ~1 minute.

## DNS configuration

The custom domain is set up via Microsoft Entra DNS (where evdiag.net
is hosted):

| Type  | Host  | Points to            | TTL    |
|-------|-------|----------------------|--------|
| CNAME | codes | evdiag.github.io     | 1 hour |

The `CNAME` file in the repo root tells GitHub Pages to serve this
content at `codes.evdiag.net`.

## .well-known placeholders

Two files require real values before iOS Universal Links and Android
App Links will work:

### apple-app-site-association

Replace `REPLACE_WITH_APPLE_TEAM_ID` with the 10-character Apple
Developer Team ID, found at developer.apple.com → Membership.

### assetlinks.json

Replace `REPLACE_WITH_SHA256_FINGERPRINT_FROM_KEYSTORE` with the
SHA-256 fingerprint of the release keystore. Extract via:

```
keytool -list -v -keystore codes-release.keystore -alias codes-release
```

Find the line "SHA256:" and copy the 64-character hex string (no
colons, no spaces — but keep the uppercase letters).

Or, after Play Console signs your first AAB upload, retrieve from
**Play Console → Setup → App integrity → App signing key
certificate → SHA-256 certificate fingerprint**.

## License

Copyright (c) 2026 EVDiag. All rights reserved.
