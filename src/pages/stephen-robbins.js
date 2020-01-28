import React from "react"
import PostPage from '../components/postPage';
import NavBlock from '../components/nav';
import Layout from "../components/layout"
import SEO from "../components/seo"

import banner from "../images/stephen-robbins-banner.jpg";
import contentPic from '../images/about-stephen-vertical.png';

const StephenStory = _ => {
    const renderLeftBlock = _ => {
        return(
            <>
                <p>
                    Stephen Robbins brings over 25 years of hospitality experience to Tumi Staffing. Having served as Executive Housekeeper with the award winning luxury Wynfrey Hotel at the Galleria in Birmingham, Alabama, as well as the Historic Grove Park Inn in Asheville, North Carolina, Robbins knows firsthand what a difference the right staff can make in quality and service delivery.
                </p>
                <p>
                    As Managing Director of La Posada Hotel in Laredo, Texas, Robbins orchestrated the transformation of a struggling facility into one of the top historic luxury hotels in the country—through development of a comprehensive strategic and tactical plan encompassing all aspects of hotel operations, sales and marketing, budget development and implementation.
                </p>
                <p>
                    In 2008 Robbins and Executive Chef Beto Gutierrez launched the Zaragoza Grill with upscale Modern Latin Cuisine. In 2010, the Zaragoza Grill was named one of the Top 50 Best Mexican Restaurants in Texas by Texas Monthly Magazine.
                </p>
                <p>
                    Stephen Robbins serves as Vice President of Operations for Tumi Staffing, providing Executive Level Management for the company including Strategic and Tactical planning, sales and marketing, and Accounting support for the staffing operations.
                </p>
                <p>
                    You can contact Stephen with your staffing needs by e-mailing him at: <a className='Tumi-inlineLink' href="mailto:stephenr@tumistaffing.com">stephenr@tumistaffing.com</a> or via telephone, at <a className='Tumi-inlineLink' href="tel:512.772.4080">512.772.4080</a>.
                </p>
            </>
        )
    }

    return (  
        <Layout>
            <SEO title="Stephen Robbins" />
            <NavBlock />
            <PostPage
                pageTitle="Stephen Robbinbs"
                pageSubtitle="President"
                banner={banner}
                contentPic={contentPic}
                renderLeftBlock={renderLeftBlock}
            />
        </Layout>
    )
}

export default StephenStory;