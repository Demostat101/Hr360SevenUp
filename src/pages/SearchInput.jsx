
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { LiaSlidersHSolid } from 'react-icons/lia'

const SearchInput = () => {
  return (
    <form className='2xl:w-[511px] h-[58px] bg-[
#ECEEF6] flex flex-col justify-center place-items-center border-solid border-2 border-red-500'>
        <div className=' 2xl:w-[451px] h-[27px] flex place-items-center'>
            <CiSearch/>
            <input type="text" placeholder='Search...' />
            <LiaSlidersHSolid/>

        </div>
    </form>
  )
}

export default SearchInput
