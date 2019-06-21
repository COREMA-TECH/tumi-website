import React from "react"
import PostPage from '../components/postPage';
import NavBlock from '../components/nav';
import Layout from "../components/layout"
import SEO from "../components/seo"

import banner from "../images/compliance-banner.jpg";
import contentPic from '../images/compliance-contentPic.jpg';

const Compliance = () => {
  
    const renderLeftBlock = _ => {
      return(
        <>
          <p>
            There are many federal and state laws as well that guide an employer to adopt appropriate hiring and employment practices. These apply equally to both the hotel as a direct employer of personnel as well as staffing companies who may provide workers for you.
          </p>
          <p>
            Tumi Staffing requires compliance with all state and federal regulations. Not everyone in this industry does. We ensure there are no trailing liability issues by ensuring compliance on I-9 employment verification, payment of payroll taxes, wage and hour rules and regulations, providing workers compensation insurance, as well as liability insurance.
          </p>
          <p>
            With Tumi Staffing you have a staffing partner who believes in compliance and eliminating any possible liabilities for our hotel partners.
          </p>
        </>
      )
    }
  
    return (  
      <Layout>
        <SEO title="Compliance" />
        <NavBlock />
        <PostPage
          pageTitle="Compliance"
          pageSubtitle="We hire associates as employees not independent contractors, ensuring compliance with all state and federal laws."
          banner={banner}
          contentPic={contentPic}
          renderLeftBlock={renderLeftBlock}
        />
      </Layout>
    )
  }
  export default Compliance
  