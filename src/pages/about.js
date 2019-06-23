import React from "react"
import About from '../components/about';
import NavBlock from '../components/nav';
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutUs = _ => {
    return (  
        <Layout>
            <SEO title="Employment" />
            <NavBlock />
            <About />
        </Layout>
      )
}

export default AboutUs;