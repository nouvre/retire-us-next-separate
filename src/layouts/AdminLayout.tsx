import React from 'react'
import Header from '@/components/Pages/Admin/Header'

const AdminLayout: React.FC = (props: any) => {
  return (
    <div className="w-full min-h-screen flex bg-no-repeat bg-centre object-cover font-Lato">
      {/* <SideBar {...props} /> */}
      <div className="w-full relative">
        <Header {...props} />
        <div className="w-full p-4 px-16 min-h-screen">{props.children}</div>
      </div>
    </div>
  )
}

export default AdminLayout
