import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center mt-[500px]'>

    


    <Link href='/about' className='w-[100px] text-center  bg-green-100 text-[20px] font-bold text-black' >About</Link>
      
    </div>
  )
}

export default page
