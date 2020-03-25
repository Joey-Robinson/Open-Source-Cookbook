import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <section className="about">
      <h2 style={{ textAlign: "center", fontSize: "3rem" }}>
        What is all of this?
      </h2>
      <div className="about--this">
        <h3>That's easy!</h3>
        <p>
          This is simply a site built with Gatsby that will allow and encourage
          users of all backgrounds to not only participate in Open-Source, but
          share their recipe ideas and learn more about an awesome library.
        </p>
        <h3>That's cool. But Why?</h3>
        <p>
          Because this is something I wanted to make. When I was starting out,
          the barrier for Open-Source seemed incredibly high and a lot of things
          simply never interested me. With this, even if someone has a small
          amount of recipes, they can still participate in a meangingful way.
        </p>
        <h3>So What Now?</h3>
        <p></p>
      </div>
    </section>
  </Layout>
)

export default About
