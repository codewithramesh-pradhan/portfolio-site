---
slug: free-docusaurus-portfolio
title: "How I Built and Hosted a Professional Portfolio Site for $0"
authors: [default]
tags: [docusaurus, github-pages, portfolio, devops, cloud]
---

# How I Built and Hosted a Professional Portfolio Site for $0

If you're a cloud or DevOps engineer looking to showcase your work, you don't need to spend a single dollar on hosting. In this post, I'll walk you through how I built this portfolio site using Docusaurus and deployed it to GitHub Pages — completely free.

<!-- truncate -->

## Why Docusaurus?

I evaluated several static site generators before settling on [Docusaurus](https://docusaurus.io/). Here's why it won:

- **Built for documentation** — perfect for a technical portfolio where you want to write detailed project writeups
- **Markdown-first** — no fiddling with HTML/CSS for every page. Write content in Markdown, and it just works
- **Blog built in** — comes with a blog feature out of the box, ideal for a learning journal
- **Fast** — generates static HTML, so pages load instantly
- **Free and open source** — maintained by Meta, actively developed, and well-documented

Other options like Jekyll, Hugo, or Next.js are solid, but Docusaurus hits the sweet spot between simplicity and power for a portfolio that doubles as technical documentation.

## What You Need

- A GitHub account (free)
- Node.js 18+ installed on your machine
- Basic familiarity with the terminal
- About 30 minutes

That's it. No cloud accounts, no credit cards, no domain registration required.

## Step 1: Scaffold the Project

```bash
npx create-docusaurus@latest portfolio-site classic --typescript
cd portfolio-site
npm start
```

This gives you a fully working site at `http://localhost:3000` in under a minute. The `classic` preset includes docs, blog, and a customizable homepage.

## Step 2: Structure Your Content

I organized my portfolio like this:

```
docs/
├── intro.md          # Welcome page
├── about.md          # Background and experience
├── skills.md         # Technical skills
├── resume.md         # Full resume with PDF download
├── projects/         # Detailed project writeups
├── homelab/          # Homelab documentation
└── troubleshooting/  # Real issues I've debugged
blog/                 # Learning journal
src/pages/index.tsx   # Custom homepage
static/img/           # Resume PDF, diagrams, favicon
```

The key insight: treat your portfolio like **real documentation**. Recruiters and hiring managers want to see how you think and communicate, not just a list of buzzwords.

## Step 3: Write Project Docs That Stand Out

Each project page in my portfolio follows this structure:

1. **Architecture diagram** — a visual overview of the system
2. **Problem statement** — what I was trying to solve
3. **Tools & services** — the specific technologies used
4. **Implementation details** — how I actually built it
5. **Screenshots** — proof that it works (deployed stacks, console output, monitoring dashboards)
6. **Key takeaways** — lessons learned

This format shows employers that you can design, build, document, and reflect on your work — exactly what they're looking for.

**Pro tip:** If your projects live on GitHub, you can reference images directly from your repos using raw GitHub URLs. No need to copy screenshots into your portfolio — they stay in sync automatically.

## Step 4: Deploy to GitHub Pages for Free

This is the best part. GitHub Pages hosts static sites at no cost.

### Configure Docusaurus for GitHub Pages

In `docusaurus.config.ts`, set:

```typescript
const config = {
  url: 'https://YOUR_USERNAME.github.io',
  baseUrl: '/portfolio-site/',
  organizationName: 'YOUR_USERNAME',
  projectName: 'portfolio-site',
  trailingSlash: false,
};
```

### Add a GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: build

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### Enable GitHub Pages

1. Push your code to GitHub
2. Go to **Settings → Pages → Source** → select **GitHub Actions**
3. Every push to `main` now auto-deploys your site

Your portfolio is now live at `https://YOUR_USERNAME.github.io/portfolio-site/` — no hosting costs, no server management, no expiring free tiers.

## What This Costs

| Item | Cost |
|---|---|
| Docusaurus | $0 (open source) |
| GitHub repository | $0 (free tier) |
| GitHub Pages hosting | $0 (free for public repos) |
| GitHub Actions CI/CD | $0 (2,000 minutes/month free) |
| Custom domain (optional) | $0 if you skip it |
| **Total** | **$0** |

## Why This Matters for Your Career

A portfolio site does things a resume alone can't:

- **Shows, don't tell** — architecture diagrams and screenshots prove you've built real systems
- **Demonstrates documentation skills** — a core engineering competency that most candidates ignore
- **Proves you ship** — the site itself is a deployed project with CI/CD
- **Stays current** — add new projects and blog posts as you learn

If you're applying for Cloud Engineer, DevOps, or Infrastructure roles, a well-structured portfolio site sets you apart from candidates who only have a PDF resume.

## Get Started

Fork my portfolio repo, replace the content with your own, and deploy. You can have a professional portfolio live on the internet in under an hour — for free.

- [My Portfolio](https://codewithramesh-pradhan.github.io/portfolio-site/)
- [GitHub Repo](https://github.com/codewithramesh-pradhan/portfolio-site)
- [Docusaurus Docs](https://docusaurus.io/docs)

---

*Building in public isn't just about showing off — it's about proving you can communicate technical ideas clearly. That's a skill every team needs.*
