import React from "react"
import ResumeForm from '../components/resumeForm';
import NavBlock from '../components/nav';
import Layout from "../components/layout"
import SEO from "../components/seo"

const Resume = _ => {
    return (  
        <Layout>
            <SEO title="Contact Us" />
            <NavBlock />
            <ResumeForm />
        </Layout>
      )
}

export default Resume;