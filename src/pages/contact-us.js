import React from "react"
import Contact from '../components/contactForm';
import NavBlock from '../components/nav';
import Layout from "../components/layout"
import SEO from "../components/seo"

const Connections = _ => {
    return (  
        <Layout>
            <SEO title="Contact Us" />
            <NavBlock />
            <Contact />
        </Layout>
      )
}

export default Connections;