<p align="center">
  <a href="https://stashticly.vercel.app">
    <img src="/public/images/hero.png" width="100%"/>
    <h2 align="center">stashticly</h2>
  </a>
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#installation"><strong>Installation</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="https://cahyawibawa.dev/projects/stashticly"><strong>Blog</strong></a> ·
  <a href="#credits"><strong>Credits</strong></a>
</p>

<p align="center">
  A simple, open source, and free expense tracking app.
</p>

## Features

- Interactive financial dashboard
- Changeable chart types
- Account and date filters
- Detailed transactions table
- Form to add transactions
- Customizable select components
- Income and expense toggle
- Bulk delete and search in transactions
- CSV transaction imports

## Tech Stack

- [Clerk](https://clerk.com/) Authentication
- [Hono](https://hono.dev/) API
- [Tanstack Query](https://tanstack.com/query/v3) State Management
- [DrizzleORM](https://orm.drizzle.team/)
- [Neon](https://neon.tech) Postgres Database
- [Next.js 14](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/) Styling
- [Recharts](https://recharts.org/) Charts

## Roadmap

- [ ] Upgrade to shadcn/iu charts
- [ ] implement [Motion Number](https://motion-number.barvian.me/) instead React-Countup

## Installation

Clone & create this repo locally with the following command:

```bash
git clone https://github.com/cahyawibawa/stashticly"
```

1. Install dependencies using bun:

```sh
bun install
```

2. Copy `.env.example` to `.env.local` and update the variables.

```sh
cp .env.example .env.local
```

3. Start the development server:

```sh
bun dev
```

## Credits

- Antonio Erdeljac ([@YTCodeAntonio](https://twitter.com/AntonioErdeljac))
