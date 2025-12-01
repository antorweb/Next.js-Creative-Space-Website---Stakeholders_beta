import React from 'react'

const CommonHead = ({commonH2,commonP}) => {
  return (
    <div>

        <h2 className='text-[48px] font-main text-[#09231E]'>{commonH2}</h2>
        <h4 className='text-[18px] mt-[12px] font-main text-[#4A5565]'>{commonP}</h4>
    </div>
  )
}

export default CommonHead