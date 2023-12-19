import React from 'react'
import moon from '../assets/images/icon-moon.svg'

const Header = () => {
  return (
    <div className='w-full flex justify-between items-center'>
      <h1 className='text-[#222731] font-bold font-spaceMono text-2xl'>devfinder</h1>
      <div className='flex items-center justify-center gap-2'>
        <h4 className='font-spaceMono text-gray-100 text-xs'>DARK</h4>
        <span>
            <img className='w-5 h-5' src={moon} alt="moon icon"/>
        </span>
      </div>
    </div>
  )
}

export default Header
