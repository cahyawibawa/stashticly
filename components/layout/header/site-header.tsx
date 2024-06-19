import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const SiteHeader = () => {
  return (
    <nav className="mx-auto flex w-full items-center justify-between p-3">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Logo className="size-6 grayscale" />
        <span className="font-mono text-xl font-semibold tracking-tighter">
          {siteConfig.name}
        </span>
      </Link>

      <div className="flex grow items-center justify-end gap-1 text-sm font-medium">
        <SignedOut>
          <Button asChild variant="default" size="xs" className="rounded-xl">
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </SignedOut>

        <SignedIn>
          <Button asChild variant="secondary" size="xs" className="rounded-xl">
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </SignedIn>

        {/* <Link
          target="_blank"
          href={siteConfig.links.github}
          className="flex items-center justify-center rounded-full p-2 text-lg transition-all hover:text-zinc-800"
        >
          <Icons.gitHub className="size-5" />
        </Link> */}
      </div>
    </nav>
  )
}

export default SiteHeader
