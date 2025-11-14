import BannerCommon from '../../components/common/BannerCommon';
import ContactDetails from '../../components/contact/ContactDetails';
import ContactMap from '../../components/contact/ContactMap';
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

