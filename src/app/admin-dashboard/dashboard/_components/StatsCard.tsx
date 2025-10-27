"use client"

import { useStats } from "@/hooks/ApiCalling"
import { Users, FileText, MessageSquare } from "lucide-react"
import { useSession } from "next-auth/react"

export default function DashboardStats() {
  const { data: session } = useSession()
  const accessToken = session?.user?.accessToken || ""


  const getStats = useStats(accessToken)
  console.log(getStats.data?.data)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        className="flex items-center py-[39px] justify-between rounded-xl border border-gray-200 bg-white px-[24px] shadow-sm"
      >
        <div className="flex items-center space-x-[24px]">
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-[#5A8DEE]/10">
            <Users className="h-6 w-6 text-[#5A8DEE]" />
          </div>
          <div className="space-x-[12px]">
            <p className="text-[20px] font-bold text-[#343A40]">Active Users</p>
            <p className="text-2xl font-bold text-[#5A8DEE]">{getStats.data?.data.totalUsers}</p>
          </div>
        </div>
      </div>

      <div
        className="flex items-center py-[39px] justify-between rounded-xl border border-gray-200 bg-white px-[24px] shadow-sm"
      >
        <div className="flex items-center space-x-[24px]">
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-[#5A8DEE]/10">
            <FileText className="h-6 w-6 text-[#5A8DEE]" />
          </div>
          <div className="space-x-[12px]">
            <p className="text-[20px] font-bold text-[#343A40]">Total Blog Posts</p>
            <p className="text-2xl font-bold text-[#5A8DEE]">{getStats.data?.data.totalBlogs}</p>
          </div>
        </div>
      </div>
      <div
        className="flex items-center py-[39px] justify-between rounded-xl border border-gray-200 bg-white px-[24px] shadow-sm"
      >
        <div className="flex items-center space-x-[24px]">
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-[#5A8DEE]/10">
            <MessageSquare className="h-6 w-6 text-[#5A8DEE]" />
          </div>
          <div className="space-x-[12px]">
            <p className="text-[20px] font-bold text-[#343A40]">Total Messages</p>
            <p className="text-2xl font-bold text-[#5A8DEE]">{getStats.data?.data.totalMessages}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
