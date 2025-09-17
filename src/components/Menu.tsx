import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { menuItems } from '@/utils/constants/constants'


const Menu = () => {
  return (
    <div className='mt-4 text-sm'>
        {menuItems.map((item) => {

            return (
                <div key={item.title} className='flex flex-col gap-2'>
                    <span className='hidden lg:block text-gray-400 font-light my-4'>{item.title}</span>
                    {item.items.map(subItem => (
                        <Link key={subItem.lable} href={subItem.href} className='flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2'>
                            <Image src={`/${subItem.icon}`} alt={subItem.lable} width={20} height={20}></Image>
                            <span className='hidden lg:block'>{subItem.lable}</span>
                        </Link>
                    ))}
                </div>
            )
        })}
    </div>
  )
}

export default Menu
