'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useGetUserProfile } from '@/lib/handleAllGetRequests'

export default function UserHeader() {
  const { data: profile, isLoading } = useGetUserProfile()

  return (
    <header className="bg-sky-50/50 border-b border-gray-200 px-8 py-5 flex items-center justify-end">
      <div className="flex items-center gap-4">
        {isLoading ? (
          <div className="animate-pulse flex items-center gap-3">
            <div className="h-4 w-24 bg-gray-300 rounded"></div>
            <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
          </div>
        ) : (
          <>
            <div className="text-right">
              <p className="text-lg font-semibold text-[#2D3748]">
                {profile?.name || 'David'}
              </p>
              <p className="text-xs text-gray-500">
                {profile?.role || 'Admin'}
              </p>
            </div>
            <Link href="/seller-dashboard/settings">
              <Image
                src={profile?.profileImage || '/images/demoUser.png'}
                alt="User Avatar"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover border-2 border-gray-200 cursor-pointer hover:border-[#7C4DFF] transition-colors"
              />
            </Link>
          </>
        )}
      </div>
    </header>
  )
}
