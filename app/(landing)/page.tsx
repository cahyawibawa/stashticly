import { Announcement } from '@/components/announcement'
import { Icons } from '@/components/icons'
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { GridPattern } from '@/components/pattern'
import { Shell } from '@/components/shell'
import { buttonVariants } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { urls } from '@/config/urls'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <Shell>
      <GridPattern />
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>
          Manage your personal finances
          <br />
          <span>in the right way</span>
        </PageHeaderHeading>
        <PageHeaderDescription>
          Create budgets & financial plans, track your net-worth, trends,
          insights and more.
        </PageHeaderDescription>
        <PageActions>
          <Link href="/sign-up" className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={urls.github}
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            <Icons.gitHub className="mr-2 size-4" />
            GitHub
          </Link>
        </PageActions>
      </PageHeader>
      <Card className="mx-auto -mt-px max-w-6xl rounded-md p-2 shadow-2xl">
        <Image
          src="/images/hero.webp"
          width={1300}
          height={500}
          alt="preview image"
          loading="lazy"
          className="block rounded sm:rounded-lg"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-white to-35%" /> */}
      </Card>
    </Shell>
  )
}
