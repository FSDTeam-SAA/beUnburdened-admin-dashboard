'use client'

import { Card } from '@/components/ui/card'
import { useContact } from '@/hooks/ApiCalling'
import Link from 'next/link'

export function MessagesSection() {
  const getContact = useContact()

  const messages = getContact.data?.data.contracts || []

  return (
    <Card className="mx-auto w-full border border-[#E5E7EB] bg-white shadow-sm rounded-xl">
      <div className="px-5 py-2">
        {/* Header */}
        <div className=" flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#1A1A1A]">Messages</h2>
          <Link
            href="/admin-dashboard/contact-management"
            className="text-sm font-medium text-[#3B82F6] hover:text-[#2563EB] transition-colors "
          >
            <button className="text-base font-medium text-[#3B82F6] hover:text-[#0a8ac5] cursor-pointer hover:underline transition-all 1s">
              See All
            </button>
          </Link>
        </div>

        {/* Messages list */}
        <div>
          {messages?.map((message, index) => (
            <div key={message._id} className="py-2">
              <div className="flex  items-start gap-4">
                <div className="min-w-[180px] px-4 flex items-center gap-4">
                  <div>
                    <h3 className="text-base font-semibold text-[#1A1A1A] leading-none">
                      {message.fullName}
                    </h3>
                    <p className="text-sm text-[#9CA3AF] mt-1">
                      {message.occupation}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[#6B7280] leading-relaxed tracking-wide ">
                  {message.message.slice(0, 50)}...
                </p>
              </div>
              {index !== messages?.length - 1 && (
                <hr className="mt-4 border-[#E5E7EB]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
