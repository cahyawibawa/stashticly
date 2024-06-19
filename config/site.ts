const links = {
  x: 'https://twitter.com/kyuotaka',
  github: 'https://github.com/cahyawibawa/stashticly',
  githubAccount: 'https://github.com/cahyawibawa',
  discord: 'https://discord.com/users/sinisterkids',
}

export const siteConfig = {
  name: 'Stashticly',
  url: 'https://stashticly.vercel.app',
  ogImage: 'https://stashticly.vercel.app/opengraph-image.png',
  description: 'A simple, open source, and free expense tracking app.',
  links: links,
  keywords: [
    'stashticly',
    'finance app',
    'open source',
    'fintech',
    'expense tracker',
    'personal finance',
    'money manager',
    'nextjs',
    'drizzle',
    'hono',
    'neon',
  ],

  footerNav: [
    {
      title: 'More',
      items: [
        {
          title: 'Blog',
          href: 'https://cahyawibawa.dev/blog/stashticly',
          external: true,
        },
        {
          title: 'Plaid',
          href: 'https://plaid.com/',
          external: true,
        },
        {
          title: 'Terms',
          href: '/terms',
          external: false,
        },
        {
          title: 'Privacy',
          href: '/privacy',
          external: false,
        },
      ],
    },
    {
      title: 'Social',
      items: [
        {
          title: 'X',
          href: links.x,
          external: true,
        },
        {
          title: 'GitHub',
          href: links.github,
          external: true,
        },
        {
          title: 'Discord',
          href: links.discord,
          external: true,
        },
      ],
    },
    {
      title: 'Credits',
      items: [
        {
          title: 'Antonio',
          href: 'https://www.codewithantonio.com',
          external: true,
        },
        {
          title: 'midday.ai',
          href: 'https://www.midday.ai',
          external: true,
        },
        {
          title: 'maybe.co',
          href: 'https://maybe.co',
          external: true,
        },
        {
          title: 'expense.fyi',
          href: 'https://expense.fyi/',
          external: true,
        },
      ],
    },
  ],
}

export type SiteConfig = typeof siteConfig
