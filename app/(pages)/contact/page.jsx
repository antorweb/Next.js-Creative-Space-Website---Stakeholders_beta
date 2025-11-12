import React from 'react'

import { LuSend } from "react-icons/lu";


const page = () => {
  return (
    <>


    <section id='contact' >
        <div className="container">
            <div>

            {/* -------------- left-side Contact details */}

            <div className='w-[648px] py-[48px] px-[32px] mt-[127px] shadow rounded-[16px]'>

                <h2 className='text-[48px] font-semibold font-main text-[#212121]'>Send Us a Message</h2>

                <div className='mt-[48px]'>


                <div>
                    <label className='text-[16px] font-medium font-main text-[#09231E]' htmlFor="nameInput">Full Name</label>
                    <input id='nameInput' className='w-[584px] border-2 border-[#D1D5DC] text-[14px] font-normal font-main text-[#09231E] py-[16px] pl-[16px] mt-[8px] rounded-[16px] bg-[#F3F3F5]' type="text" placeholder='John Doe' />

                </div>

                
                <div className='my-[24px]'>
                    <label className='text-[16px] font-medium font-main text-[#09231E]' htmlFor="emailInput">Email Address</label>
                    <input id='emailInput' className='w-[584px] border-2 border-[#D1D5DC] text-[14px] font-normal font-main text-[#09231E] py-[16px] pl-[16px] mt-[8px] rounded-[16px] bg-[#F3F3F5]' type="text" placeholder='john@example.com' />

                </div>

                
                <div>
                    <label className='text-[16px] font-medium font-main text-[#09231E]' htmlFor="phoneInput">Phone Number</label>
                    <input id='phoneInput' className='w-[584px] border-2 border-[#D1D5DC] text-[14px] font-normal font-main text-[#09231E] py-[16px] pl-[16px] mt-[8px] rounded-[16px] bg-[#F3F3F5]' type="text" placeholder='+880 1711-123456' />

                </div>

                
                <div className='my-[24px]'>
                    <label className='text-[16px] font-medium font-main text-[#09231E]' htmlFor="textInput">Project Details</label>

                    <textarea className=' h-[124px] mt-[8px] text-[14px] font-normal font-main text-[#4A5565] pt-[16px] px-[16px] w-[684px] bg-[#F3F3F5]  rounded-[16px]' name="" id="textInput" placeholder='Tell us about your project...'></textarea>

                </div>

                <button className='w-[584px] bg-[#2E7D32] rounded-2xl text-[14px] font-medium font-main flex justify-center py-[16px] items-center gap-[10px]  text-white'>Send Message <LuSend className='text-[16px] text-white' /></button>
                </div>

            </div>


            {/* ------------ right-side details */}
            <div>
                {/* -------- heading */}
                <div>

                    <h3>Get in Touch</h3>
                    <div><h4>Have questions about our services or want to discuss a project? We're here to help. Contact us through any of the methods below and our team will respond as soon as possible.</h4></div>

                </div>


                <div className='w-[536px] shadow rounded-[16px]'>

                </div>



            </div>

            </div>
        </div>
    </section>
      
    </>
  )
}

export default page

