## Ephrem Demelash · Portfolio

Next.js 16 App Router site showcasing Ephrem’s backend + Web3 experience (crypto exchanges, liquidity automation, high-performance SaaS). Built with Tailwind CSS, shadcn-inspired UI primitives, Framer Motion, a content-collections powered MDX blog, and a Resend-powered contact endpoint.

### Tech Stack
- Next.js 16 (App Router, React 19)
- Tailwind CSS v4 + shadcn-aligned UI primitives (`components/ui/*`)
- Framer Motion animations + custom orbit portrait
- content-collections MDX blog (`src/content/blog/*.mdx`)
- Zod + Resend contact form API (`src/app/api/contact/route.ts`)
- @vercel/analytics for usage insights

### Local Development
```bash
npm install     # install dependencies
npm run dev     # starts content-collections watcher + Next dev
```
Visit `http://localhost:3000` to preview. Edit pages under `src/app/` and components in `src/components/`.

### Production Build
```bash
npm run build   # content-collections build + next build
npm start       # serve production build
```

### Content
- Blog posts live in `src/content/blog/*.mdx`. Frontmatter controls title, summary, tags, and publish date.
- Structured data lives in `src/data/` (experience, projects, skills, testimonials).
- Replace the placeholder portrait at `public/images/profile-placeholder.svg` with the final asset.

### Deployment
1. Push to GitHub (e.g., `ephremdeme/portfolio`).
2. In Vercel, “New Project” → import repo → set env vars (`RESEND_API_KEY`, `NEXT_PUBLIC_SITE_URL`, etc.).
3. Add custom domains `ephrem.dev` and `ephrem.dev.et` and update DNS records.

For staging environments, rely on Vercel preview deployments and review the analytics dashboard for engagement signals.
