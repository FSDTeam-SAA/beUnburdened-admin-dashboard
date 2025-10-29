'use client'

import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2, Upload, X } from 'lucide-react'
import TiptapEditor from './TiptapEditor'
import Image from 'next/image'
import { Blog } from '../../../../../types/blog'
import { toast } from 'sonner'

const blogSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  readTime: z.string().min(1, 'Read time is required'),
  description: z.string().min(1, 'Description is required'),
  status: z.enum(['Draft', 'Published', 'Pending']),
})

export type BlogFormData = z.infer<typeof blogSchema>

interface BlogFormProps {
  blog?: Blog | null
  onSubmit: (data: BlogFormData, file?: File) => void
  onCancel: () => void
  isLoading?: boolean
}

export default function BlogForm({
  blog,
  onSubmit,
  onCancel,
  isLoading,
}: BlogFormProps) {
  const [imagePreview, setImagePreview] = useState<string>(
    blog?.uploadPhoto || ''
  )
  const [imageFile, setImageFile] = useState<File | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: blog?.title || '',
      readTime: blog?.readTime || '',
      description: blog?.description || '',
      status: (blog?.status as 'Draft' | 'Published' | 'Pending') || 'Draft',
    },
  })

  useEffect(() => {
    if (blog) {
      reset({
        title: blog.title || '',
        readTime: blog.readTime || '',
        description: blog.description || '',
        status: (blog.status as 'Draft' | 'Published' | 'Pending') || 'Draft',
      })
      setImagePreview(blog.uploadPhoto || '')
    }
  }, [blog, reset])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file')
      return
    }

    if (file.size > 10 * 1024 * 1024) {
      toast.error('Image size should be less than 10MB')
      return
    }

    setImageFile(file)
    const reader = new FileReader()
    reader.onloadend = () => {
      setImagePreview(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  const removeImage = () => {
    setImagePreview('')
    setImageFile(null)
  }

  const onFormSubmit = (data: BlogFormData) => {
    onSubmit(data, imageFile || undefined)
  }

  return (
    <div className="space-y-6 text-gray-500 bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Title */}
        <div>
          <Label htmlFor="title" className="text-sm font-medium text-gray-700">
            Title *
          </Label>
          <Input
            id="title"
            placeholder="Enter blog title..."
            {...register('title')}
            className="mt-1"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Read Time */}
        <div>
          <Label
            htmlFor="readTime"
            className="text-sm font-medium text-gray-700"
          >
            Read Time *
          </Label>
          <Input
            id="readTime"
            placeholder="e.g., 5 min read"
            {...register('readTime')}
            className="mt-1"
          />
          {errors.readTime && (
            <p className="text-red-500 text-sm mt-1">
              {errors.readTime.message}
            </p>
          )}
        </div>
      </div>

      {/* Description */}
      <div>
        <Label className="text-sm font-medium text-gray-700">
          Description *
        </Label>
        <div className="mt-1">
          <TiptapEditor
            content={watch('description')}
            onChange={(content) => setValue('description', content)}
          />
        </div>
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Image Upload */}
      <div>
        <Label className="text-sm font-medium text-gray-700 mb-2">
          Blog Image
        </Label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-2 text-center mt-1 hover:border-gray-400 transition-colors">
          {imagePreview ? (
            <div className="relative inline-block">
              <Image
                src={imagePreview}
                alt="Preview"
                width={200}
                height={150}
                className="max-h-48 rounded-lg object-cover"
              />
              <button
                type="button"
                onClick={removeImage}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div>
              <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-500 mb-2">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-400 mb-4">
                PNG, JPG, WEBP up to 10MB
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="blog-image"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => document.getElementById('blog-image')?.click()}
              >
                Choose File
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Status */}
      <div>
        <Label htmlFor="status" className="text-sm font-medium text-gray-700">
          Status
        </Label>
        <select
          {...register('status')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1 focus:outline-none"
        >
          <option value="Draft">Draft</option>
          <option value="Published">Published</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      {/* Form Actions */}
      <div className="flex justify-start gap-3 pt-6">
        <Button
          onClick={handleSubmit(onFormSubmit)}
          disabled={isLoading}
          className="min-w-[120px]"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {blog ? 'Updating...' : 'Creating...'}
            </>
          ) : blog ? (
            'Update Blog'
          ) : (
            'Create Blog'
          )}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isLoading}
        >
          Cancel
        </Button>
      </div>
    </div>
  )
}
