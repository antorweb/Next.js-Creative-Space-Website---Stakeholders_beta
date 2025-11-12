import React from 'react'

const ProjectCommon = ({projectH2,projectP}) => {
  return (
    <>

     <div className='pt-[292px] px-[24px] pb-[24px]'>

                    <h3 className='text-[24px] font-semibold font-main text-white'>{projectH2}</h3>
                    <p className='text-[16px] font-normal font-main text-[#D1D5DC] mt-[8px]'>{projectP}</p>
                    </div>
      
    </>
  )
}

export default ProjectCommon
