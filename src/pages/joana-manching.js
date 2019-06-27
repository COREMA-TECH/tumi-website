import React from "react"
import PostPage from '../components/postPage';
import NavBlock from '../components/nav';
import Layout from "../components/layout"
import SEO from "../components/seo"

import banner from "../images/joana-bg.jpg";
import contentPic from '../images/joana-marie-vertical.jpg';

const JoanaStory = _ => {
    const renderLeftBlock = _ => {
        return(
            <>
                <p>Joana Marie Manching joined Tumi Staffing in 2012 as administrative assistant, and quickly grew into taking on more responsibilities.</p>
                <p>She now is responsible for coordination of our Strategic Sales Efforts, as well as External Surveys, and Daily Reporting for our full-service resort properties.</p>
            </>
        )
    }

    return (  
        <Layout>
            <SEO title="Joana Marie Manching" />
            <NavBlock />
            <PostPage
                pageTitle="Joana Marie Manching"
                pageSubtitle="Sales &amp; Data Management"
                banner={banner}
                contentPic={contentPic}
                renderLeftBlock={renderLeftBlock}
            />
        </Layout>
    )
}

export default JoanaStory;