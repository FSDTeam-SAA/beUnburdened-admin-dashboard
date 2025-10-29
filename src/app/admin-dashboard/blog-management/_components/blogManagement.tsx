'use client'

import React, { useEffect, useState } from 'react'
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
import { useSession } from 'next-auth/react'
import { QueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export default function BlogManagement() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [viewingBlog, setViewingBlog] = useState<Blog | null>(null)

  const session = useSession()
  const accessToken = session.data?.user?.accessToken || ''

  // API Queries — pass accessToken explicitly
  const {
    data: blogsData,
    isLoading: blogsLoading,
    error: blogsError,
    refetch,
  } = useGetBlogs(accessToken, currentPage, 10)

  const { mutate: deleteBlog, isPending: isDeleting } =
    useDeleteBlog(accessToken)

  useEffect(() => {
    // if accessToken becomes available, refetch
    if (accessToken) {
      refetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, currentPage])

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
    deleteBlog(blogId, {
      onSuccess: () => {
        // Refresh the data
        // refetch()
        toast.success('blog deleted successfully')
      },
    })
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
              <h1 className="text-3xl font-bold text-[#5A8DEE]">
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
              disabled={isDeleting || !accessToken}
              title={!accessToken ? 'Waiting for auth...' : undefined}
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
          <DialogContent className="!max-w-4xl w-full h-[90vh] overflow-y-auto rounded-xl shadow-lg">
            {/* Sticky Header */}
            <DialogHeader className="sticky top-0 bg-white border-b">
              <DialogTitle className="text-2xl font-semibold text-gray-900">
                Blog Details
              </DialogTitle>
            </DialogHeader>

            {viewingBlog && (
              <div className="space-y-6 py-6">
                {/* Blog Header Info */}
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
                        viewingBlog.status === 'Published'
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

                {/* Blog Image */}
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

                {/* Blog Description */}
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
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
