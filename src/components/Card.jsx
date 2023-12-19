import React from 'react';
import Bitmap from '../assets/images/bitmap.PNG'

const Card = () => {
  return (
    <div className='flex flex-col w-full p-6 bg-white shadow rounded gap-5'>
      <div className='flex gap-5'>
        <span className='w-[20%]'>
          <img className='rounded-full w-30 h-30' src={Bitmap} alt="Bitmap Image" />
        </span>
        <div className='w-[80%] flex flex-col gap-1 lg:flex-row lg:justify-between items-start'>
          <div className='flex flex-col gap-1'>
            <h1 className='text-primaryBlack font-bold '>The Octocat </h1>
            <h3 className='text-primaryBlue'>@octocat</h3>
          </div>
          <h4 className='text-gray-100 text-sm'>Joined 25 Jan 2011</h4>
        </div>

      </div>
      
    </div>
  )
}

export default Card
