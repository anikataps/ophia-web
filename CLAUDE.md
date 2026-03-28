# Omega Phi Alpha – Nu Chapter Website

Vite + React + TypeScript + Mantine UI site deployed to GitHub Pages via GitHub Actions.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # TypeScript check + Vite build → dist/
```

Pushes to `main` auto-deploy via `.github/workflows/deploy.yml`.

---

## Pre-Launch Checklist

### Content — Must Do Before Going Live

- [ ] **Exec board members** (`src/data/team.ts`) — replace all "Name Placeholder" entries with real names and personalized bios for the current semester's exec board
- [ ] **Member spotlight** (`src/data/team.ts`) — replace placeholder name, role, quote, and bio with the first featured member; coordinate with the Historian for monthly updates going forward
- [ ] **Contact email** — reconcile the two different emails used across the site:
  - Footer uses `nu.president@omegaphialpha.org`
  - Contact page uses `nucorvid@opa.org`
  - Pick one canonical address and update both files
- [ ] **Instagram handle** — reconcile the two different handles:
  - Footer + social links use `@gt_ophia`
  - Contact page and Join page use `@opa.nu`
  - Confirm the correct handle and update `src/pages/Contact.tsx` and `src/data/recruitment.ts`
- [ ] **Recruitment dates** (`src/data/recruitment.ts`) — confirm all event dates, locations, and statuses are accurate; update each semester
- [ ] **"Applications open" text** (`src/pages/Home.tsx`, CTA strip) — update to reflect whether recruitment is actually open or closed at any given time

### Functionality — Must Do Before Going Live

- [ ] **Contact form backend** (`src/pages/Contact.tsx`) — the form currently simulates submission with a fake `setTimeout`; wire it up to a real email service before launch
  - Easiest no-server option: [EmailJS](https://www.emailjs.com/) or [Formspree](https://formspree.io/)
  - Self-hosted option: serverless function (Vercel/Netlify/Cloudflare Workers) calling SendGrid or Resend
- [ ] **Slack invite link** (`src/pages/Join.tsx`) — the "Join Slack" button has no `href`; generate a permanent invite URL from your Slack workspace and add it

### Content — Nice to Have

- [ ] **About section photo** (`src/pages/Home.tsx`) — replace the decorative placeholder with a real chapter group photo; add image to `/public/images/`
- [ ] **Gallery photos** (`src/data/gallery.ts`, `src/pages/Gallery.tsx`) — replace all 12 gradient placeholders with real event photos
  1. Add an `image` field to the `GalleryItem` interface
  2. Update `GalleryCard` in `Gallery.tsx` to render `<img>` instead of a gradient background
  3. Host images in `/public/gallery/` or an external CDN (Cloudinary, etc.)
- [ ] **Member spotlight headshot** (`src/pages/Team.tsx`) — replace the `✦` placeholder with the featured member's actual headshot each month

### Pages — Nice to Have

- [ ] **Privacy page** — the footer Privacy link points to `#`; create a `/privacy` route or link to national OPA's privacy policy
- [ ] **Terms page** — same as above for the Terms link

### Ongoing Maintenance

- [ ] Update **exec board** (`src/data/team.ts`) each semester after elections
- [ ] Update **member spotlight** (`src/data/team.ts`) monthly (coordinate with Historian)
- [ ] Update **recruitment dates** (`src/data/recruitment.ts`) each semester; flip statuses to `'past'` after events occur
- [ ] Update the **copyright year** in `src/components/layout/Footer.tsx` each January
- [ ] Verify **stat counters** on the Home page still reflect accurate national numbers annually
