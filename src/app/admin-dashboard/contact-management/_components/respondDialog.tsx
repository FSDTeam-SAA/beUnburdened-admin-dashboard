'use client'

import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-react'
import { Contact, useUpdateContactStatus } from '@/lib/contactApi'
import { toast } from 'sonner'

interface RespondDialogProps {
  contact: Contact | null
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  accessToken: string
}

export default function RespondDialog({
  contact,
  isOpen,
  onClose,
  onSuccess,
  accessToken,
}: RespondDialogProps) {
  const [responseMessage, setResponseMessage] = useState('')
  const [error, setError] = useState('')

  const { mutate: updateStatus, isPending } = useUpdateContactStatus(
    accessToken,
    {
      onSuccess: () => {
        setResponseMessage('')
        setError('')
        onSuccess()
        toast.success('Response sent successfully!')
      },
      onError: (err: Error) => {
        setError(err.message || 'Failed to send response')
      },
    }
  )

  const handleSubmit = () => {
    if (!responseMessage.trim()) {
      setError('Please enter a response message')
      return
    }

    if (!contact?._id) {
      setError('Invalid contact')
      return
    }

    updateStatus({
      contactId: contact._id,
      responseMessage: responseMessage.trim(),
    })
  }

  const handleClose = () => {
    if (!isPending) {
      setResponseMessage('')
      setError('')
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Respond to Contact</DialogTitle>
          <DialogDescription>
            Send a response to {contact?.fullName}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Contact Info */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-500">Name:</span>
                <span className="ml-2 font-medium">{contact?.fullName}</span>
              </div>
              <div>
                <span className="text-gray-500">Email:</span>
                <span className="ml-2 font-medium">{contact?.email}</span>
              </div>
              <div>
                <span className="text-gray-500">Phone:</span>
                <span className="ml-2 font-medium">{contact?.phoneNumber}</span>
              </div>
              <div>
                <span className="text-gray-500">Occupation:</span>
                <span className="ml-2 font-medium">{contact?.occupation}</span>
              </div>
            </div>
            <div className="pt-2 border-t">
              <span className="text-gray-500 text-sm">Message:</span>
              <p className="text-sm mt-1 text-gray-700">{contact?.message}</p>
            </div>
          </div>

          {/* Response Message Input */}
          <div>
            <Label htmlFor="responseMessage" className="text-sm font-medium">
              Your Response *
            </Label>
            <Textarea
              id="responseMessage"
              placeholder="Enter your response message..."
              value={responseMessage}
              onChange={(e) => {
                setResponseMessage(e.target.value)
                setError('')
              }}
              className="mt-2 min-h-[120px]"
              disabled={isPending}
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={handleClose}
            disabled={isPending}
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Response'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
