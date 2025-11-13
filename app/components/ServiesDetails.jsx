import React from 'react'
import ServicesCommon from './common/ServicesCommon'

import serviceImg from '../../public/iamges/servicesImg.png'
import SerIcon from '../../public/iamges/SerIcon.png'



const ServiesDetails = () => {
  return (
    <>
    
    <section id='services' className='py-[120px]'>
        <div className="container">


            <div className='flex flex-col gap-[120px]'>

            <ServicesCommon serH2={'Residential Construction'} serP={'We create modern homes that prioritize comfort, safety, and sustainability. From single-family homes to multi-unit developments, our residential projects are built to exceed expectations and stand the test of time.'} serIcon={SerIcon} serImg={serviceImg}  />
            <ServicesCommon flexdirection={'flex-row-reverse'}  serH2={'Commercial Projects'} serP={'Business spaces designed for efficiency and long-term value. We understand that commercial buildings need to balance functionality, aesthetics, and cost-effectiveness to support your business goals.'} serIcon={SerIcon} serImg={serviceImg} />
            <ServicesCommon  serH2={'Industrial Development'} serP={'Heavy-duty, performance-driven structures for industry leaders. Our industrial projects are engineered to handle demanding operations while maintaining safety and environmental standards.  '} serIcon={SerIcon} serImg={serviceImg} />
            <ServicesCommon flexdirection={'flex-row-reverse'}  serH2={'Renovation & Remodeling'} serP={'Transforming existing spaces with new life and function. Whether updating outdated structures or reimagining spaces for new purposes, we bring fresh vision to every renovation project.'} serIcon={SerIcon} serImg={serviceImg} />
            <ServicesCommon  serH2={'Design & Build'} serP={'One-stop solution for planning, engineering, and construction. Our integrated approach streamlines the process, reduces costs, and ensures seamless coordination from concept to completion.'} serIcon={SerIcon} serImg={serviceImg} />

            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    </>
  )
}

export default ServiesDetails