import Image from 'next/image'
import React from 'react'

const AboutCommon = () => {
  return (
    <>


    <div className='w-[312px] h-[252px] rounded-[16px] bg-white shadow'>
        <div className='p-[32px]'>

          <div className="w-[48px] h-[48px] bg-[#2e7d322c] flex justify-center items-center rounded-[12px]"> <Image src={''} alt="visImg" width={30} /> </div>

          <h3 className='text-[20px] font-semibold font-main text-[#09231E] mt-[48px] mb-[16px]'>Sustainability</h3>
          <div className='w-[248px] '>
          <h4 className='text-[16px] font-normal font-main text-[#4A5565]'>Eco-friendly practices for a better tomorrow</h4>

          </div>

        </div>
    </div>
      
    </>
  )
}

export default AboutCommon
