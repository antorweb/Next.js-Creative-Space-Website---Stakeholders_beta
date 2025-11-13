import Image from 'next/image';
import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import serviceImg from '../../../public/iamges/servicesImg.png'
import SerIcon from '../../../public/iamges/SerIcon.png'


const ServicesCommon = () => {
  return (
    <>
    

    <div className='w-full h-[380px] flex items-center'>

        {/* ---------------- left-side content */}

        <div>
            <div className='w-[52px] h-[52px] rounded-[16px] flex justify-center items-center bg-[#2e7d321f]'><Image src={SerIcon} alt='SerIcon' width={32} height={32} /></div>

            <h2 className='text-[32px] mt-[32px] mb-[16px] font-semibold font-main text-[#09231E]'>Residential Construction</h2>
            <div className='w-[636px]'><h4 className='text-[16px] font-normal font-main text-[#4A5565]'>We create modern homes that prioritize comfort, safety, and sustainability. From single-family homes to multi-unit developments, our residential projects are built to exceed expectations and stand the test of time.</h4></div>

            <div>
                <ul className='flex flex-col gap-[12px]'>
                    <li className='text-[16px] font-normal font-main text-[#4A5565] flex items-center gap-[12px]'><IoMdCheckmarkCircleOutline className='text-[20px] text-[#2E7D32]' />Custom Home Design</li>
                    <li className='text-[16px] font-normal font-main text-[#4A5565] flex items-center gap-[12px]'><IoMdCheckmarkCircleOutline className='text-[20px] text-[#2E7D32]' />Luxury Apartments</li>
                    <li className='text-[16px] font-normal font-main text-[#4A5565] flex items-center gap-[12px]'><IoMdCheckmarkCircleOutline className='text-[20px] text-[#2E7D32]' />Housing Complexes</li>
                    <li className='text-[16px] font-normal font-main text-[#4A5565] flex items-center gap-[12px]'><IoMdCheckmarkCircleOutline className='text-[20px] text-[#2E7D32]' />Green Building Solutions</li>
                </ul>
            </div>
        </div>


        {/* ----------------- right-side Immge */}

        <Image src={serviceImg} width={636} height={380} alt='img' />
        
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default ServicesCommon