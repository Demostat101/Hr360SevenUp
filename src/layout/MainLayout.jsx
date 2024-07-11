import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavBar from '../components/navigation/sideNavBar/SideNavBar'
import TopNavBar from '../components/navigation/topNavBar/TopNavBar'

const MainLayout = () => {

  return (
    <div className='flex flex-col place-items-center w-full min-h-screen'>
      <div className='2xl:w-[1440px] flex w-full min-h-screen bg-[#F6F7FA]'>
        <SideNavBar/>
        <div className='w-full'>
        <TopNavBar/>
        <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
