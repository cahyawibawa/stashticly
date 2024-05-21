import { MainNav } from './main-nav'

export function Header() {
  return (
    <header className="sticky top-4 z-50 mt-4 h-12 justify-center px-2 md:flex md:px-4">
      <MainNav />
    </header>
  )
}
