import Image from 'next/image';
import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const ServicesCommon = ({serH2,serP,serImg,serIcon ,flexdirection }) => {
  return (
    <>
    

    <div className={`w-full h-[380px] flex justify-center gap-[48px] items-center ${flexdirection}`}>

        {/* ---------------- left-side content */}

        <div>
            <div className='w-[52px] h-[52px] rounded-[16px] flex justify-center items-center bg-[#2e7d321f]'><Image src={serIcon} alt='SerIcon' width={32} height={32} /></div>

            <h2 className='text-[32px] mt-[32px] mb-[16px] font-semibold font-main text-[#09231E]'>{serH2}</h2>
            <div className='w-[636px]'><h4 className='text-[16px] font-normal font-main text-[#4A5565]'>{serP}</h4></div>

            <div className='mt-[24px]'>
                <ul className='flex flex-col gap-[12px]'>
                    <li className='text-[16px] font-normal font-main text-[#4A5565] flex items-center gap-[12px]'><IoMdCheckmarkCircleOutline className='text-[20px] text-[#2E7D32]' /></li>
                    <li className='text-[16px] font-normal font-main text-[#4A5565] flex items-center gap-[12px]'><IoMdCheckmarkCircleOutline className='text-[20px] text-[#2E7D32]' /></li>
                    <li className='text-[16px] font-normal font-main text-[#4A5565] flex items-center gap-[12px]'><IoMdCheckmarkCircleOutline className='text-[20px] text-[#2E7D32]' /></li>
                    <li className='text-[16px] font-normal font-main text-[#4A5565] flex items-center gap-[12px]'><IoMdCheckmarkCircleOutline className='text-[20px] text-[#2E7D32]' /></li>
                </ul>
            </div>
        </div>


        {/* ----------------- right-side Immge */}

        <Image src={serImg} width={636} height={380} alt='img' />
        
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default ServicesCommon