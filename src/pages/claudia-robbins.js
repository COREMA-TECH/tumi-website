import React from "react"
import PostPage from '../components/postPage';
import NavBlock from '../components/nav';
import Layout from "../components/layout"
import SEO from "../components/seo"

import banner from "../images/claudia-robbins-banner.jpg";
import contentPic from '../images/about-claudia-vertical.png';

const ClaudiaStory = _ => {
    const renderLeftBlock = _ => {
        return(
            <>
                <p>
                    Claudia Robbins established Tumi Staffing in 2005 to provide a high level of professionalism to Hospitality Staffing, by providing contract workers who have the same commitment to service and work ethic as the hotel’s direct hire employees.
                </p>
                <p>
                    Claudia is extremely hands-on in the selection of employees, preferring to interview each one personally before a hiring decision is made. She has developed strict selection criteria stressing honesty, work ethic and dependability in each employee, ensuring that Tumi Staffing continues to provide the highest quality workers.
                </p>
                <p>
                    Claudia Robbins is a native of Lima, Peru. She graduated from the Facultad de Medicina at Universidad Autonomia de Nuevo Leon in Monterrey Mexico, (UANL) with her doctorate of medicine. In 2001 she was selected to present at the National Congress of Biomedical Investigation as well as the Mexican Society of Nephrology.
                </p>
                <p>
                    You can contact Claudia with your staffing needs by e-mailing her at: <a className='Tumi-inlineLink' href="mailto:claudiar@tumistaffing.com">claudiar@tumistaffing.com</a> or via telephone, at <a className='Tumi-inlineLink' href="tel:512.772.4080">512.772.4080</a>.
                </p>
            </>
        )
    }

    return (  
        <Layout>
            <SEO title="Claudia Robbins" />
            <NavBlock />
            <PostPage
                pageTitle="Claudia Robbinbs"
                pageSubtitle="President"
                banner={banner}
                contentPic={contentPic}
                renderLeftBlock={renderLeftBlock}
            />
        </Layout>
    )
}

export default ClaudiaStory;