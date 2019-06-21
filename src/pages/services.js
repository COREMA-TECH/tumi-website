import React from "react"
import PostPage from '../components/postPage';
import NavBlock from '../components/nav';
import Layout from "../components/layout"
import SEO from "../components/seo"

import banner from "../images/hotel-sign-t.jpg";
import service from '../images/service-chef.jpg';

const Services = () => {
  
  const renderLeftBlock = _ => {
    return(
      <>
        <p>
          Tumi Staffing is one of the nation′s premier hospitality staffing providers. 
          Formed by hospitality professionals, we are dedicated to helping your hotel achieve greater customer satisfaction, increased QA scores, boost efficiencies and reduce costs. 
          With our background in the hospitality industry and our dedication to quality, we are uniquely positioned to help your hotel achieve greater bottom line profits while increasing guest satisfaction.
        </p>
        <p>
          Staffing for hotels has very unique requirements including the need for service oriented people, as well as technical skills and a work ethic that makes our employees successful in the hotel environment. 
          In our interview process, we screen for these characteristics that lead to long term success in the hospitality industry.
        </p>
        <p>
          Our commitment doesn′t stop at the end of your work day. We are working behind the scenes, scheduling employees, processing time and attendance data, and working with your management 
          team 24 hours a day to ensure that our employees merge with your operations in a seamless partnership. Tumi Staffing provides you with a dedicated Service Manager who is on call 24 hours a day. 
          This dedication provides you with peace of mind, by knowing that with a single phone call, we are able to assist you in mobilizing workforce changes to meet the changing needs of your hotel.
        </p>
      </>
    )
  }

  return (  
    <Layout>
      <SEO title="Services" />
      <NavBlock />
      <PostPage
        pageTitle="Services"
        pageSubtitle="Staffing for hotels has very unique requirements including the need for service oriented people."
        leftText=""
        banner={banner}
        contentPic={service}
        renderLeftBlock={renderLeftBlock}
      />
    </Layout>
  )
}
export default Services
