import React, { Suspense } from 'react'
import ResetPasswordPage from '../_components/resetPasswordPage'

const page = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ResetPasswordPage />
      </Suspense>
    </>
  )
}

export default page
