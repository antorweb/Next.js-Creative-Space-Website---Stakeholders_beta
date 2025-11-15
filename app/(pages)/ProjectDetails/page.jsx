import ProjectDescrip from '@/app/components/ProjectDetails/ProjectDescrip'
import ProjectGallery from '@/app/components/ProjectDetails/ProjectGallery'
import React from 'react'

const page = () => {
  return (
    <>

    <section id='ProjectDetails'>
        <div className="container">

            <div>

                <ProjectDescrip />


            </div>
        </div>
    </section>
    


    
    <div className='my-[120px]'>

                <ProjectGallery />
    
    </div>
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default page