/* eslint-disable @next/next/no-img-element */
import SiteHeader from '@/components/layout/header/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { Logo } from '@/components/logo'
import { Shell } from '@/components/shell'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/config/site'
import Image from 'next/image'

export default function Home() {
  return (
    <Shell variant="markdown">
      <SiteHeader />
      <div className="text-center">
        <div className="mx-auto mb-4 max-w-xl pt-8 text-[28px] font-normal md:text-3xl">
          Stashticly <Logo className="inline w-8 grayscale md:w-auto" /> is a{' '}
          <em className="relative">
            <span className="border-b-2 border-dotted border-muted-foreground">
              fully
            </span>
            {/* <sup>*</sup>
            <span className="absolute -top-8 left-2 w-40 -rotate-3 text-left text-xs text-muted-foreground md:-top-6 md:left-16 md:w-40">
              <sup>*</sup>your finances are secure
            </span> */}
          </em>{' '}
          open-source
          <div className="inline-flex scale-[0.8] rounded-md border border-gray-200 shadow-[0_1px_8px_0_rgba(0,0,0,0.04)] md:scale-100">
            <a
              href={siteConfig.links.github}
              className="flex items-center justify-center rounded-l-md border-r border-gray-200 bg-gray-100 px-2 py-1.5 shadow-[inset_0_-2px_5px_0_rgba(0,0,0,0.07)]"
            >
              <img
                src="/images/github.svg"
                alt="GitHub icon"
                className="size-5"
              />
            </a>
            <span className="rounded-r-md bg-white px-2 py-1.5 text-sm font-medium shadow-[inset_0_-2px_5px_0_rgba(0,0,0,0.07)]"></span>
          </div>
          your expense tracker{' '}
          <img
            src="/images/chart.svg"
            alt="Chart"
            className="inline w-8 md:w-auto"
          />{' '}
          built by a small team{' '}
          <img
            src="/images/teams.png"
            alt="Stashticly Team"
            className="inline h-8 md:h-9"
          />{' '}
        </div>
      </div>

      <Card className="mx-auto -mt-px max-w-6xl rounded-xl p-2 ">
        <Image
          src="/images/hero.png"
          width={1200}
          height={600}
          alt="preview image"
          loading="lazy"
          className="w-full rounded-xl border-muted drop-shadow-md"
        />
      </Card>
      <SiteFooter />
    </Shell>
  )
}
