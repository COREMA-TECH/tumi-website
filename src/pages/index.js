import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import NavBlock from '../components/nav';
import MainContent from '../components/mainContent';

const IndexPage = () => (
  <Layout>
    <SEO title="Tumi Staffing" />
    <NavBlock />
    <MainContent />
  </Layout>
)

export default IndexPage
