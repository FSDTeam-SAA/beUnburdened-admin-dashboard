'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'
import { useGetContacts, useDeleteContact, Contact } from '@/lib/contactApi'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import ContactTable from './contactTable'
import { useSession } from 'next-auth/react'
import RespondDialog from './respondDialog'

export default function ContactManagement() {
  const [currentPage, setCurrentPage] = useState(1)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [isRespondOpen, setIsRespondOpen] = useState(false)
  const [viewingContact, setViewingContact] = useState<Contact | null>(null)
  const [respondingContact, setRespondingContact] = useState<Contact | null>(
    null
  )

  const session = useSession()
  const accessToken = session.data?.user?.accessToken || ''

  // API Queries
  const {
    data: contactsData,
    isLoading: contactsLoading,
    error: contactsError,
    refetch,
  } = useGetContacts(accessToken, currentPage, 10)

  const { mutate: deleteContact, isPending: isDeleting } =
    useDeleteContact(accessToken)

  useEffect(() => {
    if (accessToken) {
      refetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, currentPage])

  const handleViewContact = (contact: Contact) => {
    setViewingContact(contact)
    setIsDetailsOpen(true)
  }

  const handleRespondContact = (contact: Contact) => {
    setRespondingContact(contact)
    setIsRespondOpen(true)
  }

  const handleDeleteContact = (contactId: string) => {
    deleteContact(contactId, {
      onSuccess: () => {
        refetch()
      },
    })
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const contacts = contactsData?.data?.contracts || []
  const pagination = contactsData?.data?.pagination

  if (contactsError) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6 text-center">
            <div className="text-red-500 text-lg font-semibold mb-2">
              Error Loading Contacts
            </div>
            <p className="text-gray-600 mb-4">
              Failed to load contacts. Please try again.
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
                Contact Management
              </h1>
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <span>Dashboard</span>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-gray-900 font-medium">
                  Contact Management
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Card>
          <CardHeader>
            <CardTitle>All Contacts</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ContactTable
              contacts={contacts}
              onView={handleViewContact}
              onRespond={handleRespondContact}
              onDelete={handleDeleteContact}
              isLoading={contactsLoading || isDeleting}
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
          <DialogContent className="!max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-lg">
            {/* Sticky Header */}
            <DialogHeader className="sticky top-0 bg-white border-b pb-4">
              <DialogTitle className="text-2xl font-semibold text-gray-900">
                Contact Details
              </DialogTitle>
            </DialogHeader>

            {viewingContact && (
              <div className="space-y-6 py-6">
                {/* Contact Header Info */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {viewingContact.fullName}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      📧 {viewingContact.email}
                    </span>
                    <span className="flex items-center gap-1">
                      📞 {viewingContact.phoneNumber}
                    </span>
                    <span className="flex items-center gap-1">
                      💼 {viewingContact.occupation}
                    </span>
                  </div>
                  <div className="inline-block">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        viewingContact.status === 'New'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {viewingContact.status}
                    </span>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-gray-900">
                    Message
                  </h4>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">
                    {viewingContact.message}
                  </p>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Received At</p>
                    <p className="font-medium text-gray-900">
                      {new Date(viewingContact.createdAt).toLocaleDateString(
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
                      {new Date(viewingContact.updatedAt).toLocaleDateString(
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

        {/* Respond Dialog */}
        <RespondDialog
          contact={respondingContact}
          isOpen={isRespondOpen}
          onClose={() => {
            setIsRespondOpen(false)
            setRespondingContact(null)
          }}
          onSuccess={() => {
            refetch()
            setIsRespondOpen(false)
            setRespondingContact(null)
          }}
          accessToken={accessToken}
        />
      </div>
    </div>
  )
}
