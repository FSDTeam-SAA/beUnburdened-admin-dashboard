import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const session = await auth()

  if (!session?.user && session?.user?.role.toLowerCase() !== 'admin') {
    redirect('/signin')
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-2xl font-semibold text-[#272727]">Overview</h1>
        <p className="text-[#595959]">Dashboard</p>
      </header>
    </div>
  )
}
