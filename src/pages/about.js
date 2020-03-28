import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <section className="about">
      <div className="about--this">
        <h3>Why'd you make this?</h3>
        <p>
          Because this is something I wanted to make. When I was starting out,
          the barrier for Open-Source seemed incredibly high and a lot of things
          simply never interested me. With this, even if someone has a small
          amount of recipes, they can still participate in a meangingful way.
        </p>
        <h3>That's cool. But Why?</h3>
        <p>
          Why not? I can code and make whatever I want! That's what's awesome
          about it!
        </p>
        <h3>So What Now?</h3>
        <p>
          Start coding. Anyone can participate and it's encouraged. Just
          following the guide on the Howto page and you'll be good to go!
        </p>
      </div>
    </section>
  </Layout>
)

export default About
