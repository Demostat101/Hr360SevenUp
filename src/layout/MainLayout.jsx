import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavBar from '../components/navigation/sideNavBar/SideNavBar'
import TopNavBar from '../components/navigation/topNavBar/TopNavBar'
import useLocalStorage from "use-local-storage";

const MainLayout = () => {
  const [open, setOpen] = useLocalStorage(false)

  const handleOpenBar = ()=> {
    const close = !open;
    setOpen(close)
  }
  return (
    <div className='flex w-full min-h-screen'>
      <SideNavBar open={open}/>
      <div className='w-full'>
      <TopNavBar open={open}  handleOpenBar={ handleOpenBar}/>
      <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout
