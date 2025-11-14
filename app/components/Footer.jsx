import React from 'react'
import fooImg from '../../public/iamges/main-logo.png'
import Image from 'next/image'
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { BiLogoInstagram } from "react-icons/bi";
import { LuMapPin } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa6";

import Link from 'next/link';


const Footer = () => {
  return (
    <>
    
    
    <footer className='bg-[#09231E] py-[80px]'>
        <div className="container">

            <div className='flex justify-center gap-[32px]'>


            <div className='foo-sec-1'>

                <Image src={fooImg} alt='footer-img' width={117} />
                <h5 className='text-[16px] mt-[16px] mb-[32px] font-normal font-main text-[#979797]'>Building with precision and <br /> sustainability for over 15 years.</h5>

                <div className='flex items-center mb-[16px] gap-[16px]'>
                    <Link href={'/'} ><FiFacebook className='text-[20px] text-[#979797]'  /></Link>
                    <Link href={'/'} ><FiLinkedin className='text-[20px] text-[#979797]'  /></Link>
                    <Link href={'/'} ><BiLogoInstagram  className='text-[20px] text-[#979797]' /></Link>
                </div>
                <h5 className='text-[16px] font-normal font-main text-[#979797]'>Concern of Creative Business Group</h5>

            </div>


            <div className='foo-sec-2'>
                <h3 className='text-[16px] font-semibold font-main text-white'>Quick Links</h3>
                <ul className='mt-[16px] flex flex-col gap-[8px]'>
                    <li className='text-[16px] font-normal font-main text-[#979797]'><Link href={'/'} >About Us</Link></li>
                    <li className='text-[16px] font-normal font-main text-[#979797]'><Link href={'/'} >Services</Link></li>
                    <li className='text-[16px] font-normal font-main text-[#979797]'><Link href={'/'} >Projects</Link></li>
                    <li className='text-[16px] font-normal font-main text-[#979797]'><Link href={'/'} >Contact</Link></li>
                </ul>

            </div>

                  <div className='foo-sec-3'>
                <h3 className='text-[16px] font-semibold font-main text-white'>   Services </h3>
                <ul className='mt-[16px] flex flex-col gap-[8px]'>
                    <li><Link href={'/'}  className='text-[16px] font-normal font-main text-[#979797]'>Residential Construction</Link></li>
                    <li><Link href={'/'} className='text-[16px] font-normal font-main text-[#979797]' >Commercial Projects</Link></li>
                    <li><Link href={'/'} className='text-[16px] font-normal font-main text-[#979797]' >Industrial Development</Link></li>
                    <li><Link href={'/'} className='text-[16px] font-normal font-main text-[#979797]' >Renovation & Remodeling</Link></li>
                    <li><Link href={'/'} className='text-[16px] font-normal font-main text-[#979797]' >Design & Build</Link></li>
                </ul>

            </div>

                  <div className='w-[306px] foo-sec-4'>
                <h3 className='text-[16px] font-semibold font-main text-white'>Contact Info</h3>
                <ul className='mt-[16px] flex flex-col gap-[12px]'>
                    <li className=''><Link href={'/'}  className='text-[16px] flex  gap-[8px]  font-normal font-main text-[#979797]'><LuMapPin className='text-[#2E7D32]' /> 123 Construction Ave, <br /> Dhaka, Bangladesh</Link></li>
                    <li className=''><Link href={'/'} className='text-[16px]  flex items-center gap-[8px] font-normal font-main text-[#979797]' ><FiPhone className='text-[#2E7D32]' /> +880 1234-567890</Link></li>
                    <li className=''><Link href={'/'} className='text-[16px]  flex items-center gap-[8px] font-normal font-main text-[#979797]' ><FiMail className='text-[#2E7D32]' /> info@buildtech.com</Link></li>
                    <li className=''><Link href={'/'} className='text-[16px]  flex items-center gap-[8px] font-normal font-main text-[#979797]' ><FaRegClock className='text-[#2E7D32]' /> Mon-Sat, 9:00 AM – 6:00 PM</Link></li>
                </ul>

            </div>

            </div>


        </div>
    </footer>
    
    
    
    
    
    
    </>
  )
}

export default Footer