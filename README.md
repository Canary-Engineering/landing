# Canary — marketing site

Pre-launch site for Canary Core, real-time vehicle abuse detection. Next.js 15 (App Router) + Tailwind.

## Pages

- `/` — hero, statement, who it's for, platform, compatibility, security, FAQ, contact CTA
- `/technology` (How it works), `/about`, `/contact`
- `/terms`, `/privacy`

Dark mode is the default; the header toggle switches to light.

Company facts (name, contact email) live in `lib/site.ts`.

## Develop

```bash
npm install   # needs the Font Awesome registry token in .npmrc
npm run dev
npm run build && npm run lint
```

Deploys as a standard Next.js project on Vercel.
