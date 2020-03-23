import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Index = () => {
  return (
    <Layout>
      <SEO title="Open-Source Cookbook" />
      <section>
        <h1>From OSC Home</h1>
        <Link to="/recipes/">Go To Recipes</Link>
      </section>
    </Layout>
  )
}

export default Index
