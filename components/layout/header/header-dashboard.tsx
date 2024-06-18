import { Filters } from '@/components/filters/filters'
import { Icons } from '@/components/icons'
import { WelcomeMsg } from '@/components/welcome-msg'
import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs'
import { HeaderLogo } from './header-logo'
import { Navigation } from './navigation'

export const HeaderDashboard = () => {
  return (
    <header className="bg-zinc-950 px-4 py-8 pb-36 lg:px-14">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-14 flex w-full items-center justify-between">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
          <ClerkLoading>
            <Icons.loader className="size-8 animate-spin text-slate-400" />
          </ClerkLoading>
        </div>
        <WelcomeMsg />
        <Filters />
      </div>
    </header>
  )
}
