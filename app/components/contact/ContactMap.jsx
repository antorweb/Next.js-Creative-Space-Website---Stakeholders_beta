import React from 'react'
import MapComponent from '../common/MapComponent'

const ContactMap = () => {
  return (
    <>


    <section className='bg-[#F9FAFB] py-[100px]'>
        <div className="container">
            <div className='text-center mb-[80px]'>
                <h2 className='text-[48px] font-bold font-main text-[#09231E]'>Visit Our Office</h2>
                <h5 className='text-[18px] font-normal font-main text-[#4A5565]'>Stop by for a consultation or project discussion</h5>
            </div>
            <MapComponent />

        </div>
    </section>


    <section className='bg-[#2E7D32] py-[64px]'>
        <div className="container">
            <div className='text-center'>
                <h3 className='text-[30px] font-bold font-main text-white'>Ready to Start Your Project?</h3>
                <p className='text-[18px] mt-[16px] font-normal font-main text-white' >Let's discuss how we can bring your construction vision to life</p>
            </div>
        </div>
    </section>





      
    </>
  )
}

export default ContactMap
