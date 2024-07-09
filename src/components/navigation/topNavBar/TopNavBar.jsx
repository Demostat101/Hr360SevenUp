import React, { useState } from 'react'
import Pic from '/src/assets/woman.jfif'
import { FaBars } from 'react-icons/fa'
import SearchInput from '../../../pages/SearchInput'

const TopNavBar = ({open,  handleOpenBar}) => {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <>
      <header className={ !open ? "2xl:w-[1312px] max-w-[1312px] h-[86px] flex flex-col justify-center place-items-center" :"2xl:w-[1190px] max-w-[1190px] h-[78px] flex flex-col justify-center place-items-center"  } >
        <div className={open ? "2xl:w-[1128.52px] md:w-[95%] h-[58px] flex justify-between place-items-center" : "2xl:w-[1242.32px] md:w-[95%] h-[63.85px] flex justify-between place-items-center"}>
          <div className="cursor-pointer" onClick={handleOpenBar}>{open ? <FaBars size={25} className='text-[#176B87]'/> : <FaBars size={25} className="text-[#176B87]"/>}</div>
          <div className='flex place-items-center 2xl:w-[576px] md:w-[60%] w-[576px] h-[58px]'>
            <SearchInput/>
            <div className='relative w-[50px] h-[50px'>
            <img  src={Pic} alt="siteImage" className="w-[50px] h-[50px] rounded-full ml-4" />
            <span className={isLogin ? " absolute w-[8.57px] h-[8.57px] bg-[#16E704] rounded-full top-9 right-[-18px]" : " absolute  w-[8.57px] h-[8.57px] bg-red-600 rounded-full top-9 right-[-18px]"}></span>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default TopNavBar
