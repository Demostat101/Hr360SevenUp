import React from 'react'
import Pic from '/src/assets/download.jpg'
import { FaBars } from 'react-icons/fa'
import SearchInput from '../../../pages/SearchInput'

const TopNavBar = ({open,  handleOpenBar}) => {
  return (
    <>
      <header className=' 2xl:w-[1312px] max-w-[1312px] h-[86px] flex flex-col border-solid border-2 justify-center place-items-center' >
        <div className='2xl:w-[1128.52px] md:w-[95%] h-[58px] flex justify-between border-solid border-2 place-items-center'>
          <div className="cursor-pointer" onClick={handleOpenBar}>{open ? <FaBars className='text-[#176B87]'/> : <FaBars className="text-[#176B87]"/>}</div>
          <div className='flex justify-center place-items-center'>
            <SearchInput/>
            <img  src={Pic} alt="siteImage" className="w-[40px] h-[40px] rounded-full" />
          </div>
        </div>
      </header>
    </>
  )
}

export default TopNavBar
