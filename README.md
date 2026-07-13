# JTC Property Services - deployment handoff

This folder is the production root. `index.html` is directly at the root and the site has no build step.

## Update before launch

1. Add the chosen form endpoint to `js/config.js` under `integrations.quoteEndpoint`.
2. Add analytics only after selecting a platform and implementing any legally required consent.
3. Have the draft privacy and service terms reviewed professionally.
4. Confirm access, key-holding, emergency-authorisation, cancellation and annual-plan terms.
5. Test one authorised form submission after the endpoint is connected.

## GitHub upload

Create an empty repository, then run these commands inside this folder:

```powershell
git init
git add .
git commit -m "Launch JTC Property Services website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Vercel deployment

Use `jtc-property-services-vercel.zip` from the parent output folder. Its nested asset paths use web-standard forward slashes.

1. Extract the ZIP locally before uploading, or commit the complete extracted folder to GitHub.
2. Confirm that `index.html`, `css`, `js` and `assets` are all at the repository or deployment root.
3. Import the GitHub repository in Vercel.
4. Choose “Other” as the framework preset.
5. Leave the build command empty.
6. Set the output directory to `.`.
7. Deploy, then open `/css/styles.css` on the production domain. It must show CSS rather than a 404 page.
8. Verify every page and form state on the production URL.

The included `vercel.json` adds clean URLs and baseline security headers.

## Connected integrations

- None. The site is intentionally safe from accidental live submissions or tracking.

## Simulated or unconnected features

- The proposal form validates, shows loading/error states and is ready for an endpoint, but does not transmit until configured.
- The inspection report is a clearly labelled fictional demonstration.
- Analytics and advertising tracking are not installed.

## Asset note

The original approved logo source is preserved unchanged. A lossless WebP derivative is used at `assets/logo/jtc-property-services-logo.webp` for faster delivery. The hero and two slider photographs were generated for this project and delivered as optimized WebP assets.

## Quality checks

Run from this folder:

```powershell
node tests/qa.mjs
node --check js/config.js
node --check js/app.js
```

See `QA-REPORT.md` for the launch checklist and remaining external dependencies.
