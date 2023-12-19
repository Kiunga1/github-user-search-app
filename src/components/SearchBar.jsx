import React from 'react'
import searchIcon from '../assets/images/icon-search.svg'


const SearchBar = () => {
  return (
    <div className='bg-white flex justify-between items-center px-3 py-2 shadow rounded-md'>
      <div className='flex gap-2'>
        <img src={searchIcon} alt="Search icon" className='w-6 h-6' />
        <input className='border-0 outline-none placeholder:text-gray-200 placeholder:text-xs' type="text" placeholder='Search Github username....' />
      </div>
      <div>
        <span></span>
        <button className='px-4 py-3 flex justify-center items-center text-white bg-primaryBlue rounded-md hover:bg-[#60ABFF] text-sm'>Submit</button>
      </div>
    </div>
  )
}

export default SearchBar
