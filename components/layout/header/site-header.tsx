'use client'

import { Icons } from '@/components/icons'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import Link from 'next/link'
import React from 'react'

const SiteHeader = () => {
  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center justify-between p-5">
      <div className="grow cursor-default">
        <Logo className="size-8" />
      </div>

      <div className="flex grow items-center justify-end gap-1 text-sm font-medium text-zinc-500 ">
        <Link
          className="rounded-lg px-2 py-1 hover:text-zinc-800"
          href="https://cahyawibawa.dev/projects/stashticly"
        >
          Blog
        </Link>
        <Link
          target="_blank"
          href={siteConfig.links.github}
          className="flex items-center justify-center rounded-full p-2 text-lg transition-all hover:text-zinc-800"
        >
          <Icons.gitHub className="size-8" />
        </Link>

        {/* <div className="ml-2 flex">
          <Button asChild variant={'secondary'}>
            <Link className=" inline-block" href="/dashboard">
              Dashboard
            </Link>
          </Button>
        </div> */}
      </div>
    </nav>
  )
}

export default SiteHeader
