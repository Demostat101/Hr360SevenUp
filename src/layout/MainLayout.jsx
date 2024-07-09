import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavBar from '../components/navigation/sideNavBar/SideNavBar'
import TopNavBar from '../components/navigation/topNavBar/TopNavBar'

const MainLayout = () => {

  return (
    <div className='flex w-full min-h-screen'>
      <SideNavBar/>
      <div className='w-full'>
      <TopNavBar/>
      <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout
