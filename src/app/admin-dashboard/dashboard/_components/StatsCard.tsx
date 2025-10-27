"use client"

import { Users, FileText, MessageSquare } from "lucide-react"

export default function DashboardStats() {
  const stats = [
    {
      title: "Active Users",
      value: "1,240",
      icon: <Users className="h-[40px] w-[40px] text-[#5A8DEE]" />,
    },
    {
      title: "Total Blog Posts",
      value: "24",
      icon: <FileText className="h-5 w-5 text-[#5A8DEE]" />,
    },
    {
      title: "Total Messages",
      value: "100",
      icon: <MessageSquare className="h-5 w-5 text-[#5A8DEE]" />,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((item, index) => (
        <div
          key={index}
          className="flex items-center py-[39px] justify-between rounded-xl border border-gray-200 bg-white px-[24px] shadow-sm"
        >
          <div className="flex items-center space-x-[24px]">
            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-[#5A8DEE]/10">
              {item.icon}
            </div>
            <div className="space-x-[12px]">
              <p className="text-[20px] font-bold text-[#343A40]">{item.title}</p>
              <p className="text-2xl font-bold text-[#5A8DEE]">{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
