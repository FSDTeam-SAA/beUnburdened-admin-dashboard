// ==================== FILE: components/BlogForm.tsx ====================
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

const blogSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  readTime: z.string().min(1, 'Read time is required'),
  description: z.string().min(1, 'Description is required'),
  status: z.enum(['draft', 'published']),
  tags: z.array(z.string()).optional(),
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
  const [tagInput, setTagInput] = useState('')
  const [tags, setTags] = useState<string[]>(blog?.tags || [])

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
      status: blog?.status || 'draft',
      tags: blog?.tags || [],
    },
  })

  useEffect(() => {
    if (blog) {
      reset({
        title: blog.title || '',
        readTime: blog.readTime || '',
        description: blog.description || '',
        status: blog.status || 'draft',
        tags: blog.tags || [],
      })
      setImagePreview(blog.uploadPhoto || '')
      setTags(blog.tags || [])
    }
  }, [blog, reset])

  useEffect(() => {
    setValue('tags', tags)
  }, [tags, setValue])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file')
        return
      }

      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB')
        return
      }

      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setImagePreview('')
    setImageFile(null)
  }

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      const newTags = [...tags, tagInput.trim()]
      setTags(newTags)
      setTagInput('')
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAddTag()
    }
  }

  const onFormSubmit = (data: BlogFormData) => {
    onSubmit(data, imageFile || undefined)
  }

  return (
    <div className="space-y-6 text-gray-500">
      <div className=" space-y-6">
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

      {/* Tags */}
      <div>
        <Label className="text-sm font-medium text-gray-700">Tags</Label>
        <div className="flex gap-2 mt-1">
          <Input
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a tag and press Enter..."
            className="flex-1"
          />
          <Button
            type="button"
            onClick={handleAddTag}
            variant="outline"
            disabled={!tagInput.trim()}
          >
            Add
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center gap-1"
            >
              {tag}
              <button
                type="button"
                onClick={() => handleRemoveTag(tag)}
                className="hover:text-red-600 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
        {errors.tags && (
          <p className="text-red-500 text-sm mt-1">{errors.tags.message}</p>
        )}
      </div>

      {/* Image Upload */}
      <div>
        <Label className="text-sm font-medium text-gray-700">Blog Image</Label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mt-1 hover:border-gray-400 transition-colors">
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
              <Upload className="w-12 h-12 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-500 mb-2">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-400 mb-4">
                PNG, JPG, WEBP up to 5MB
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
          className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end gap-3 pt-6 border-t">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isLoading}
        >
          Cancel
        </Button>
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
      </div>
    </div>
  )
}
