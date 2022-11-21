import React, { useEffect } from 'react'

import SideBar from '@/components/Pages/Dashboard/Sidebar'
import MobileSidebar from '@/components/Pages/Dashboard/Sidebar/MobileSidebar'
import { useDispatch } from 'react-redux'
import { getUserDataCollection } from '../store/auth/action'

const DashboardLayout: React.FC = (props: any) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserDataCollection())
  }, [])

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#3F68E4] to-[#5EC4F7]">
      <SideBar {...props} />
      <MobileSidebar />
      <div
        id="dBody"
        className="w-full md:w-[calc(100%-80px)] lg:w-[calc(100%-240px)] ml-0 md:ml-20 lg:ml-60 md:h-screen relative bg-[#EEF1F8] overflow-x-hidden md:rounded-tl-[32px] md:rounded-bl-[32px]"
      >
        {props.children}
      </div>
    </div>
  )
}

export default DashboardLayout
