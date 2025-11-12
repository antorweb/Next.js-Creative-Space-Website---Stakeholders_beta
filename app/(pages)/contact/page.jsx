import React from 'react'

import { LuSend } from "react-icons/lu";


const page = () => {
  return (
    <>


    <section id='contact' >
        <div className="conatainer">
            <div>

            {/* -------------- left-side Contact details */}

            <div className='w-[648px] shadow rounded-[16px]'>

                <h2 className='text-[48px] font-semibold font-main text-[#212121]'>Send Us a Message</h2>

                <div>
                    <label className='text-[16px] font-medium font-main text-[#09231E]' htmlFor="nameInput">Full Name</label>
                    <input id='nameInput' className='w-[584px] border-2 border-[#D1D5DC] text-[14px] font-normal font-main text-[#09231E] py-[16px] pl-[16px] mt-[8px] rounded-[16px] bg-[#F3F3F5]' type="text" placeholder='John Doe' />

                </div>

                
                <div>
                    <label className='text-[16px] font-medium font-main text-[#09231E]' htmlFor="emailInput">Email Address</label>
                    <input id='emailInput' className='w-[584px] border-2 border-[#D1D5DC] text-[14px] font-normal font-main text-[#09231E] py-[16px] pl-[16px] mt-[8px] rounded-[16px] bg-[#F3F3F5]' type="text" placeholder='john@example.com' />

                </div>

                
                <div>
                    <label className='text-[16px] font-medium font-main text-[#09231E]' htmlFor="phoneInput">Phone Number</label>
                    <input id='phoneInput' className='w-[584px] border-2 border-[#D1D5DC] text-[14px] font-normal font-main text-[#09231E] py-[16px] pl-[16px] mt-[8px] rounded-[16px] bg-[#F3F3F5]' type="text" placeholder='+880 1711-123456' />

                </div>

                
                <div>
                    <label className='text-[16px] font-medium font-main text-[#09231E]' htmlFor="textInput">Project Details</label>

                    <textarea className='h-[124px] text-[14px] font-normal font-main text-[#4A5565] pt-[16px] px-[16px] w-[684px] bg-[#F3F3F5]  rounded-[16px]' name="" id="textInput" placeholder='Tell us about your project...'></textarea>

                </div>

                <button className='w-[584px] bg-[#2E7D32] text-[14px] font-medium font-main flex justify-center items-center gap-[10px]  text-white'>Send Message <LuSend className='text-[16px] text-white' /></button>

            </div>

            </div>
        </div>
    </section>
      
    </>
  )
}

export default page

