import React, { useEffect } from 'react'
import Header from '@/components/Pages/Dashboard/Header'
import DashboardLayout from '@/layouts/DashboardLayout'

const MessageWrapper = () => {
  useEffect(() => {
    const hubspot = window.HubSpotConversations
    if (hubspot) {
      hubspot.widget.open()
    }
  }, [])

  return (
    <DashboardLayout>
      <div className="w-full relative pt-[60px] md:pt-[142px] pb-10 px-0 md:px-[60px] ">
        <Header title="Message" />
        <div className="px-6 md:px-0 mt-3 md:mt-0"></div>
      </div>
    </DashboardLayout>
  )
}

export default MessageWrapper
