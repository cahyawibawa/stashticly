import { Logo } from '@/components/logo'
import { urls } from '@/config/urls'
import Image from 'next/image'
import Link from 'next/link'

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="hidden items-center lg:flex">
        <Logo />
        <div className="ml-2.5 text-2xl font-semibold text-white">
          {urls.name}
        </div>
      </div>
    </Link>
  )
}
