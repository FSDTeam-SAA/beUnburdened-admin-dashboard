// ==================== FILE: app/blog-management/page.tsx ====================
'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus, ChevronRight } from 'lucide-react'
import { useGetBlogs, useDeleteBlog } from '@/lib/blogApi'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import Image from 'next/image'

import BlogTable from './blogTable'
import { Blog } from '../../../../../types/blog'

export default function BlogManagement() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [viewingBlog, setViewingBlog] = useState<Blog | null>(null)

  // API Queries
  const {
    data: blogsData,
    isLoading: blogsLoading,
    error: blogsError,
    refetch,
  } = useGetBlogs(currentPage, 10)

  const { mutate: deleteBlog, isPending: isDeleting } = useDeleteBlog()

  const handleAddBlog = () => {
    router.push('/admin-dashboard/blog-management/add')
  }

  const handleEditBlog = (blog: Blog) => {
    router.push(`/admin-dashboard/blog-management/edit/${blog._id}`)
  }

  const handleViewBlog = (blog: Blog) => {
    setViewingBlog(blog)
    setIsDetailsOpen(true)
  }

  const handleDeleteBlog = (blogId: string) => {
    if (
      confirm(
        'Are you sure you want to delete this blog? This action cannot be undone.'
      )
    ) {
      deleteBlog(blogId, {
        onSuccess: () => {
          // Refresh the data
          refetch()
        },
      })
    }
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const blogs = blogsData?.blogs || []
  const pagination = blogsData?.pagination

  if (blogsError) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6 text-center">
            <div className="text-red-500 text-lg font-semibold mb-2">
              Error Loading Blogs
            </div>
            <p className="text-gray-600 mb-4">
              Failed to load blogs. Please try again.
            </p>
            <Button onClick={() => refetch()}>Retry</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className=" bg-gray-50 ">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Blog Management
              </h1>
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <span>Dashboard</span>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-gray-900 font-medium">
                  Blog Management
                </span>
              </div>
            </div>
            <Button
              onClick={handleAddBlog}
              className="h-11 px-6 flex items-center gap-2"
              disabled={isDeleting}
            >
              <Plus className="w-4 h-4" />
              Add Blog
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <Card>
          <CardHeader>
            <CardTitle>All Blogs</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <BlogTable
              blogs={blogs}
              onView={handleViewBlog}
              onEdit={handleEditBlog}
              onDelete={handleDeleteBlog}
              isLoading={blogsLoading || isDeleting}
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
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Blog Details</DialogTitle>
            </DialogHeader>
            {viewingBlog && (
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {viewingBlog.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      📖 {viewingBlog.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      📅{' '}
                      {new Date(viewingBlog.createdAt).toLocaleDateString(
                        'en-US',
                        {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        }
                      )}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        viewingBlog.status === 'published'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {viewingBlog.status}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        viewingBlog.featured
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {viewingBlog.featured ? 'Featured' : 'Not Featured'}
                    </span>
                  </div>
                </div>

                {/* Image */}
                {viewingBlog.uploadPhoto && (
                  <div className="relative w-full h-80 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={viewingBlog.uploadPhoto}
                      alt={viewingBlog.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}

                {/* Description */}
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-gray-900">
                    Description
                  </h4>
                  <div
                    className="prose max-w-none text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: viewingBlog.description,
                    }}
                  />
                </div>

                {/* Technical Details */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-lg mb-3 text-gray-900">
                    Technical Details
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-600">
                        File Type:
                      </span>
                      <span className="ml-2 text-gray-900">
                        {viewingBlog.fileType}
                      </span>
                    </div>
                    {viewingBlog.mimeType && (
                      <div>
                        <span className="font-medium text-gray-600">
                          MIME Type:
                        </span>
                        <span className="ml-2 text-gray-900">
                          {viewingBlog.mimeType}
                        </span>
                      </div>
                    )}
                    {viewingBlog.fileSize && (
                      <div>
                        <span className="font-medium text-gray-600">
                          File Size:
                        </span>
                        <span className="ml-2 text-gray-900">
                          {(viewingBlog.fileSize / 1024).toFixed(2)} KB
                        </span>
                      </div>
                    )}
                    {viewingBlog.uploadedAt && (
                      <div>
                        <span className="font-medium text-gray-600">
                          Uploaded At:
                        </span>
                        <span className="ml-2 text-gray-900">
                          {new Date(viewingBlog.uploadedAt).toLocaleString()}
                        </span>
                      </div>
                    )}
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
