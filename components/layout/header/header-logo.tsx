import { Logo } from '@/components/logo'
import { siteConfig } from '@/config/site'
import Link from 'next/link'

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="hidden items-center lg:flex">
        <Logo className="grayscale" />
        <div className="ml-2.5 text-2xl font-semibold text-white">
          {siteConfig.name}
        </div>
      </div>
    </Link>
  )
}
