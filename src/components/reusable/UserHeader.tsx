'use client'

import { useGetUserProfile } from '@/lib/handleUserApi'
import Image from 'next/image'
import Link from 'next/link'

export default function UserHeader() {
  const { data: profile, isLoading, error } = useGetUserProfile()

  return (
    <header className="bg-sky-50/50 border-b border-gray-200 px-8 py-[17.5px] flex items-center justify-end">
      <div className="flex items-center gap-4">
        {/* 🌀 Loading State */}
        {isLoading ? (
          <div className="animate-pulse flex items-center gap-3">
            <div className="h-4 w-24 bg-gray-300 rounded"></div>
            <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
          </div>
        ) : error ? (
          <div className="text-red-500 text-sm">Failed to load profile</div>
        ) : (
          <>
            <div className="text-right">
              <p className="text-lg font-semibold text-[#2D3748]">
                {profile?.fullName || 'Unknown User'}
              </p>
              <p className="text-xs text-gray-500">
                {profile?.email || 'No Email'}
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
