import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { ActiveUsers } from './_components/ActiveUsers'
import DashboardStats from './_components/StatsCard'
import { MessagesSection } from './_components/Contact'

export default async function DashboardPage() {
  const session = await auth()

  if (!session?.user || session?.user?.role.toLowerCase() !== 'admin') {
    redirect('/signin')
  }

  return (
    <div className="space-y-8 ">
      {/* Scrollable Header */}
      <header className="space-y-6 max-h-screen pr-2">
        <DashboardStats />
        <ActiveUsers />
        <MessagesSection />
      </header>
    </div>
  )
}
