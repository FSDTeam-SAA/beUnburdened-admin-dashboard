import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import axiosInstance from '@/lib/axios'
import type { OrdersResponse } from '@/../types/order'
import type { ProductsResponse, Product } from '@/../types/products'
import { SalesResponse } from '../../types/sales'
import { UserProfile, ChangePasswordPayload } from '@/../types/user'
import {
  DashboardSummaryResponse,
  RevenueReportResponse,
} from '../../types/dashboard'
import { ColorsResponse } from '../../types/colorResponse'
import { toast } from 'sonner'

// ----------------------
// Orders Hook
// ----------------------
export function useGetOrders() {
  const { data: session } = useSession()
  const token = session?.user?.accessToken
  const role = session?.user?.role
  const userId = session?.user?.id

  return useQuery<OrdersResponse>({
    queryKey: ['orders', role, userId],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `${process.env.NEXT_PUBLIC_API_URL}/order`,
        {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        }
      )
      return res.data
    },
    enabled: !!token,
  })
}

// ----------------------
// Active Products Hook
// ----------------------
export function useGetActiveProducts() {
  const { data: session } = useSession()
  const token = session?.user?.accessToken

  return useQuery<ProductsResponse>({
    queryKey: ['seller-active-products'],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `${process.env.NEXT_PUBLIC_API_URL}/product/seller/active-products`,
        {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        }
      )
      return res.data
    },
    enabled: !!token,
  })
}

// ----------------------
// Pending Products Hook
// ----------------------
export function useGetPendingProducts() {
  const { data: session } = useSession()
  const token = session?.user?.accessToken

  return useQuery<ProductsResponse>({
    queryKey: ['seller-pending-products'],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `${process.env.NEXT_PUBLIC_API_URL}/product/seller/pending-products`,
        {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        }
      )
      return res.data
    },
    enabled: !!token,
  })
}

// ----------------------
// Delete Product Hook
// ----------------------
export function useDeleteProduct() {
  const { data: session } = useSession()
  const token = session?.user?.accessToken
  const queryClient = useQueryClient()
  // console.log('products accessToken', token)
  return useMutation({
    mutationFn: async (productId: string) => {
      await axiosInstance.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/product/${productId}`,
        {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        }
      )
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['seller-pending-products'] })
    },
  })
}

// ----------------------
// Update Product Hook
// ----------------------
export function useUpdateProduct(options?: {
  onSuccess?: () => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError?: (error: any) => void
}) {
  const { data: session } = useSession()
  const token = session?.user?.accessToken
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (payload: {
      productId: string
      data: Partial<Product>
    }) => {
      const { productId, data } = payload
      await axiosInstance.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/product/${productId}`,
        data,
        {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        }
      )
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['seller-pending-products'] })
      toast.success('Proucts updated successfully!')
      options?.onSuccess?.()
    },
    onError: (error) => {
      options?.onError?.(error)
    },
  })
}

// ----------------------
// Single Product Hook
// ----------------------
export function useGetSingleProductById(productId?: string) {
  const { data, refetch, isLoading, isError, error } = useQuery({
    queryKey: ['single-product', productId],
    queryFn: async () => {
      if (!productId) return null

      const res = await axiosInstance.get(
        `${process.env.NEXT_PUBLIC_API_URL}/product/${productId}`
      )
      return res.data
    },
    enabled: !!productId,
  })

  return { data, refetch, isLoading, isError, error }
}

// ----------------------
// Seller Sales Hook
// ----------------------
export const useGetSellerSales = () => {
  const { data: session } = useSession()
  const token = session?.user?.accessToken

  return useQuery<SalesResponse>({
    queryKey: ['seller-sales'],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `${process.env.NEXT_PUBLIC_API_URL}/order/seller/sales`,
        {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        }
      )
      return res.data
    },
    enabled: !!token,
  })
}

// ----------------------
// User Profile Hook
// ----------------------
export const useGetUserProfile = () => {
  const { data: session } = useSession()
  const token = session?.user?.accessToken
  const userId = session?.user?.id

  return useQuery<UserProfile>({
    // keep userId in the key so invalidations can target it
    queryKey: ['user-profile', userId],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/me`,
        {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        }
      )
      return res.data.data
    },
    enabled: !!token,
  })
}

// ----------------------
// Update User Profile Hook
// ----------------------
export const useUpdateUserProfile = () => {
  const { data: session } = useSession()
  const token = session?.user?.accessToken
  const userId = session?.user?.id
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: Partial<UserProfile>) => {
      const res = await axiosInstance.put(
        `${process.env.NEXT_PUBLIC_API_URL}/user/me`,
        data,
        {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        }
      )
      return res.data
    },
    onSuccess: () => {
      // invalidate the exact user-profile key so `useGetUserProfile` refetches
      queryClient.invalidateQueries({ queryKey: ['user-profile', userId] })
    },
  })
}

// ----------------------
// Upload Avatar Hook
// ----------------------
export const useUploadAvatar = () => {
  const { data: session } = useSession()
  const token = session?.user?.accessToken
  const userId = session?.user?.id
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData()
      formData.append('profileImage', file)
      const res = await axiosInstance.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/upload-avatar`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        }
      )
      return res.data
    },
    onSuccess: () => {
      // invalidate so profile refetches
      queryClient.invalidateQueries({ queryKey: ['user-profile', userId] })
    },
  })
}

// ----------------------
// Change Password Hook (unchanged, shown for completeness)
// ----------------------
export const useChangePassword = () => {
  const { data: session } = useSession()
  const token = session?.user?.accessToken

  return useMutation({
    mutationFn: async (data: ChangePasswordPayload) => {
      const res = await axiosInstance.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/change-password`,
        data,
        {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        }
      )
      return res.data
    },
  })
}

// Dashboard Summary Hook
export const useGetDashboardSummary = () => {
  const { data: session } = useSession()
  const token = session?.user?.accessToken

  return useQuery<DashboardSummaryResponse>({
    queryKey: ['dashboard-summary'],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `${process.env.NEXT_PUBLIC_API_URL}/dashboard/seller/dashboard-summary`,
        {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        }
      )
      return res.data
    },
    enabled: !!token,
  })
}

// Revenue Report Hook
export const useGetRevenueReport = (
  period: 'day' | 'week' | 'month' | 'year'
) => {
  const { data: session } = useSession()
  const token = session?.user?.accessToken

  return useQuery<RevenueReportResponse>({
    queryKey: ['revenue-report', period], // unique per filter
    queryFn: async () => {
      const res = await axiosInstance.get(
        `${process.env.NEXT_PUBLIC_API_URL}/dashboard/seller/revenue-report?filter=${period}`,
        {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        }
      )
      return res.data
    },
    enabled: !!token,
    // keepPreviousData: true,
  })
}

// get color hook
export const useGetColors = (page = 1, limit = 50) => {
  const { data: session } = useSession()
  const token = session?.user?.accessToken

  return useQuery<ColorsResponse>({
    queryKey: ['colors', page, limit],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `${process.env.NEXT_PUBLIC_API_URL}/color?page=${page}&limit=${limit}`,
        { headers: token ? { Authorization: `Bearer ${token}` } : {} }
      )
      return res.data
    },
    enabled: !!token,
  })
}
