import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import NavBlock from '../components/nav';
import MainContent from '../components/mainContent';
import Helmet from 'react-helmet';

const IndexPage = () => (
  <Layout>
    <Helmet 
      bodyAttributes={{
        class: 'home page-template-default page page-id-2'
      }}
    />

    <SEO title="Tumi Staffing" />
    <NavBlock />
    <MainContent />
  </Layout>
)

export default IndexPage
