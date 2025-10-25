'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import AccountForm from './_components/AccountForm'
import { ChevronRight, Edit2 } from 'lucide-react'
import ChangePasswordModal from './_components/ChangePasswordModal'
import { useGetUserProfile } from '@/lib/handleAllGetRequests'
import { UserProfile } from '@/../types/user'

export default function SettingsPage() {
  const [isEditing, setIsEditing] = useState(false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const { data: profile } = useGetUserProfile()
  // ref will receive an object with a `submit` method exposed by AccountForm
  const formRef = useRef<{ submit?: () => void } | null>(null)

  const handleSaveProfile = () => {
    // call the imperative submit method exposed by AccountForm
    formRef.current?.submit?.()
  }

  const handleProfileSaved = () => {
    setIsEditing(false)
  }

  return (
    <div className="space-y-6">
      {/* header */}
      <div className="space-y-3 px-3">
        <h1 className="text-2xl font-semibold text-[#272727]">Settings</h1>
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span>Dashboard</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-800">Settings</span>
        </div>
      </div>

      {/* profile section */}
      <div className="flex items-center px-5 justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={profile?.profileImage || '/images/demoUser.png'}
            alt="profile"
            width={70}
            height={70}
            className="rounded-full object-cover cursor-pointer"
          />
          <div>
            <p className="text-[#272727] font-semibold">{profile?.name}</p>
            <p className="text-[#595959] text-sm">@{profile?.name}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {!isEditing && (
            <Button
              className="bg-[#797068] text-white hover:bg-[#5f544c]"
              onClick={() => setIsEditing(true)}
            >
              <Edit2 size={16} />
              Update Profile
            </Button>
          )}
          <Button variant="outline" onClick={() => setShowPasswordModal(true)}>
            Change Password
          </Button>
          {isEditing && (
            <>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button
                className="bg-[#797068] text-white hover:bg-[#5f544c]"
                onClick={handleSaveProfile}
              >
                Save
              </Button>
            </>
          )}
        </div>
      </div>

      {/* account form */}
      <AccountForm
        isEditing={isEditing}
        profile={profile as UserProfile}
        ref={formRef}
        onProfileSaved={handleProfileSaved}
      />

      {/* change password modal */}
      {showPasswordModal && (
        <ChangePasswordModal onClose={() => setShowPasswordModal(false)} />
      )}
    </div>
  )
}
