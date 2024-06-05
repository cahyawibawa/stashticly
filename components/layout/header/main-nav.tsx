'use client'

import { Logo } from '@/components/logo'
import { urls } from '@/config/urls'
import { cn } from '@/lib/utils'
import { ClerkLoaded, ClerkLoading, UserButton, useUser } from '@clerk/nextjs'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { GlowingStarsBackgroundCard } from '../../glowing-star'
import { Icons } from '../../icons'
import { Button, buttonVariants } from '../../ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../../ui/navigation-menu'

const components: ListItemProps[] = [
  {
    title: 'Documentation',
    description: 'lorem ipsum dolor sit amet, consectetur adip',
    href: '',
    icon: () => <Icons.plus className="size-5" />,
    external: true,
  },
  {
    title: 'Open Source',
    description: 'lorem ipsum dolor sit amet, consectetur adip',
    href: '',
    icon: () => <Icons.plus className="size-5" />,
    external: true,
  },
  {
    title: 'Join the community',
    description: 'lorem ipsum dolor sit amet, consectetur adip',
    href: '',
    icon: () => <Icons.plus className="size-5" />,
    external: true,
  },
  {
    title: 'Apps & Integrations',
    description: 'lorem ipsum dolor sit amet, consectetur adip',
    href: '',
    icon: () => <Icons.plus className="size-5" />,
    external: true,
  },
  {
    title: 'Apps & Integrations',
    description: 'lorem ipsum dolor sit amet, consectetur adip',
    href: '',
    icon: () => <Icons.plus className="size-5" />,
    external: true,
  },
]

type ListItemProps = {
  title: string
  description: string
  href: string
  external?: boolean
  icon: () => React.JSX.Element
  className?: string
}

const ListItem = ({
  className,
  title,
  icon: Icon,
  external,
  ...props
}: ListItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          target={external ? '_blank' : undefined}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="flex items-center">
            <div className="w-8">
              <Icon />
            </div>
            <div className="text-sm font-medium leading-none">{title}</div>
            {/* <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {description}
            </p> */}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

const listVariant = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
  hidden: {
    opacity: 0,
  },
}

const itemVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export function MainNav() {
  const pathname = usePathname()
  const [isOpen, setOpen] = useState(false)
  const { user, isLoaded } = useUser()

  const handleToggleMenu = () => {
    setOpen((prev) => {
      document.body.style.overflow = prev ? '' : 'hidden'
      return !prev
    })
  }

  const lastPath = `/${pathname.split('/').pop()}`
  return (
    <>
      <nav className="flex items-center rounded-2xl border border-border bg-[#FDFDFC] p-3 backdrop-blur-xl dark:bg-[#121212]">
        <NavigationMenu>
          <Link className="mr-10" href="/">
            <Logo />
          </Link>

          <ul className="mr-8 hidden space-x-2 text-sm font-medium capitalize md:flex">
            <li>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-[#FDFDFC] dark:bg-[#121212]">
                    <div className="flex">
                      <Link
                        href="/engine"
                        className="border-r-DEFAULT border-border"
                      >
                        <div className="mb-6 w-[215px]">
                          <NavigationMenuLink asChild>
                            <GlowingStarsBackgroundCard>
                              <span className="text-lg font-medium">
                                Stashticly
                              </span>
                              <div className="flex items-end justify-between">
                                <p className="line-clamp-2 text-sm leading-snug text-[#707070]">
                                  Best personal finance tracking.
                                </p>
                              </div>
                            </GlowingStarsBackgroundCard>
                          </NavigationMenuLink>
                        </div>
                      </Link>
                      <ul className="flex w-[400px] flex-col p-4">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            description={component.description}
                            href={component.href}
                            icon={component.icon}
                            external={component.external}
                          />
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </li>
            {urls.features.path.map(({ path, name }) => {
              const isActive =
                path === '/features'
                  ? pathname.includes('features')
                  : path === lastPath

              return (
                <li key={path}>
                  <Link
                    href={path}
                    className={cn(
                      'inline-flex h-8 items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary',
                      isActive && 'bg-secondary hover:bg-secondary'
                    )}
                  >
                    {`${name}`}
                  </Link>
                </li>
              )
            })}
          </ul>
        </NavigationMenu>

        {/* <>
          {user ? (
            <div className="flex">
              <ClerkLoaded>
                <UserButton afterSignOutUrl="/" />
              </ClerkLoaded>
              <ClerkLoading>
                <Icons.loader className="size-8 animate-spin text-slate-400" />
              </ClerkLoading>
            </div>
          ) : (
            <Link href="/sign-up" aria-label="signin user">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'default',
                  })
                )}
              >
                Sign up
              </div>
            </Link>
          )}
        </> */}

        <button
          type="button"
          className="ml-auto p-2 md:hidden"
          onClick={() => handleToggleMenu()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={13}
            fill="none"
          >
            <path
              fill="currentColor"
              d="M0 12.195v-2.007h18v2.007H0Zm0-5.017V5.172h18v2.006H0Zm0-5.016V.155h18v2.007H0Z"
            />
          </svg>
        </button>

        {/* <a
          href="/sign-up"
          className="hidden h-8 items-center justify-center rounded-xl bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:inline-flex"
        >
          {'Sign Up'}
        </a> */}
      </nav>

      {isOpen && (
        <motion.div
          className="fixed inset-0 z-10 m-px h-screen bg-background px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative mt-4 flex justify-between p-3">
            <button type="button" onClick={handleToggleMenu}>
              <Logo />
            </button>

            <button
              type="button"
              className="absolute right-[10px] top-2 ml-auto p-2 md:hidden"
              onClick={handleToggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                className="fill-primary"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
              </svg>
            </button>
          </div>

          <div className="h-full overflow-auto">
            <motion.ul
              initial="hidden"
              animate="show"
              className="mb-8 space-y-8 px-3 pt-8 text-xl capitalize text-[#707070] dark:text-[#878787]"
              variants={listVariant}
            >
              {urls.features.path.map(({ path, name }) => {
                const isActive =
                  path === '/features'
                    ? pathname.includes('features')
                    : path === lastPath

                return (
                  <motion.li variants={itemVariant} key={path}>
                    <Link
                      href={path}
                      className={cn(isActive && 'text-primary')}
                      onClick={handleToggleMenu}
                    >
                      {`${name}`}
                    </Link>
                  </motion.li>
                )
              })}

              <motion.li variants={itemVariant} onClick={handleToggleMenu}>
                <Link href="/">Engine</Link>
              </motion.li>

              <motion.li variants={itemVariant}>
                <Link href="/">Get started</Link>
              </motion.li>

              <motion.li
                variants={itemVariant}
                className="flex items-center space-x-2"
              >
                {/* <FaGithub /> */}
                <Link href="/">Open Source</Link>
              </motion.li>

              <motion.li
                className="mt-auto border-t-DEFAULT pt-8"
                variants={itemVariant}
              >
                <Link className="text-xl text-primary" href="/sign-up">
                  Sign in
                </Link>
              </motion.li>
            </motion.ul>
          </div>
        </motion.div>
      )}
    </>
  )
}
