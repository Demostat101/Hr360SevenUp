import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavBar from '../components/navigation/sideNavBar/SideNavBar'
import TopNavBar from '../components/navigation/topNavBar/TopNavBar'

const MainLayout = () => {
  return (
    <div className='flex w-full border-solid border-2 border-red-600 h-screen'>
      <SideNavBar/>
      <div>
      <TopNavBar/>
      <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout
