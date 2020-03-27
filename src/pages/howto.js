import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Howto = () => (
  <Layout>
    <SEO title="How-To" />
    <seciton className="howto">
      <h2>Here we have 2 options!</h2>
      <div className="howto--main">
        <p>
          We can either go to the <Link to="/howto/text/">HowTo - Text</Link>{" "}
          guide and read along with the text.
        </p>

        <p>
          Or, we can go to the <Link to="/howto/images/">HowTo - Images</Link>{" "}
          guide and follow the images.
        </p>
      </div>
    </seciton>
  </Layout>
)

export default Howto
