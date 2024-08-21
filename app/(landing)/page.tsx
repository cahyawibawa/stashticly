/* eslint-disable @next/next/no-img-element */
'use client'

import { FeaturesCard } from '@/components/features'
import { Icons } from '@/components/icons'
import SiteHeader from '@/components/layout/header/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { Logo } from '@/components/logo'
import {
  PageActions,
  PageHeader,
  PageHeaderHeading,
} from '@/components/page-header'
import { Shell } from '@/components/shell'
import Button from '@/components/tailus-ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/config/site'
import { getGitHubStars } from '@/lib/github'
import { numberFormatter } from '@/lib/utils'
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Suspense, useEffect } from 'react'

export default function Home() {
  const { user, isLoaded } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (isLoaded && user) {
      router.push('/dashboard')
    }
  }, [isLoaded, user, router])
  return (
    <Shell variant="markdown">
      <SiteHeader />
      <PageHeader className="pt-32 md:pt-40 lg:pt-20">
        <PageHeaderHeading className="max-w-xl md:text-[35px]">
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
          open-source{' '}
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
            <span className="rounded-r-md bg-white px-2 py-1.5 font-medium shadow-[inset_0_-2px_5px_0_rgba(0,0,0,0.07)]">
              <Suspense fallback={<StarsBadgeFallback />}>
                <StarsBadge />
              </Suspense>
            </span>
          </div>
          personal expense tracker{' '}
          <img
            src="/images/chart.svg"
            alt="Chart"
            className="inline w-8 md:w-auto"
          />
        </PageHeaderHeading>
        <PageActions>
          <SignedOut>
            <Button.Root href="/sign-in" size="xs" intent="neutral">
              <Button.Label className="text-xs">Get Started</Button.Label>
            </Button.Root>
          </SignedOut>
          <SignedIn>
            <Button.Root size="xs" intent="neutral">
              <Button.Label className="text-xs">Dashboard</Button.Label>
            </Button.Root>
          </SignedIn>
          <Button.Root
            size="xs"
            variant="outlined"
            href={siteConfig.links.github}
          >
            <Button.Icon size="xs">
              <Icons.gitHub />
            </Button.Icon>
            <Button.Label className="text-xs">Self Host</Button.Label>
          </Button.Root>
        </PageActions>
      </PageHeader>

      <Card className="mx-auto -mt-px max-w-6xl rounded-xl p-2 ">
        <Image
          src="/images/hero.png"
          width={1200}
          height={600}
          alt="preview image"
          className="w-full rounded-xl border-muted drop-shadow-md"
          priority
        />
      </Card>
      <div className="container py-24">
        <h2 className="text-center text-2xl font-semibold sm:text-3xl">
          Save Money.
          <br />
          Without thinking about it.
        </h2>
      </div>
      <FeaturesCard />
      <SiteFooter />
    </Shell>
  )
}

function StarsBadgeFallback() {
  return (
    <Badge variant="secondary" className="ml-1">
      ~
    </Badge>
  )
}

async function StarsBadge() {
  const stars = await getGitHubStars()
  return (
    <>
      <Badge variant="outline" className="border-none p-0 sm:block">
        {numberFormatter(stars)}
      </Badge>
    </>
  )
}
