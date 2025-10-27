import React, { Suspense } from 'react'
import VerifyEmailPage from '../_components/verifyEmailPage'

const page = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <VerifyEmailPage />
      </Suspense>
    </>
  )
}

export default page
