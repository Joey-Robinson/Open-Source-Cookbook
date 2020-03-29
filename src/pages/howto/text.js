import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HowtoText from "../../components/howto/howto.text"

const Text = () => (
  <Layout>
    <SEO title="How-To - Text" />
    <section className="text">
      <HowtoText />
    </section>
  </Layout>
)

export default Text
