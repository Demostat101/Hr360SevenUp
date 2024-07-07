import React from 'react'
import Pic from '/src/assets/download.jpg'
import { FaBars } from 'react-icons/fa'

const TopNavBar = ({open,  handleOpenBar}) => {
  return (
    <>
      <div className='w-full h-[50px] flex justify-between border-solid border-2 place-items-center pl-8 pr-8' >
        <div onClick={handleOpenBar}>{open ? <FaBars/> : <FaBars/>}</div>
        <div>Welcome To Sail Innovation Lab</div>
        <img  src={Pic} alt="siteImage" className="w-[40px] h-[40px] rounded-full" />
      </div>
    </>
  )
}

export default TopNavBar
