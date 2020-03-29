import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HowtoImage from "../../components/howto/howto.image"

const Images = () => (
  <Layout>
    <SEO title="How-to - Images" />
    <section className="images">
      <HowtoImage />
    </section>
  </Layout>
)

export default Images
