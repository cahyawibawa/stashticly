export const siteConfig = {
  name: 'Stashticly',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://stashticly.vercel.app',
  ogImage: '',
  description:
    'Stashticly is a personal finances app built with Next.js, Drizzle, Hono, and Tailwind CSS.',
  links: {
    portfolio: 'https://cahyawibawa.dev/',
    github: 'https://cahyawibawa/stashticly',
  },
}

export type SiteConfig = typeof siteConfig
