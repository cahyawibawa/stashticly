import { type ReactNode } from 'react'

export default function LandingLayout({
  children,
}: {
  children: ReactNode
}): React.ReactElement {
  return (
    <div className="relative flex min-h-screen flex-col">
      <main className="flex-1">{children}</main>
    </div>
  )
}
