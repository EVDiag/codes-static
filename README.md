# codes-static

Static website for [codes.evdiag.net](https://codes.evdiag.net).

This is the public site for the **codes.** mobile app — landing page, privacy policy, terms of use, and support FAQ. Hosted on GitHub Pages with a custom domain.

## Files

| File | Purpose |
|---|---|
| `index.html` | Landing page with store links and feature overview |
| `privacy.html` | Privacy policy (required by Apple App Store + Google Play) |
| `terms.html` | Terms of use |
| `support.html` | Support contact + FAQ |
| `404.html` | Custom 404 |
| `style.css` | Shared CSS for all pages |
| `CNAME` | GitHub Pages custom domain (`codes.evdiag.net`) |
| `.well-known/apple-app-site-association` | iOS Universal Links manifest (template — fill in Apple Team ID) |
| `.well-known/assetlinks.json` | Android App Links manifest (template — fill in SHA-256 fingerprint) |

## Local preview

```bash
# Any static server works. Examples:
python3 -m http.server 8000
# or
npx serve .
```

## Deploy

Changes pushed to `main` deploy automatically via GitHub Pages.

```powershell
cd C:\Users\rfmot\codes-static
git add .
git commit -m "Update privacy policy"
git push
```

Site updates within ~1 minute of push.

## Universal Links / App Links setup (deferred)

Both `.well-known` files contain placeholder values that must be replaced before iOS Universal Links or Android App Links will work:

- **Apple Team ID** (10 characters): developer.apple.com → Membership → Team ID. Replace `REPLACE_WITH_APPLE_TEAM_ID` in `apple-app-site-association`.
- **Android SHA-256 fingerprint**: from Play Console after first AAB upload → Setup → App integrity → App signing key certificate → "SHA-256 certificate fingerprint". Remove the colons (uppercase hex) and paste into `assetlinks.json`.

Neither is required for the basic landing/privacy/terms/support pages to work.

## Contact

[support@evdiag.net](mailto:support@evdiag.net)
