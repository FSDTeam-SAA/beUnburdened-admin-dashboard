'use client'

import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  useUpdateUserProfile,
  useUploadAvatar,
} from '@/lib/handleAllGetRequests'
import { UserProfile } from '@/../types/user'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

// ----------------------
// Schema
// ----------------------
const profileSchema = z.object({
  name: z.string().min(3, 'Full name must be at least 3 characters'),
  userName: z.string().min(3, 'business name must be at least 3 characters'),
  email: z.string().email('Please enter a valid email address'),
  phoneNumber: z
    .string()
    .min(10, 'Phone number must be at least 10 characters'),
  dateOfBirth: z.string().optional(),
  gender: z.enum(['male', 'female']).optional(),
  addressLine1: z.string().optional(),
})

type ProfileFormData = z.infer<typeof profileSchema>

interface AccountFormProps {
  isEditing: boolean
  profile?: UserProfile
  onProfileSaved?: () => void
}

// We expose { submit(): void } on the forwarded ref
const AccountForm = forwardRef<
  { submit?: () => void } | null,
  AccountFormProps
>(({ isEditing, profile, onProfileSaved }, ref) => {
  const updateProfile = useUpdateUserProfile()
  const uploadAvatar = useUploadAvatar()

  const internalFormRef = useRef<HTMLFormElement | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: profile
      ? {
          name: profile.name,
          userName: profile.userName || profile.businessName || profile.name,
          email: profile.email,
          phoneNumber: profile.phoneNumber || '',
          dateOfBirth: profile.dateOfBirth
            ? new Date(profile.dateOfBirth).toISOString().split('T')[0]
            : '',
          gender: profile.gender as 'male' | 'female' | undefined,
          addressLine1: profile.addressLine1 || '',
        }
      : {},
  })

  // keep form values in sync when `profile` prop changes
  React.useEffect(() => {
    if (profile) {
      reset({
        name: profile.name,
        email: profile.email,
        phoneNumber: profile.phoneNumber || '',
        dateOfBirth: profile.dateOfBirth
          ? new Date(profile.dateOfBirth).toISOString().split('T')[0]
          : '',
        gender: profile.gender as 'male' | 'female' | undefined,
        addressLine1: profile.addressLine1 || '',
      })
    }
  }, [profile, reset])

  // Expose a `submit` method to parent
  useImperativeHandle(ref, () => ({
    submit: () => {
      handleSubmit(onSubmit)()
    },
  }))

  const onSubmit = async (data: ProfileFormData) => {
    try {
      await updateProfile.mutateAsync({
        name: data.name,
        businessName: data.userName,
        phoneNumber: data.phoneNumber,
        dateOfBirth: data.dateOfBirth,
        gender: data.gender,
        addressLine1: data.addressLine1,
      })
      toast.success('Profile updated Successfully')
      if (onProfileSaved) onProfileSaved()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Failed to update profile:', error)
      toast.error(error.message || 'Failed to update profile')
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleUploadClick = () => {
    if (!selectedFile) return
    uploadAvatar.mutate(selectedFile, {
      onSuccess: () => {
        toast.success('Profile image uploaded')
        setSelectedFile(null)
      },
      onError: (err) => {
        console.error('Upload failed', err)
        toast.error(err.message || 'Image upload failed')
      },
    })
  }

  return (
    <div className="bg-transparent p-6">
      <form
        className="grid grid-cols-2 gap-6"
        onSubmit={handleSubmit(onSubmit)}
        ref={internalFormRef}
      >
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="text-base font-medium text-[#595959]">
            Full Name *
          </label>
          <input
            type="text"
            {...register('name')}
            readOnly={!isEditing}
            className={`border px-3 py-2 text-base text-[#272727] rounded ${
              !isEditing ? 'bg-gray-100 cursor-not-allowed' : ''
            } ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs">{errors.name.message}</p>
          )}
        </div>

        {/* User Name */}
        <div className="flex flex-col gap-2">
          <label className="text-base font-medium text-[#595959]">
            Business Name *
          </label>
          <input
            type="text"
            {...register('userName')}
            readOnly={!isEditing}
            className={`border px-3 py-2 text-base text-[#272727] rounded ${
              !isEditing ? 'bg-gray-100 cursor-not-allowed' : ''
            } ${errors.userName ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.userName && (
            <p className="text-red-500 text-xs">{errors.userName.message}</p>
          )}
        </div>

        {/* Email (always readOnly) */}
        <div className="flex flex-col gap-2">
          <label className="text-base font-medium text-[#595959]">Email </label>
          <input
            type="email"
            {...register('email')}
            readOnly
            className="border px-3 py-2 text-base text-[#272727] bg-gray-100 cursor-not-allowed rounded"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-base font-medium text-[#595959]">
            Phone *
          </label>
          <input
            type="text"
            {...register('phoneNumber')}
            readOnly={!isEditing}
            className={`border px-3 py-2 text-base text-[#272727] rounded ${
              !isEditing ? 'bg-gray-100 cursor-not-allowed' : ''
            } ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs">{errors.phoneNumber.message}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div className="flex flex-col gap-2">
          <label className="text-base font-medium text-[#595959]">
            Date of Birth
          </label>
          <input
            type="date"
            {...register('dateOfBirth')}
            readOnly={!isEditing}
            className={`border px-3 py-2 text-base text-[#272727] rounded ${
              !isEditing ? 'bg-gray-100 cursor-not-allowed' : 'border-gray-300'
            }`}
          />
        </div>

        {/* Gender */}
        <div className="flex flex-col gap-2">
          <label className="text-base font-medium text-[#595959]">Gender</label>
          {isEditing ? (
            <select
              {...register('gender')}
              className="border border-gray-300 px-3 py-2 text-base text-[#272727] rounded"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          ) : (
            <input
              type="text"
              {...register('gender')}
              readOnly
              className="border border-gray-300 px-3 py-2 text-base text-[#272727] bg-gray-100 cursor-not-allowed rounded"
            />
          )}
        </div>

        {/* Address */}
        <div className="col-span-2 flex flex-col gap-2">
          <label className="text-base font-medium text-[#595959]">
            Address
          </label>
          <textarea
            {...register('addressLine1')}
            readOnly={!isEditing}
            rows={3}
            className={`border px-3 py-2 text-base text-[#272727] rounded resize-none ${
              !isEditing ? 'bg-gray-100 cursor-not-allowed' : 'border-gray-300'
            }`}
          />
        </div>

        {/* Profile Image Upload */}
        {isEditing && (
          <div className="col-span-2 flex flex-col gap-2">
            <label className="text-base font-medium text-[#595959]">
              Profile Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="border border-gray-300 px-3 py-2 text-base text-[#272727] rounded file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-base file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
            />

            <div className="flex items-center gap-3">
              <Button
                className="bg-[#797068] hover:bg-[#797068]/90"
                onClick={handleUploadClick}
                disabled={!selectedFile || uploadAvatar.isPending}
              >
                {uploadAvatar.isPending ? 'Uploading...' : 'Upload Image'}
              </Button>

              {selectedFile && (
                <p className="text-base text-[#595959]">
                  Selected: {selectedFile.name}
                </p>
              )}
            </div>

            {uploadAvatar.isError && (
              <p className="text-base text-red-500">Upload failed.</p>
            )}
          </div>
        )}

        {/* Hidden submit button */}
        <button type="submit" className="hidden" />
      </form>
    </div>
  )
})

AccountForm.displayName = 'AccountForm'

export default AccountForm
