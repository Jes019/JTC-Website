# JTC Property Services - deployment handoff

This folder is the production root. `index.html` is directly at the root and the site has no build step.

## Update before launch

1. The contact form no longer needs a backend endpoint - it opens a pre-filled WhatsApp chat to the business number instead (see "Connected integrations" below). `integrations.quoteEndpoint`/`enquiryEndpoint` in `js/config.js` are intentionally left empty and can stay that way unless a CRM integration is added later.
2. Add analytics only after selecting a platform and implementing any legally required consent.
3. Have the draft privacy and service terms reviewed professionally.
4. Confirm access, key-holding, emergency-authorisation, cancellation and annual-plan terms.

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

- WhatsApp enquiry flow: the contact form (`contact.html`, logic in `js/app.js`) validates the entered details client-side, then builds a pre-filled message from the submitted fields and opens `https://wa.me/35679599929?text=...` in a new tab so the visitor sends the enquiry directly to JTC's WhatsApp number. Nothing is sent to, or stored on, any server - the message only ever exists in the visitor's own browser and WhatsApp app. An email fallback (`JTCpropcare@gmail.com`) is shown alongside the WhatsApp link, both before submission (fineprint under the form) and in the success message.
- No other backend, CRM or analytics integration is connected. The site remains safe from accidental live submissions or tracking.

## Simulated or unconnected features

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
