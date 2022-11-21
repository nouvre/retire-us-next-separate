import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUsers } from '@/store/setting/action'
// import OnboardingUser from "./OnboardingUser";
// import RolloverUser from "./RolloverUser";
import IntroUsers from '@/components/Pages/Admin/Users/IntroUsers'
import RegisteredUser from '@/components/Pages/Admin/Users/RegisteredUser'
import { useRouter } from 'next/router'
import AdminLayout from '@/layouts/AdminLayout'

interface locationStateProps {
  user_type: 'registered' | 'onboarding' | 'rollover' | 'intro'
}

const Users: React.FC = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { user_type } = router.query
  const [userType, setUserType] = useState<string>('registered')

  const userTypeState: locationStateProps = {
    user_type: user_type as 'registered' | 'onboarding' | 'rollover' | 'intro',
  }

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  useEffect(() => {
    if (userTypeState?.user_type) {
      setUserType(userTypeState?.user_type)
    }
  }, [userTypeState])

  return (
    <AdminLayout>
      {userType === 'registered' && (
        <div className="w-full mt-20 bg-white rounded-lg p-5">
          <div className="w-full flex py-5 items-center text-2xl font-semibold">
            Registered Users
          </div>
          <RegisteredUser />
        </div>
      )}
      {userType === 'intro' && <IntroUsers />}
    </AdminLayout>
  )
}

export default Users
