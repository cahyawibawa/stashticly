/* eslint-disable tailwindcss/no-custom-classname */
'use client'

import { Icons } from '@/components/icons'
import { Logo } from '@/components/logo'
import Button from '@/components/tailus-ui/button'
import { cn } from '@/lib/utils'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import React, { useEffect, useState, type ReactNode } from 'react'

const links = [
  { href: '#', label: 'Products' },
  { href: '#', label: 'Features' },
  { href: '#', label: 'Enterprise' },
  { href: '#', label: 'Docs' },
  { href: 'https://github.com/cahyawibawa/stashticly', label: 'Contribute' },
]

const SiteHeader = () => {
  const [isActionActive, setIsActionActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 75) {
        setIsActionActive(true)
      } else {
        setIsActionActive(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const root = document.querySelector('body') as HTMLElement
    const navItems = document.querySelector('#navItems') as HTMLElement

    if (isOpen) {
      navItems.style.setProperty(
        '--nav-items-height',
        `${navItems.scrollHeight}px`
      )
      root.classList.add('overflow-hidden')
    } else {
      root.classList.remove('overflow-hidden')
      navItems.style.setProperty('--nav-items-height', '0px')
    }
  }, [isOpen])

  const BrandLogo = ({ className }: { className?: string }) => (
    <Logo className={cn('h-8 grayscale', className)} />
  )
  return (
    <>
      <header
        data-state={isOpen ? 'open' : 'closed'}
        data-shade="glassy"
        className="card-shadow group fixed inset-x-2 top-2 z-10 rounded border bg-white/50 dark:border-white/5 dark:bg-white/5 lg:relative lg:inset-x-0 lg:top-4 lg:rounded-none lg:border-0 lg:bg-transparent lg:shadow-none lg:dark:bg-transparent"
        style={{
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className="mx-auto max-w-6xl px-6 py-3 sm:py-4 lg:flex lg:justify-between">
          <div className="lg:flex lg:items-center lg:gap-8">
            <div className="flex w-full items-center justify-between lg:w-fit">
              <a href="/" aria-label="home">
                <BrandLogo className="h-7" />
              </a>
              <div className="flex gap-2 lg:hidden">
                <SignedOut>
                  <Button.Root href="/sign-in" size="xs" intent="neutral">
                    <Button.Label className="text-xs">Sign In</Button.Label>
                  </Button.Root>
                </SignedOut>
                <SignedIn>
                  <Button.Root size="xs" intent="neutral">
                    <Button.Label className="text-xs">Dashboard</Button.Label>
                  </Button.Root>
                </SignedIn>

                <Button.Root
                  onClick={() => setIsOpen(!isOpen)}
                  intent="gray"
                  size="sm"
                  variant="ghost"
                  aria-label="toggle menu button"
                  className="relative -mr-3"
                >
                  <Button.Icon
                    size="md"
                    type="only"
                    className="absolute inset-0 m-auto -rotate-90 scale-125 opacity-0 duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:scale-100 group-data-[state=open]:opacity-100"
                  >
                    <Icons.x />
                  </Button.Icon>
                  <Button.Icon
                    size="md"
                    type="only"
                    className="duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:scale-0"
                  >
                    <Icons.menu />
                  </Button.Icon>
                </Button.Root>
              </div>
            </div>
            <nav
              id="navItems"
              className="lg:feedback-shadow -mx-3 h-[--nav-items-height] w-full overflow-hidden transition-[height] lg:fixed lg:inset-x-0 lg:top-2 lg:m-auto lg:flex lg:size-fit lg:rounded lg:border lg:bg-white/50 lg:p-2 lg:backdrop-blur-3xl lg:dark:border-white/5 lg:dark:bg-white/5"
            >
              <div
                className="absolute left-1.5 top-1.5 size-1 rounded-full bg-gray-950/10 dark:bg-white/20 lg:left-1 lg:top-1 lg:size-0.5"
                aria-hidden
              ></div>
              <div
                className="absolute right-1.5 top-1.5 size-1 rounded-full bg-gray-950/10 dark:bg-white/20 lg:right-1 lg:top-1 lg:size-0.5"
                aria-hidden
              ></div>
              <div
                className="absolute bottom-1.5 left-1.5 size-1 rounded-full bg-gray-950/10 dark:bg-white/20 lg:bottom-1 lg:left-1 lg:size-0.5"
                aria-hidden
              ></div>
              <div
                className="absolute bottom-1.5 right-1.5 size-1 rounded-full bg-gray-950/10 dark:bg-white/20 lg:bottom-1 lg:right-1 lg:size-0.5"
                aria-hidden
              ></div>

              <div
                className={cn(
                  'space-y-6 py-4 lg:mr-6 lg:flex lg:gap-1 lg:space-y-0 lg:py-0',
                  isActionActive && 'lg:mr-2'
                )}
              >
                {links.map(({ href, label }) => (
                  // eslint-disable-next-line react/jsx-key
                  <NavLink href={href}>{label}</NavLink>
                ))}
              </div>
            </nav>
          </div>

          <div className="hidden gap-2 lg:flex">
            <SignedOut>
              <Button.Root href="/sign-in" size="xs" variant="ghost">
                <Button.Label className="text-xs">Sign In</Button.Label>
              </Button.Root>
            </SignedOut>
            <SignedIn>
              <Button.Root href="/dashboard" size="xs" variant="ghost">
                <Button.Label className="text-xs">Dashboard</Button.Label>
              </Button.Root>
            </SignedIn>
          </div>
        </div>
      </header>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          data-state={isOpen ? 'open' : 'closed'}
          className="data-[state=open]:animate-overlayShow fixed inset-0 z-[9] bg-white/50 dark:bg-[--overlay-bg] lg:hidden"
          aria-hidden
          data-aria-hidden="true"
        />
      )}
    </>
  )
}

const NavLink = ({
  href,
  children,
  isActive,
}: {
  href: string
  children: ReactNode
  isActive?: boolean
}) => (
  <Button.Root
    variant={isActive ? 'soft' : 'ghost'}
    intent="gray"
    size="xs"
    href={href}
    className="justify-start"
  >
    <Button.Label className="text-sm">{children}</Button.Label>
  </Button.Root>
)

export default SiteHeader
