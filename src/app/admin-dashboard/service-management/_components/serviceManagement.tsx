'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus, ChevronRight } from 'lucide-react'
import { useGetServices, useDeleteService, Service } from '@/lib/serviceApi'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import Image from 'next/image'
import ServiceTable from './serviceTable'
import { useSession } from 'next-auth/react'

export default function ServiceManagement() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [viewingService, setViewingService] = useState<Service | null>(null)

  const session = useSession()
  const accessToken = session.data?.user?.accessToken || ''

  // API Queries
  const {
    data: servicesData,
    isLoading: servicesLoading,
    error: servicesError,
    refetch,
  } = useGetServices(accessToken, currentPage, 10)

  const { mutate: deleteService, isPending: isDeleting } =
    useDeleteService(accessToken)

  useEffect(() => {
    if (accessToken) {
      refetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, currentPage])

  const handleAddService = () => {
    router.push('/admin-dashboard/service-management/add')
  }

  const handleEditService = (service: Service) => {
    router.push(`/admin-dashboard/service-management/edit/${service._id}`)
  }

  const handleViewService = (service: Service) => {
    setViewingService(service)
    setIsDetailsOpen(true)
  }

  const handleDeleteService = (serviceId: string) => {
    deleteService(serviceId, {
      onSuccess: () => {
        refetch()
      },
    })
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const services = servicesData?.services || []
  const pagination = servicesData?.pagination

  if (servicesError) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6 text-center">
            <div className="text-red-500 text-lg font-semibold mb-2">
              Error Loading Services
            </div>
            <p className="text-gray-600 mb-4">
              Failed to load services. Please try again.
            </p>
            <Button onClick={() => refetch()}>Retry</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="bg-gray-50">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
            <div>
              <h1 className="text-3xl font-bold text-[#5A8DEE]">
                Services Management
              </h1>
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <span>Dashboard</span>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-gray-900 font-medium">
                  Services Management
                </span>
              </div>
            </div>
            <Button
              onClick={handleAddService}
              className="h-11 px-6 flex items-center gap-2"
              disabled={isDeleting || !accessToken}
              title={!accessToken ? 'Waiting for auth...' : undefined}
            >
              <Plus className="w-4 h-4" />
              Add New Service
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <Card>
          <CardHeader>
            <CardTitle>All Services</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ServiceTable
              services={services}
              onView={handleViewService}
              onEdit={handleEditService}
              onDelete={handleDeleteService}
              isLoading={servicesLoading || isDeleting}
              currentPage={currentPage}
              totalPages={pagination?.totalPages || 1}
              totalData={pagination?.totalData || 0}
              hasNextPage={pagination?.hasNextPage || false}
              hasPrevPage={pagination?.hasPrevPage || false}
              onPageChange={handlePageChange}
            />
          </CardContent>
        </Card>

        {/* View Details Dialog */}
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogContent className="!max-w-4xl w-full h-[90vh] overflow-y-auto rounded-xl shadow-lg">
            {/* Sticky Header */}
            <DialogHeader className="sticky top-0 bg-white border-b pb-4">
              <DialogTitle className="text-2xl font-semibold text-gray-900">
                Service Details
              </DialogTitle>
            </DialogHeader>

            {viewingService && (
              <div className="space-y-6 py-6">
                {/* Service Header Info */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {viewingService.serviceName}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      ⏱️ {viewingService.sessionInfo}
                    </span>
                    <span className="flex items-center gap-1">
                      📅{' '}
                      {new Date(viewingService.createdAt).toLocaleDateString(
                        'en-US',
                        {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        }
                      )}
                    </span>
                  </div>
                </div>

                {/* Service Image */}
                {viewingService.uploadPhoto && (
                  <div className="relative w-full h-80 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={viewingService.uploadPhoto}
                      alt={viewingService.serviceName}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}

                {/* Service Description */}
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-gray-900">
                    Description
                  </h4>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {viewingService.description}
                  </p>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">File Type</p>
                    <p className="font-medium text-gray-900">
                      {viewingService.fileType || 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">File Size</p>
                    <p className="font-medium text-gray-900">
                      {viewingService.fileSize
                        ? `${(viewingService.fileSize / 1024 / 1024).toFixed(
                            2
                          )} MB`
                        : 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Created At</p>
                    <p className="font-medium text-gray-900">
                      {new Date(viewingService.createdAt).toLocaleDateString(
                        'en-US',
                        {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        }
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Last Updated</p>
                    <p className="font-medium text-gray-900">
                      {new Date(viewingService.updatedAt).toLocaleDateString(
                        'en-US',
                        {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        }
                      )}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
