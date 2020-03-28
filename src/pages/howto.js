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
          <Link to="/howto/text/">Clicking Here</Link>
        </p>
        <p>
          Or you can view the image guide by{" "}
          <Link to="/howto/images/">Clicking Here instead.</Link>
        </p>
        <p>You can also scroll down for both!</p>
      </div>
    </seciton>
  </Layout>
)

export default Howto
