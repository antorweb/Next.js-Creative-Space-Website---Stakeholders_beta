import Image from 'next/image';
import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import serviceImg from '../../../public/iamges/servicesImg.png'
import SerIcon from '../../../public/iamges/SerIcon.png'


const ServicesCommon = () => {
  return (
    <>
    

    <div className='w-full h-[380px]'>

        {/* ---------------- left-side content */}

        <div>
            <div className='w-[52px] h-[52px] rounded-[16px] flex justify-center items-center bg-[#2e7d321f]'><Image src={SerIcon} alt='SerIcon' width={32} height={32} /></div>

            <h2>Residential Construction</h2>
            <div><h4>We create modern homes that prioritize comfort, safety, and sustainability. From single-family homes to multi-unit developments, our residential projects are built to exceed expectations and stand the test of time.</h4></div>

            <div>
                <ul>
                    <li><IoMdCheckmarkCircleOutline />Custom Home Design</li>
                    <li><IoMdCheckmarkCircleOutline />Luxury Apartments</li>
                    <li><IoMdCheckmarkCircleOutline />Housing Complexes</li>
                    <li><IoMdCheckmarkCircleOutline />Green Building Solutions</li>
                </ul>
            </div>
        </div>


        {/* ----------------- right-side Immge */}

        <Image src={''} width={636} height={380} alt='img' />
        
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default ServicesCommon