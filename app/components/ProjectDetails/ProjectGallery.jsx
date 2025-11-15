import Image from 'next/image'
import React from 'react'

import projectGallery from '../../../public/iamges/projectGallry.png'
import Link from 'next/link'

const ProjectGallery = () => {
  return (
    <>




    <div className='text-center py-[100px] bg-[#F9FAFB]'>
        {/* ------------- heading */}
        <div>

            <h2 className='text-[48px] font-bold font-main text-main'>Project Gallery</h2>
            <h5 className='text-[18px] font-normal font-main text-[#4A5565] mt-[12px]'>Explore the visual journey of this remarkable project</h5>

        </div>


        <div className='flex flex-wrap justify-center  mt-[80px] mb-[48px]  gap-[24px]'>
            <Image src={projectGallery} alt='projectGallery' width={648} height={320} />
            <Image src={projectGallery} alt='projectGallery' width={648} height={320} />
            <Image src={projectGallery} alt='projectGallery' width={648} height={320} />
            <Image src={projectGallery} alt='projectGallery' width={648} height={320} />


        </div>
        <div className=''>

              <Link href={'/'} className=" bg-[#2E7D32] hover:bg-transparent hover:border hover:text-[#2E7D32] border-[#2E7D32] duration-300 text-[14px] font-medium font-main text-white py-[14px] px-[20px] rounded-full">
               Load More  </Link>
        </div>




    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default ProjectGallery