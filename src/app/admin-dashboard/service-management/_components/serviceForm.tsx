'use client'

import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Loader2, Upload, X } from 'lucide-react'
import Image from 'next/image'
import { Service } from '@/lib/serviceApi'

const serviceSchema = z.object({
  serviceName: z.string().min(1, 'Service name is required'),
  sessionInfo: z.string().min(1, 'Session info is required'),
  description: z.string().min(1, 'Description is required'),
})

export type ServiceFormData = z.infer<typeof serviceSchema>

interface ServiceFormProps {
  service?: Service | null
  onSubmit: (data: ServiceFormData, file?: File) => void
  onCancel: () => void
  isLoading?: boolean
}

export default function ServiceForm({
  service,
  onSubmit,
  onCancel,
  isLoading,
}: ServiceFormProps) {
  const [imagePreview, setImagePreview] = useState<string>(
    service?.uploadPhoto || ''
  )
  const [imageFile, setImageFile] = useState<File | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ServiceFormData>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      serviceName: service?.serviceName || '',
      sessionInfo: service?.sessionInfo || '',
      description: service?.description || '',
    },
  })

  useEffect(() => {
    if (service) {
      reset({
        serviceName: service.serviceName || '',
        sessionInfo: service.sessionInfo || '',
        description: service.description || '',
      })
      setImagePreview(service.uploadPhoto || '')
    }
  }, [service, reset])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file')
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Image size should be less than 5MB')
      return
    }

    setImageFile(file)
    const reader = new FileReader()
    reader.onloadend = () => {
      setImagePreview(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  const removeImage = () => {
    setImagePreview('')
    setImageFile(null)
  }

  const onFormSubmit = (data: ServiceFormData) => {
    onSubmit(data, imageFile || undefined)
  }

  return (
    <div className="space-y-6 text-gray-500 bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Service Name */}
        <div>
          <Label
            htmlFor="serviceName"
            className="text-sm font-medium text-gray-700"
          >
            Service Name *
          </Label>
          <Input
            id="serviceName"
            placeholder="Enter service name..."
            {...register('serviceName')}
            className="mt-1"
          />
          {errors.serviceName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.serviceName.message}
            </p>
          )}
        </div>

        {/* Session Info */}
        <div>
          <Label
            htmlFor="sessionInfo"
            className="text-sm font-medium text-gray-700"
          >
            Session Info *
          </Label>
          <Input
            id="sessionInfo"
            placeholder="e.g., 60 min session"
            {...register('sessionInfo')}
            className="mt-1"
          />
          {errors.sessionInfo && (
            <p className="text-red-500 text-sm mt-1">
              {errors.sessionInfo.message}
            </p>
          )}
        </div>
      </div>

      {/* Description */}
      <div>
        <Label
          htmlFor="description"
          className="text-sm font-medium text-gray-700"
        >
          Description *
        </Label>
        <Textarea
          id="description"
          placeholder="Enter service description..."
          {...register('description')}
          className="mt-1 min-h-[120px]"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Image Upload */}
      <div>
        <Label className="text-sm font-medium text-gray-700 mb-2">
          Service Image
        </Label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mt-1 hover:border-gray-400 transition-colors">
          {imagePreview ? (
            <div className="relative inline-block">
              <Image
                src={imagePreview}
                alt="Preview"
                width={200}
                height={150}
                className="max-h-48 rounded-lg object-cover"
              />
              <button
                type="button"
                onClick={removeImage}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div>
              <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-500 mb-2">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-400 mb-4">
                PNG, JPG, WEBP up to 5MB
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="service-image"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  document.getElementById('service-image')?.click()
                }
              >
                Choose File
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex justify-start gap-3 pt-6">
        <Button
          onClick={handleSubmit(onFormSubmit)}
          disabled={isLoading}
          className="min-w-[120px]"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {service ? 'Updating...' : 'Creating...'}
            </>
          ) : service ? (
            'Update Service'
          ) : (
            'Create Service'
          )}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isLoading}
        >
          Cancel
        </Button>
      </div>
    </div>
  )
}
