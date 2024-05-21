import { HeaderDashboard } from '@/components/layout/header/header-dashboard'

export default function DashboardLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <HeaderDashboard />
      <main className="px-3 lg:px-14">{children}</main>
    </>
  )
}
