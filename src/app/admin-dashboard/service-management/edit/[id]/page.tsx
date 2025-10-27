'use client'

import React, { useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'
import { useGetSingleService, useUpdateService } from '@/lib/serviceApi'

import { toast } from 'sonner'
import { useSession } from 'next-auth/react'
import ServiceForm, { ServiceFormData } from '../../_components/serviceForm'

export default function EditServicePage() {
  const router = useRouter()
  const params = useParams()
  const serviceId = params.id as string

  const session = useSession()
  const accessToken = session.data?.user?.accessToken || ''

  const { data: serviceData, isLoading: isLoadingService } =
    useGetSingleService(serviceId, accessToken)
  const { mutate: updateService, isPending } = useUpdateService(accessToken)

  useEffect(() => {
    if (session.status === 'unauthenticated') {
      router.push('/signin')
    }
  }, [session.status, router])

  const handleSubmit = (data: ServiceFormData, file?: File) => {
    const formData = new FormData()

    formData.append('serviceName', data.serviceName)
    formData.append('sessionInfo', data.sessionInfo)
    formData.append('description', data.description)

    if (file) {
      formData.append('uploadPhoto', file)
    }

    updateService(
      { serviceId, data: formData },
      {
        onSuccess: () => {
          toast.success('Service updated successfully!')
          router.push('/admin-dashboard/service-management')
        },
        onError: (error) => {
          console.error('Error updating service:', error)
          toast.error('Failed to update service. Please try again.')
        },
      }
    )
  }

  const handleCancel = () => {
    router.back()
  }

  if (isLoadingService) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading service...</p>
        </div>
      </div>
    )
  }

  if (!serviceData?.service) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6 text-center">
            <div className="text-red-500 text-lg font-semibold mb-2">
              Service Not Found
            </div>
            <p className="text-gray-600 mb-4">
              The service you&apos;re trying to edit doesn&apos;t exist.
            </p>
            <Button
              onClick={() => router.push('/admin-dashboard/service-management')}
            >
              Back to Services
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="bg-gray-50">
      <div className="max-w-full mx-auto">
        <div className="mb-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#5A8DEE]">Edit Service</h1>
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

        <Card>
          <CardHeader>
            <CardTitle className="text-gray-500">
              Edit Service Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ServiceForm
              service={serviceData.service}
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
