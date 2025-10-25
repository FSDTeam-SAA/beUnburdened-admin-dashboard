/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import { Eye, EyeClosed, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useChangePassword } from '@/lib/handleAllGetRequests'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

const passwordSchema = z
  .object({
    oldPassword: z
      .string()
      .min(6, 'Current password must be at least 6 characters'),
    newPassword: z
      .string()
      .min(6, 'New password must be at least 6 characters'),
    confirmPassword: z
      .string()
      .min(6, 'Confirm password must be at least 6 characters'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

type PasswordFormValues = z.infer<typeof passwordSchema>

export default function ChangePasswordModal({
  onClose,
}: {
  onClose: () => void
}) {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  })

  const changePasswordMutation = useChangePassword()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
  })

  const onSubmit = (data: PasswordFormValues) => {
    changePasswordMutation.mutate(
      {
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      },
      {
        onSuccess: () => {
          // alert('Password changed successfully!')
          toast.success('Password changed successfully!')
          onClose()
        },
        onError: (err: any) => {
          // alert(err?.response?.data?.message || 'Failed to change password')
          toast.error(
            err?.response?.data?.message || 'Failed to change password'
          )
        },
      }
    )
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-[#272727]">
            Change Password
          </h2>
          <X
            onClick={onClose}
            className="w-5 h-5 cursor-pointer hover:bg-gray-100 rounded-full p-1"
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Current Password */}
          <div className="flex flex-col gap-1 relative">
            <label className="text-sm font-medium text-[#595959]">
              Current Password
            </label>
            <input
              type={showPassword.current ? 'text' : 'password'}
              {...register('oldPassword')}
              className={`border px-3 py-2 text-sm text-[#272727] pr-10 ${
                errors.oldPassword ? 'border-red-500' : ''
              }`}
            />
            <span
              onClick={() =>
                setShowPassword((prev) => ({ ...prev, current: !prev.current }))
              }
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
            >
              {showPassword.current ? (
                <EyeClosed size={18} />
              ) : (
                <Eye size={18} />
              )}
            </span>
            {errors.oldPassword && (
              <p className="text-red-500 text-xs">
                {errors.oldPassword.message}
              </p>
            )}
          </div>

          {/* New Password */}
          <div className="flex flex-col gap-1 relative">
            <label className="text-sm font-medium text-[#595959]">
              New Password
            </label>
            <input
              type={showPassword.new ? 'text' : 'password'}
              {...register('newPassword')}
              className={`border px-3 py-2 text-sm text-[#272727] pr-10 ${
                errors.newPassword ? 'border-red-500' : ''
              }`}
            />
            <span
              onClick={() =>
                setShowPassword((prev) => ({ ...prev, new: !prev.new }))
              }
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
            >
              {showPassword.new ? <EyeClosed size={18} /> : <Eye size={18} />}
            </span>
            {errors.newPassword && (
              <p className="text-red-500 text-xs">
                {errors.newPassword.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-1 relative">
            <label className="text-sm font-medium text-[#595959]">
              Confirm Password
            </label>
            <input
              type={showPassword.confirm ? 'text' : 'password'}
              {...register('confirmPassword')}
              className={`border px-3 py-2 text-sm text-[#272727] pr-10 ${
                errors.confirmPassword ? 'border-red-500' : ''
              }`}
            />
            <span
              onClick={() =>
                setShowPassword((prev) => ({ ...prev, confirm: !prev.confirm }))
              }
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
            >
              {showPassword.confirm ? (
                <EyeClosed size={18} />
              ) : (
                <Eye size={18} />
              )}
            </span>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div className="flex justify-end gap-3 mt-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#797068] text-white hover:bg-[#5f544c]"
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
