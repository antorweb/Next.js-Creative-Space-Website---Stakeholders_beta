import React from 'react'

import { LuClipboardCheck } from "react-icons/lu";


const ServicesProcessCommon = ({proNum,proH2,proP}) => {
  return (
    <div  className='w-[312px]  bg-white shadow rounded-[16px] text-center'>


<div className='p-[32px] text-center'>


        <h3 className='text-[60px] font-bold font-main text-[#2e7d3232]'>{proNum}</h3>

        <div className='text-center my-[48px]'>
        <LuClipboardCheck className='text-[48px] text-[#2E7D32]' />

        </div>


        <h3 className='text-[20px] font-semibold font-main text-[#09231E]'>{proH2}</h3>
        <div className='w-[225px] text-center mt-[16px]'><p className='text-[16px] font-normal font-main text-[#4A5565]'>{proP}</p></div>
</div>

    </div>
  )
}

export default ServicesProcessCommon