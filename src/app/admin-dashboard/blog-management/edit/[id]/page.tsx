'use client'

import React, { useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'
import { useGetSingleBlog, useUpdateBlog } from '@/lib/blogApi'
import BlogForm, { BlogFormData } from '../../_components/blogForm'
import { toast } from 'sonner'
import { useSession } from 'next-auth/react'

export default function EditBlogPage() {
  const router = useRouter()
  const params = useParams()
  const blogId = params.id as string

  const session = useSession()
  const accessToken = session.data?.user?.accessToken || ''

  const { data: blogData, isLoading: isLoadingBlog } = useGetSingleBlog(
    blogId,
    accessToken
  )
  const { mutate: updateBlog, isPending } = useUpdateBlog(accessToken)

  useEffect(() => {
    if (session.status === 'unauthenticated') {
      router.push('/signin')
    }
  }, [session.status, router])

  const handleSubmit = (data: BlogFormData, file?: File) => {
    const formData = new FormData()

    formData.append('title', data.title)
    formData.append('readTime', data.readTime)
    formData.append('description', data.description)
    formData.append('status', data.status)

    if (file) {
      formData.append('uploadPhoto', file)
    }

    updateBlog(
      { blogId, data: formData },
      {
        onSuccess: () => {
          toast.success('Blog updated successfully!')
          router.push('/admin-dashboard/blog-management')
        },
        onError: (error) => {
          console.error('Error updating blog:', error)
          toast.error('Failed to update blog. Please try again.')
        },
      }
    )
  }

  const handleCancel = () => {
    router.back()
  }

  if (isLoadingBlog) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading blog...</p>
        </div>
      </div>
    )
  }

  if (!blogData?.blog) {
    return (
      <div className="bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6 text-center">
            <div className="text-red-500 text-lg font-semibold mb-2">
              Blog Not Found
            </div>
            <p className="text-gray-600 mb-4">
              The blog you&apos;re trying to edit doesn&apos;t exist.
            </p>
            <Button
              onClick={() => router.push('/admin-dashboard/blog-management')}
            >
              Back to Blogs
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
          <h1 className="text-3xl font-bold text-[#5A8DEE]">Edit Blog</h1>
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

        <Card>
          <CardHeader>
            <CardTitle className="text-gray-500">
              Edit Blog Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BlogForm
              blog={blogData.blog}
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
