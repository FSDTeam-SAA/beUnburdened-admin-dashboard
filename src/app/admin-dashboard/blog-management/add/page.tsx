'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'
import { useAddBlog } from '@/lib/blogApi'
import BlogForm, { BlogFormData } from '../_components/blogForm'
import { useSession } from 'next-auth/react'

export default function AddBlogPage() {
  const router = useRouter()
  const session = useSession()
  const accessToken = session.data?.user?.accessToken || ''

  // pass accessToken explicitly
  const { mutate: addBlog, isPending } = useAddBlog(accessToken)

  useEffect(() => {
    // optional: redirect to signin if no token
    if (session.status === 'unauthenticated') {
      router.push('/signin')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.status])

  const handleSubmit = (data: BlogFormData, file?: File) => {
    const formData = new FormData()

    // Append form fields
    formData.append('title', data.title)
    formData.append('readTime', data.readTime)
    formData.append('description', data.description)
    formData.append('status', data.status)

    // Append tags if they exist
    // if (data.tags && data.tags.length > 0) {
    //   data.tags.forEach((tag) => formData.append('tags', tag))
    // }

    // Append file if it exists
    if (file) {
      formData.append('uploadPhoto', file)
    }

    addBlog(formData, {
      onSuccess: () => {
        router.push('/admin-dashboard/blog-management')
      },
      onError: (error) => {
        console.error('Error adding blog:', error)
        alert('Failed to add blog. Please try again.')
      },
    })
  }

  const handleCancel = () => {
    router.back()
  }

  return (
    <div className=" bg-[] shadow-none">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-[#5A8DEE]">Add New Blog</h1>

            <Button
              variant="ghost"
              onClick={handleCancel}
              className="mb-4 flex items-center gap-2"
              disabled={isPending}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs
            </Button>
          </div>
        </div>

        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle>Blog Information</CardTitle>
          </CardHeader>
          <CardContent className="bg-transparent">
            <BlogForm
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
