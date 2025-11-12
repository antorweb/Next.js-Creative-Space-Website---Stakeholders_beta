import BannerCommon from '@/app/components/common/BannerCommon';
import ContactDetails from '@/app/components/ContactDetails';
import ContactMap from '@/app/components/ContactMap';
import Link from 'next/link';
import React from 'react'



const page = () => {
  return (
    <>


<BannerCommon bannerH2={"Let's Build Together"} bannerP={'Reach out to our team for project inquiries, consultations, or partnership discussions'} />

<ContactDetails/>
<ContactMap />





      
    </>
  )
}

export default page

