# Final quality-assurance report

## Completed

- Seven production pages: home, services, pricing, about, contact, privacy and terms.
- Responsive CSS breakpoints at 1000px, 760px and 450px; grid layouts collapse without fixed-width page containers.
- Sticky header, keyboard-accessible mobile menu, skip link, visible focus styles and touch-sized controls.
- Keyboard-operable inspection demonstration with loading and reset states.
- Reduced-motion support disables reveal transitions and smooth scrolling.
- Quote form includes required fields, native and JavaScript validation, honeypot and consent, and now opens a pre-filled WhatsApp chat to JTC's number (+356 7959 9929) on valid submission, with an email fallback shown both before and after submission. No backend endpoint is used or required.
- Estimator separates monthly and one-off costs, displays VAT status and exclusions, and does not imply a booking.
- Approved logo copied unchanged, canonical path verified and descriptive alt text supplied.
- LocalBusiness structured data, semantic headings, local SEO metadata and Open Graph metadata included.
- Automated checks cover required files, local links/assets, integration safety and 27 important commercial values.
- No invented testimonials, awards, licences, certifications, customer counts or guarantees.

## Commercial wording checked

- VAT inclusion and yearly agreement wording for the three published care-plan prices.
- Additional services remain fully described but show no public prices and route visitors into the tailored proposal form.
- Visual inspection, appliance check, damage report and property-insurance limitations.
- Major/licensed work, access authorisation, availability and variable-price wording.

## External items still required

- Analytics choice and consent implementation, if needed.
- If a CRM/back-office system is added later, the WhatsApp flow can stay as a fallback or be replaced with a wired form endpoint - neither is required for the site to work today.
- Professional review of privacy, cookies, terms, key holding, access authorisation, retention, emergency authority, cancellation, liability and contractor terms.
- GitHub repository URL and final Vercel project/domain.

## Browser QA note

Automated file, asset, link and JavaScript checks were completed locally. The isolated in-app browser could not access the host-local preview server, so final visual checks on physical desktop/tablet/mobile browsers should be repeated on the Vercel preview URL before production launch.
