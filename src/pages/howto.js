import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Howto = () => (
  <Layout>
    <SEO title="How-To" />
    <seciton className="howto">
      <div className="howto--main">
        <p>
          You can view the text guide by{" "}
          <Link to="/howto/text/">Clicking Here.</Link>
          While the text guide is much longer than the image guide, it does a
          better job of going through the steps of what to do and how to
          contribute.
        </p>
        <p>
          Or you can view the image guide by{" "}
          <Link to="/howto/images/">Clicking Here instead.</Link>
          The image guide provides the information needed, but in a more more
          concise manner comapred to the text guide.
        </p>
      </div>
    </seciton>
  </Layout>
)

export default Howto
