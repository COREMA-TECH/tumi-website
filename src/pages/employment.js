import React from "react"
import SingleContentBlockPage from '../components/singleContentBlock';
import NavBlock from '../components/nav';
import Layout from "../components/layout"
import SEO from "../components/seo"

import banner from "../images/employment-banner.jpg";
import contentPic from '../images/employment-content.png';
import { Link } from "gatsby";

const Employment = () => {
  
    const renderContentBlock = _ => {
      return(
        <>
          <p>
            We are dedicated to providing the highest level of guest service and hospitality for our hotel guests, and a commitment to quality in every aspect of our jobs, creating even more opportunities for our employees.
          </p>
          <p>
            We select team members based on their work ethic, ability to work well with others, as well as their consistency and responsibility.
          </p>
          <p>
            We are in the hospitality business., and our ability to provide a warm smile, and friendly greeting and a high degree of dedication to each and every guest is paramount in our ability to work seamlessly with our hotel partners.
          </p>
          <p>
            If you are looking for an opportunity to prove yourself, and your abilities, and you enjoy working with others, come join the Tumi Staffing hospitality team!
          </p>          
        </>
      )
    }

    const renderTitleAreaContent = _ => {
      return(
        <>
          <Link className='border-btn Employment-resume' to='/send-resume'>Submit a Resume</Link>
        </>
      )
    }
  
    return (  
      <Layout>
        <SEO title="Employment" />
        <NavBlock />
        <SingleContentBlockPage
          pageTitle="Employment"
          pageSubtitle="We understand the value of a smiling face and a kind word to the guests."
          banner={banner}
          contentPic={contentPic}
          renderContentBlock={renderContentBlock}
          parentClass='Employment'
          renderTitleAreaContent={renderTitleAreaContent}
        />
      </Layout>
    )
  }
  export default Employment
  