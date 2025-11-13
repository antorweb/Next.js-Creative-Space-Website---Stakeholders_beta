import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const ServicesCommon = () => {
  return (
    <>
    

    <div className='w-full h-[380px]'>

        {/* ---------------- left-side content */}

        <div>
            <div className='w-[52px] h-[52px] rounded-[16px] bg-[#2e7d321f]'></div>

            <h2>Residential Construction</h2>
            <div><h4>We create modern homes that prioritize comfort, safety, and sustainability. From single-family homes to multi-unit developments, our residential projects are built to exceed expectations and stand the test of time.</h4></div>

            <div>
                <ul>
                    <li><IoMdCheckmarkCircleOutline />Custom Home Design</li>
                    <li><IoMdCheckmarkCircleOutline />Luxury Apartments</li>
                    <li><IoMdCheckmarkCircleOutline />Custom Home Design</li>
                    <li><IoMdCheckmarkCircleOutline />Custom Home Design</li>
                </ul>
            </div>
        </div>
        
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default ServicesCommon