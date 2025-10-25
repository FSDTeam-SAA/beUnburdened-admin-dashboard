import { auth } from '@/auth'
import { redirect } from 'next/navigation'
// import { redirect } from 'next/navigation'

export default async function Page() {
  const session = await auth()
  console.log('users role::', session)
  if (session?.user && session?.user?.role.toLowerCase() !== 'admin') {
    return redirect('/signin')
  }
  redirect('/admin-dashboard/dashboard')
}
