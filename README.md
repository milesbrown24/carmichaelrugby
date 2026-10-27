# Carmichael Hawks Rugby

A complete geometric website rebuild, prepared for your GitHub → Netlify workflow. Uses the same Next.js / React foundation as Designs-Build and PC-Electric, with a simpler static export. Five selected photos supplied by the club and its original SVG logo are bundled locally; the mockup image is not used as the website. See PHOTO-SELECTION.md for the source files and placements.

## What is included

- Home, Teams, The club, Schedule, Registration, Resources, Contact and confirmation pages
- Responsive oval photo treatments, curved sections and accessible mobile navigation
- Schedule team filters and a clearly labeled 2026 archive
- Prominent “Register for 2027” buttons go directly to the club's existing USA Rugby / Rugby Xplorer page; registration details remain at /registration/
- Contact form is explicitly for questions only
- Contact form prepared for Netlify Forms, with a honeypot and validation
- Page titles, descriptions, social sharing image, sitemap, robots and a custom 404
- Local assets, exact dependency lockfile and Netlify configuration

## Run locally

Use Node.js 22.13.1 or newer.

```bash
npm ci
npm run dev
```

Open the local URL printed in the terminal. To test the actual production output:

```bash
npm run build:netlify
npm test
npm run preview
```

Production output goes to `out/`. The local preview prints `http://127.0.0.1:3000`. The contact form explains that local previews cannot send messages; it never pretends to deliver an email locally.

## When you create GitHub and Netlify

1. Put the CONTENTS of this folder in the GitHub repository root (include hidden files and package-lock.json).
2. In Netlify choose “Import an existing project” and connect that repository.
3. Keep the base directory blank if these files are at the repository root. The included netlify.toml sets:
   - Build command: `npm run build:netlify`
   - Publish directory: `out`
   - Node version: `22.13.1`
4. Deploy. No database, environment secrets, paid plugin or custom server is required.
5. In Netlify's Forms area enable form detection, redeploy if it was disabled, and confirm `hawks-inquiry` appears. Submit a real test message on the deployed URL, check it arrives in Forms and configure email notifications to the club's chosen recipient. Notification recipients are not configured in this code.
6. Review the site on the Netlify preview URL before connecting carmichaelrugby.com. No domain or DNS changes have been made.

Next.js statically exports the pages at build time. Netlify serves the files and processes the form. No catch-all SPA redirect is needed. A real Netlify deployment is required to verify form processing; that cannot be confirmed from this local build.

## Updating club content

Edit `data/club.js` for email, registration and assistance links, team descriptions and season announcement. Most page copy is in `app/<page>/page.js`. Design rules are in `app/globals.css`.

### Season schedule

Add confirmed fixtures to `upcomingFixtures` in `data/club.js`:

```js
{ id: 'unique-id', team: 'youth', date: 'YYYY-MM-DD', title: 'Match description', location: 'Confirmed location', time: 'Confirmed time' }
```

The date above is a format guide, not a real fixture. Team IDs are `youth`, `middle-school`, and `high-school`. The Youth & middle school filter includes both IDs. The complete 2027 season remains visible throughout the season, sorted by date. Add an optional endDate for multi-day events. Run `npm run check` after editing.

### 2027 season content

The club supplied the current season details directly:

- Registration is open for 2027; the existing Rugby Xplorer destination is unchanged.
- U10, U12 and middle school begin December 1, 2026.
- High school JV and varsity begin January 5, 2027, Tuesday–Thursday.
- Dues: U10 & U12 $275; middle school $315; high school $450.
- The main schedule includes 10 youth/middle-school entries and 9 high-school entries, including the May 28–30 National Championships in Elkhart. OPEN and Bye entries are retained.
- The 2026 fixture archive remains separate. The previous dues are no longer displayed.
- Update the `practices` and `dues` arrays in `data/club.js` to maintain these details. Practice clock times and field locations still direct families to a coach because those were not supplied.

## Original content and assets

Background club information and archived fixtures were checked against carmichaelrugby.com on October 27, 2026; 2027 registration, practice, dues and fixture information came directly from the club in this chat. The original logo came from the club website and was confirmed against the uploaded SVG. Website photography uses five selected club-supplied images, optimized into responsive WebP variants and JPEG fallbacks. The original beginner guide is bundled under `public/documents/` so it remains available after the old WordPress site is replaced. It is labeled as introductory material; the current official laws are linked separately.

The site uses the actual supplied photographs (not AI-generated players). Originals remain untouched. Geometric shapes are implemented in CSS and SVG. The favicon is a simple rugby-ball illustration; it does not replace the club crest. No new identities, testimonials, sponsors, dates, credentials or results have been invented.

## Verification

`npm test` checks fixture data, production page exports, local navigation and anchor targets, linked assets, Netlify form markup, historical content labeling and search metadata. Browser checks cover desktop/mobile layout, mobile menu, schedule filters, FAQ disclosures and local form behavior. See `VERIFICATION.md` for the final run results.
