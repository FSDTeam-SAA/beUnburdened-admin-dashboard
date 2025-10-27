'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'
import { useAddService } from '@/lib/serviceApi'

import { toast } from 'sonner'
import { useSession } from 'next-auth/react'
import ServiceForm, { ServiceFormData } from '../_components/serviceForm'

export default function AddServicePage() {
  const router = useRouter()
  const session = useSession()
  const accessToken = session.data?.user?.accessToken || ''

  const { mutate: addService, isPending } = useAddService(accessToken)

  useEffect(() => {
    if (session.status === 'unauthenticated') {
      router.push('/signin')
    }
  }, [session.status, router])

  const handleSubmit = (data: ServiceFormData, file?: File) => {
    const formData = new FormData()

    // Append form fields
    formData.append('serviceName', data.serviceName)
    formData.append('sessionInfo', data.sessionInfo)
    formData.append('description', data.description)

    // Append file if it exists
    if (file) {
      formData.append('uploadPhoto', file)
    }

    addService(formData, {
      onSuccess: () => {
        toast.success('Service added successfully!')
        router.push('/admin-dashboard/service-management')
      },
      onError: (error) => {
        console.error('Error adding service:', error)
        toast.error('Failed to add service. Please try again.')
      },
    })
  }

  const handleCancel = () => {
    router.back()
  }

  return (
    <div className="bg-gray-50">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-[#5A8DEE]">
              Add New Service
            </h1>

            <Button
              variant="ghost"
              onClick={handleCancel}
              className="mb-4 flex items-center gap-2"
              disabled={isPending}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Button>
          </div>
        </div>

        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-gray-500">Service Information</CardTitle>
          </CardHeader>
          <CardContent className="bg-transparent">
            <ServiceForm
              onSubmit={handleSubmit}
              onCancel={handleCancel}
              isLoading={isPending}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
