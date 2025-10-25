// ==================== FILE: app/blog-management/add/page.tsx ====================
'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'
import { useAddBlog } from '@/lib/blogApi'
import BlogForm, { BlogFormData } from '../_components/blogForm'

export default function AddBlogPage() {
  const router = useRouter()
  const { mutate: addBlog, isPending } = useAddBlog()

  const handleSubmit = (data: BlogFormData, file?: File) => {
    const formData = new FormData()

    // Append form fields
    formData.append('title', data.title)
    formData.append('readTime', data.readTime)
    formData.append('description', data.description)
    formData.append('status', data.status)

    // Append tags if they exist
    if (data.tags && data.tags.length > 0) {
      data.tags.forEach((tag) => formData.append('tags', tag))
    }

    // Append file if it exists
    if (file) {
      formData.append('uploadPhoto', file)
    }

    addBlog(formData, {
      onSuccess: () => {
        router.push('/blog-management')
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
    <div className="min-h-screen bg-gray-50">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={handleCancel}
            className="mb-4 flex items-center gap-2"
            disabled={isPending}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Add New Blog</h1>
          <p className="text-gray-600 mt-2">Create a new blog post</p>
        </div>

        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle>Blog Information</CardTitle>
          </CardHeader>
          <CardContent>
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
