import { siteConfig } from '@/config/site'
import Link from 'next/link'
import React from 'react'
import { Logo } from '../logo'
import { Shell } from '../shell'

export const SiteFooter = () => {
  return (
    <footer>
      <Shell>
        <section className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          <section className="flex flex-col gap-y-4">
            <Link href="/" className="flex w-fit items-center space-x-2">
              <Logo className="size-6 grayscale" aria-hidden="true" />
              <span className="font-mono text-xl font-semibold tracking-tighter">
                {siteConfig.name}
              </span>
            </Link>

            <p className="text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </section>
          <section className="xxs:grid-cols-1 grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3 md:flex-row">
            {siteConfig.footerNav.map((item) => (
              <div key={item.title} className="space-y-3">
                <h4 className="text-base font-medium text-foreground">
                  {item.title}
                </h4>
                <ul className="space-y-2.5">
                  {item.items.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        target={link?.external ? '_blank' : undefined}
                        rel={link?.external ? 'noreferrer' : undefined}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.title}
                        <span className="sr-only">{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </section>
        <div className="mt-12 flex flex-col justify-between text-center text-sm text-muted-foreground md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Stashticly.</p>
          <p>Made with ❤️ on planet Earth.</p>
        </div>
      </Shell>
    </footer>
  )
}
