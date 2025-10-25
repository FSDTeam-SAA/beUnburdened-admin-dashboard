/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/productsApi.ts
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axiosInstance from '@/lib/axios'
import { toast } from 'sonner'
import { useSession } from 'next-auth/react'

// Types
export interface Category {
  _id: string
  name: string
  productType: string[]
  status: string
  createdBy: {
    _id: string
    name: string
    email: string
  }
  createdAt: string
  updatedAt: string
}

export interface SubCategory {
  name: string
  status: string
  _id: string
  createdAt: string
  updatedAt: string
}

export interface CategoriesResponse {
  statusCode: number
  success: boolean
  message: string
  meta: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
  data: Category[]
}

export interface SubCategoriesResponse {
  statusCode: number
  success: boolean
  message: string
  data: {
    _id: string
    categoryId: {
      _id: string
      name: string
      productType: string[]
    }
    subCategories: SubCategory[]
    createdAt: string
    updatedAt: string
  }
}

// Options interface for useAddProduct callbacks
export interface AddProductOptions {
  onSuccess?: (data: any) => void
  onError?: (error: any) => void
  showToast?: boolean // Optional flag to control toast notifications
}

// Get all categories
export function useGetCategories() {
  const { data: session } = useSession()

  return useQuery({
    queryKey: ['categories'],
    queryFn: async (): Promise<CategoriesResponse> => {
      const token = session?.user?.accessToken
      const response = await axiosInstance.get('/category/all-categories', {
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      })
      return response.data
    },
    enabled: !!session?.user?.accessToken,
  })
}

// Get subcategories by category ID
export function useGetSubCategories(categoryId: string) {
  const { data: session } = useSession()

  return useQuery({
    queryKey: ['subcategories', categoryId],
    queryFn: async (): Promise<SubCategoriesResponse> => {
      const token = session?.user?.accessToken
      const response = await axiosInstance.get(
        `/sub-category/category/${categoryId}`,
        {
          headers: {
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        }
      )
      return response.data
    },
    enabled: !!categoryId && !!session?.user?.accessToken,
  })
}

// Add product mutation with callback support
export function useAddProduct(options?: AddProductOptions) {
  const { data: session } = useSession()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: FormData) => {
      const token = session?.user?.accessToken
      console.log('token', token)

      // Proper way to debug FormData
      console.log('FormData debugging:')
      console.log('FormData entries count:', Array.from(data.entries()).length)

      // Log all FormData entries
      for (const [key, value] of data.entries()) {
        if (value instanceof File) {
          console.log(
            `${key}: File(name: ${value.name}, size: ${value.size} bytes, type: ${value.type})`
          )
        } else {
          console.log(`${key}:`, value)
        }
      }

      const response = await axiosInstance.post('/product', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      })
      return response.data
    },
    onSuccess: (data) => {
      // Invalidate products query to refresh the list
      queryClient.invalidateQueries({ queryKey: ['products'] })

      // Show toast notification (if not disabled)
      if (options?.showToast !== false) {
        toast.success('Product added successfully')
      }

      // Call custom onSuccess callback if provided
      if (options?.onSuccess) {
        options.onSuccess(data)
      }

      // reset the form
    },
    onError: (error) => {
      console.error('Error details:', error)

      // Show toast notification (if not disabled)
      if (options?.showToast !== false) {
        toast.error('Failed to add product')
      }

      // Call custom onError callback if provided
      if (options?.onError) {
        options.onError(error)
      }
    },
  })
}

// Alternative version without toast notifications (if you want full control)
export function useAddProductSilent(
  options?: Omit<AddProductOptions, 'showToast'>
) {
  const { data: session } = useSession()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: FormData) => {
      const token = session?.user?.accessToken
      console.log('token', token)

      // Debug FormData
      console.log('FormData debugging:')
      console.log('FormData entries count:', Array.from(data.entries()).length)

      for (const [key, value] of data.entries()) {
        if (value instanceof File) {
          console.log(
            `${key}: File(name: ${value.name}, size: ${value.size} bytes, type: ${value.type})`
          )
        } else {
          console.log(`${key}:`, value)
        }
      }

      const response = await axiosInstance.post('/product', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      })
      return response.data
    },
    onSuccess: (data) => {
      // Invalidate products query to refresh the list
      queryClient.invalidateQueries({ queryKey: ['products'] })

      // Only call custom callback
      if (options?.onSuccess) {
        options.onSuccess(data)
      }
    },
    onError: (error) => {
      console.error('Error details:', error)

      // Only call custom callback
      if (options?.onError) {
        options.onError(error)
      }
    },
  })
}
