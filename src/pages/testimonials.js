import React from "react"
import Testimonials from '../components/testimonials';
import NavBlock from '../components/nav';
import Layout from "../components/layout"
import SEO from "../components/seo"

const TestimonialQuotes = _ => {
    return (  
        <Layout>
            <SEO title="Employment" />
            <NavBlock />
            <Testimonials />       
        </Layout>
      )
}

export default TestimonialQuotes;