'use client'

import React, { useState } from 'react'
import { Edit, Trash2, Eye } from 'lucide-react'
import Image from 'next/image'
import { Blog } from '../../../../../types/blog'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import TableSkeleton from '@/components/reusable/TableSkeleton'

interface BlogTableProps {
  blogs: Blog[]
  onView: (blog: Blog) => void
  onEdit: (blog: Blog) => void
  onDelete: (blogId: string) => void
  isLoading?: boolean
  currentPage: number
  totalPages: number
  totalData: number
  hasNextPage: boolean
  hasPrevPage: boolean
  onPageChange: (page: number) => void
}

export default function BlogTable({
  blogs,
  onView,
  onEdit,
  onDelete,
  isLoading,
  currentPage,
  totalPages,
  totalData,
  hasNextPage,
  hasPrevPage,
  onPageChange,
}: BlogTableProps) {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleDeleteClick = (blog: Blog) => {
    setSelectedBlog(blog)
    setIsDialogOpen(true)
  }

  const handleDeleteConfirm = () => {
    if (selectedBlog) {
      onDelete(selectedBlog._id)
      setSelectedBlog(null)
      setIsDialogOpen(false)
    }
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false)
    setSelectedBlog(null)
  }

  if (isLoading) {
    return <TableSkeleton />
  }

  if (!blogs) {
    return (
      <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg">
        <p className="text-lg">No blogs found</p>
        <p className="text-sm mt-1">Create your first blog to get started</p>
      </div>
    )
  }

  function getPageNumbers(): (number | string)[] {
    const pages: (number | string)[] = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 3; i++) pages.push(i)
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1)
        pages.push('...')
        for (let i = totalPages - 2; i <= totalPages; i++) pages.push(i)
      } else {
        pages.push(1)
        pages.push('...')
        pages.push(currentPage - 1)
        pages.push(currentPage)
        pages.push(currentPage + 1)
        pages.push('...')
        pages.push(totalPages)
      }
    }
    return pages
  }

  return (
    <div className="bg-white rounded-lg border">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Read Time
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Featured
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {blogs.map((blog) => (
              <tr key={blog._id} className="hover:bg-gray-50 transition-colors">
                {/* Image */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-16 h-16 relative rounded-lg overflow-hidden border">
                    {blog.uploadPhoto ? (
                      <Image
                        src={blog.uploadPhoto}
                        alt={blog.title || 'Blog image'}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                        <span className="text-xs">No Image</span>
                      </div>
                    )}
                  </div>
                </td>

                {/* Title */}
                <td className="px-6 py-4">
                  <div className="max-w-xs">
                    <span className="font-medium text-gray-900 line-clamp-2">
                      {blog.title}
                    </span>
                  </div>
                </td>

                {/* Read Time */}
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                  {blog.readTime || '-'}
                </td>

                {/* Status */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      blog.status === 'Published'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {blog.status || 'draft'}
                  </span>
                </td>

                {/* Featured */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      blog.featured
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {blog.featured ? 'Yes' : 'No'}
                  </span>
                </td>

                {/* Date */}
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {blog.createdAt
                    ? new Date(blog.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })
                    : '-'}
                </td>

                {/* Actions */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex gap-2">
                    <button
                      onClick={() => onView(blog)}
                      className="text-blue-600 hover:text-blue-800 transition-colors p-1 rounded"
                      title="View"
                    >
                      <Eye className="w-5 h-5 cursor-pointer" />
                    </button>

                    <button
                      onClick={() => onEdit(blog)}
                      className="text-green-600 hover:text-green-800 transition-colors p-1 rounded"
                      title="Edit"
                    >
                      <Edit className="w-5 h-5 cursor-pointer" />
                    </button>

                    <button
                      onClick={() => handleDeleteClick(blog)}
                      className="text-red-600 hover:text-red-800 transition-colors p-1 rounded"
                      title="Delete"
                    >
                      <Trash2 className="w-5 h-5 cursor-pointer" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the blog titled &quot;
              {selectedBlog?.title}&quot;? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" onClick={handleDialogClose}>
                Cancel
              </Button>
            </DialogClose>
            <Button variant="destructive" onClick={handleDeleteConfirm}>
              Confirm Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Pagination */}
      {totalPages > 0 && (
        <div className="bg-white px-6 py-4 flex items-center justify-between border-t border-gray-200">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <span>
              Showing page {currentPage} of {totalPages}
            </span>
            <span className="text-gray-400">•</span>
            <span>{totalData} total blogs</span>
          </div>

          <div className="flex items-center gap-1">
            {/* Previous Button */}
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={!hasPrevPage}
              className={`px-3 py-2 rounded border text-sm font-medium ${
                hasPrevPage
                  ? 'text-gray-700 border-gray-300 hover:bg-gray-50'
                  : 'text-gray-400 border-gray-200 cursor-not-allowed'
              }`}
            >
              Previous
            </button>

            {/* Page Numbers */}
            {getPageNumbers().map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === 'number' && onPageChange(page)}
                disabled={page === '...'}
                className={`px-3 py-2 rounded border text-sm font-medium min-w-[40px] ${
                  page === currentPage
                    ? 'bg-blue-600 text-white border-blue-600'
                    : page === '...'
                    ? 'text-gray-400 border-gray-200 cursor-default'
                    : 'text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={!hasNextPage}
              className={`px-3 py-2 rounded border text-sm font-medium ${
                hasNextPage
                  ? 'text-gray-700 border-gray-300 hover:bg-gray-50'
                  : 'text-gray-400 border-gray-200 cursor-not-allowed'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
