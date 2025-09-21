import { IMAGES } from '@/utils/constants/constants'
import Image from 'next/image'
import React from 'react'

const FinanceCharts = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        {/* TITLE */}
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Finance</h1>
            <Image src={IMAGES.icons.moreDark} width={20} height={20} alt="more" />
        </div>
    </div>
  )
}

export default FinanceCharts