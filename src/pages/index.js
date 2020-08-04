import React from "react"


// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from '../components/about'
import Banner from '../components/banner'
import Projects from '../components/projects/projects'
import Contact from '../components/contact'


const IndexPage = () => {
  

  return (
  <Layout>
    <SEO title="Home" />
    <Banner/>
    <About />
    <Projects/>
    <Contact/>
  </Layout>
)
}

export default IndexPage
