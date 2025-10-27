'use client'

import React, { useState } from 'react'
import { Trash2, Eye, MessageSquare } from 'lucide-react'
import { Contact } from '@/lib/contactApi'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import TableSkeleton from '@/components/reusable/TableSkeleton'

interface ContactTableProps {
  contacts: Contact[]
  onView: (contact: Contact) => void
  onRespond: (contact: Contact) => void
  onDelete: (contactId: string) => void
  isLoading?: boolean
  currentPage: number
  totalPages: number
  totalData: number
  hasNextPage: boolean
  hasPrevPage: boolean
  onPageChange: (page: number) => void
}

export default function ContactTable({
  contacts,
  onView,
  onRespond,
  onDelete,
  isLoading,
  currentPage,
  totalPages,
  totalData,
  hasNextPage,
  hasPrevPage,
  onPageChange,
}: ContactTableProps) {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleDeleteClick = (contact: Contact) => {
    setSelectedContact(contact)
    setIsDialogOpen(true)
  }

  const handleDeleteConfirm = () => {
    if (selectedContact) {
      onDelete(selectedContact._id)
      setSelectedContact(null)
      setIsDialogOpen(false)
    }
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false)
    setSelectedContact(null)
  }

  if (isLoading) {
    return <TableSkeleton />
  }

  if (!contacts && !isLoading) {
    return (
      <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg">
        <p className="text-lg">No contacts found</p>
        <p className="text-sm mt-1">New contacts will appear here</p>
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
                Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Message
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {contacts.map((contact) => (
              <tr
                key={contact._id}
                className="hover:bg-gray-50 transition-colors"
              >
                {/* Name */}
                <td className="px-6 py-4">
                  <div className="max-w-xs">
                    <span className="font-medium text-gray-900">
                      {contact.fullName}
                    </span>
                    <p className="text-sm text-gray-500 mt-1">
                      {contact.occupation}
                    </p>
                  </div>
                </td>

                {/* Message */}
                <td className="px-6 py-4">
                  <div className="max-w-md">
                    <span className="text-sm text-gray-600 line-clamp-2">
                      {contact.message || '-'}
                    </span>
                  </div>
                </td>

                {/* Email */}
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                  {contact.email}
                </td>

                {/* Date */}
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {contact.createdAt
                    ? new Date(contact.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })
                    : '-'}
                </td>

                {/* Status */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      contact.status === 'New'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {contact.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex gap-2">
                    <button
                      onClick={() => onView(contact)}
                      className="text-blue-600 hover:text-blue-800 transition-colors p-1 rounded"
                      title="View"
                    >
                      <Eye className="w-5 h-5 cursor-pointer" />
                    </button>

                    <button
                      onClick={() => onRespond(contact)}
                      className={`transition-colors p-1 rounded ${
                        contact.status === 'New'
                          ? 'text-green-600 hover:text-green-800'
                          : 'text-gray-400 cursor-not-allowed'
                      }`}
                      title={
                        contact.status === 'New'
                          ? 'Respond'
                          : 'Already Responded'
                      }
                      disabled={contact.status === 'Respond'}
                    >
                      <MessageSquare className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => handleDeleteClick(contact)}
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
              Are you sure you want to delete the contact from &quot;
              {selectedContact?.fullName}&quot;? This action cannot be undone.
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
            <span>{totalData} total contacts</span>
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
