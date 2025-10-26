'use client'

import {
  LayoutDashboard,
  FileText,
  Headphones,
  MessageSquare,
  Radio,
  Settings,
} from 'lucide-react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoutDialog from './LogoutDialog'

const sidebarItems = [
  {
    icon: <LayoutDashboard size={20} />,
    text: 'Dashboard',
    href: '/admin-dashboard/dashboard',
  },
  {
    icon: <FileText size={20} />,
    text: 'Blog Management',
    href: '/admin-dashboard/blog-management',
  },
  {
    icon: <Headphones size={20} />,
    text: 'Services Management',
    href: '/admin-dashboard/services',
  },
  {
    icon: <Radio size={20} />,
    text: 'Podcast Management',
    href: '/admin-dashboard/podcast',
  },
  {
    icon: <MessageSquare size={20} />,
    text: 'Contact Management',
    href: '/admin-dashboard/contact',
  },
  {
    icon: <Settings size={20} />,
    text: 'Settings',
    href: '/admin-dashboard/settings',
  },
]

function SidebarItem({
  icon,
  text,
  href,
  active,
}: {
  icon: React.ReactNode
  text: string
  href: string
  active?: boolean
}) {
  return (
    <Link href={href}>
      <div
        className={`flex items-center gap-3 px-4 py-[18px] rounded-lg cursor-pointer transition-all ${
          active
            ? 'bg-[#d6e6f7] text-[#5A8DEE]'
            : 'text-[#4A5568] hover:bg-[#e3f2fd]'
        }`}
      >
        {icon}
        <span className="text-base font-medium">{text}</span>
      </div>
    </Link>
  )
}

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-[260px] bg-sky-50/50 border-r border-gray-200 min-h-screen flex flex-col ">
      {/* Logo Section */}
      <div className="h-[80px] flex items-center px-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-xl text-[#5A8DEE] font-bold">
            The <span>Unburdened</span>{' '}
            <span className="font-normal">Mind</span>
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex px-4 pt-6 pb-2">
        <div className="space-y-1">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.text}
              {...item}
              active={pathname === item.href}
            />
          ))}
        </div>
      </nav>

      {/* Logout Section */}
      <div className=" px-5 text">
        <LogoutDialog />
      </div>
    </aside>
  )
}
