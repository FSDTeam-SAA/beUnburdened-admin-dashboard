import type { ReactNode } from 'react'
import Sidebar from '@/components/Sidebar'
import '../globals.css'
import UserHeader from '@/components/reusable/UserHeader'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Dashboard',
  description: 'Manage your products, orders, and customers all in one place.',
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await auth()

  if (!session?.user || session?.user?.role.toLowerCase() !== 'admin') {
    redirect('/signin')
  }

  console.log('admin-dashboard session:', session)

  return (
    <div className="bg-[#F8F9FC] h-screen w-full flex overflow-hidden">
      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-full w-[260px]">
        <Sidebar />
      </div>

      {/* Main Area (push right by sidebar width) */}
      <div className="flex-1 ml-[260px] flex flex-col h-full">
        {/* Fixed Header */}
        <div className="fixed top-0 left-[260px] right-0 z-50">
          <UserHeader />
        </div>

        {/* Scrollable Page Content */}
        <div className="flex-1 mt-[80px] overflow-y-auto px-8 pt-4 pb-8">
          {children}
        </div>
      </div>
    </div>
  )
}
