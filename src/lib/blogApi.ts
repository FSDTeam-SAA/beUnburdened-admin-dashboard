/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { BlogsResponse, SingleBlogResponse } from '../../types/blog'
import { useAuthStore } from '@/store/authStore'

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1'

// Helper function to attach token
function getAuthHeaders(): HeadersInit {
  const token = useAuthStore.getState().authData?.accessToken
  return token ? { Authorization: `Bearer ${token}` } : {}
}

// Helper to handle responses
async function handleResponse(response: Response) {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.message || 'Something went wrong')
  }
  return response.json()
}

// ==================== GET ALL BLOGS ====================
export const useGetBlogs = (page = 1, limit = 5) => {
  return useQuery<BlogsResponse>({
    queryKey: ['blogs', page, limit],
    queryFn: async () => {
      const res = await fetch(`${API_BASE_URL}/blogs?page=${page}&limit=5`, {
        credentials: 'include',
        headers: {
          ...getAuthHeaders(),
        },
      })
      return handleResponse(res)
    },
  })
}

// ==================== GET SINGLE BLOG ====================
export const useGetSingleBlog = (blogId?: string) => {
  return useQuery<SingleBlogResponse>({
    queryKey: ['blog', blogId],
    queryFn: async () => {
      if (!blogId) return null
      const res = await fetch(`${API_BASE_URL}/blogs/${blogId}`, {
        credentials: 'include',
        headers: {
          ...getAuthHeaders(),
        },
      })
      return handleResponse(res)
    },
    enabled: !!blogId,
  })
}

// ==================== ADD BLOG ====================
export const useAddBlog = (options?: any) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await fetch(`${API_BASE_URL}/blogs`, {
        method: 'POST',
        body: formData,
        credentials: 'include',
        headers: {
          ...getAuthHeaders(),
        },
      })
      return handleResponse(res)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] })
      options?.onSuccess?.()
    },
    onError: (error) => {
      options?.onError?.(error)
    },
  })
}

// ==================== UPDATE BLOG ====================
export const useUpdateBlog = (options?: any) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ blogId, data }: { blogId: string; data: any }) => {
      const res = await fetch(`${API_BASE_URL}/blogs/${blogId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders(),
        },
        body: JSON.stringify(data),
        credentials: 'include',
      })
      return handleResponse(res)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] })
      queryClient.invalidateQueries({ queryKey: ['blog'] })
      options?.onSuccess?.()
    },
    onError: (error) => {
      options?.onError?.(error)
    },
  })
}

// ==================== DELETE BLOG ====================
export const useDeleteBlog = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (blogId: string) => {
      const res = await fetch(`${API_BASE_URL}/blogs/${blogId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          ...getAuthHeaders(),
        },
      })
      return handleResponse(res)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] })
    },
  })
}
