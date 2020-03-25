import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Index = () => {
  return (
    <Layout>
      <SEO title="Open-Source Cookbook" />
      {/* <section className="home">
        <h1>From OSC Home</h1>
        <div>
          <Link to="/recipes/">Go To Recipes</Link>
        </div>
      </section> */}
    </Layout>
  )
}

export default Index
