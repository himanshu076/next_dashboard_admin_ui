import { IMAGES } from '@/utils/constants/constants'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* SEARCH BAR */}
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
        <Image src={IMAGES.icons.search} width={14} height={14} alt="search" />
        <input type="text" placeholder="Search..." className='w-[200px] p-2 bg-transparent outline-none'/>
      </div>
      {/* ICONS & USER */}
      <div className='flex items-center gap-6 justify-end w-full'>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <Image src={IMAGES.icons.message} width={14} height={14} alt="message" />
        </div>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
          <Image src={IMAGES.icons.announcement} width={20} height={20} alt="message" />
          <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs'>
            1
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='text-xs leading-3'>John Doe</span>
          <span className='text-[10px] text-gray-500 text-right'>Admin</span>
        </div>
        <Image src={IMAGES.icons.avatar} width={32} height={32} alt="avatar" className='rounded-full'/>
      </div>
    </div>
  )
}

export default Navbar
