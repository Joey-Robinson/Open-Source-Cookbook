import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Index = () => {
  return (
    <Layout>
      <SEO title="Open-Source Cookbook" />
      <section className="home">
        <div className="home--explination">
          <h3>What is this?</h3>
          <p style={{ marginBottom: "1.5rem" }}>
            This is - as the title suggest - an open-source cookbok that allows
            users to not only submit recipes, but to learn the process of git as
            well. By exposing new and old developers to a fresh take on both
            recipes and git, I'm hoping to ease people into the world of the
            following concepts:&nbsp; <br />
          </p>
          <div className="home--lists" style={{ fontSize: "2rem" }}>
            <ol>
              <li>git guidelines</li>
              <li>The process of pull requests</li>
              <li>Gatsby</li>
            </ol>
          </div>
          <h3>How does this work?</h3>
          <p style={{ marginBottom: "1.5rem" }}>
            Well, it works by you or others participating. You can check the{" "}
            <Link id="fix" to="/howto/">
              How To Page
            </Link>{" "}
            to see the specfics (or the README) of how you can participate. But
            the simplified version is this:
          </p>
          <div className="home--lists" style={{ fontSize: "2rem" }}>
            <ol>
              <li>clone the repo and install dependencies</li>
              <li>
                Make a new branch according to the how to (
                <Link id="pls" to="/howto/">
                  Check HERE
                </Link>{" "}
                to see how)
              </li>
              <li>push the code and wait for a pull request review</li>
            </ol>
          </div>
          <h3>Can anyone participate?</h3>
          <p>
            OF COURSE! This isn't just meant for new people. Even if you know
            git and want to play around with some recipes ideas, go for it! I
            wanted to make this so everyone can participate in any aspect.
            Either to learn, or to share! If you have a recipe you want to
            share, then the gates open for you to come on in!
          </p>
          <h3>Why though?</h3>
          <p style={{ marginBottom: "1.5rem" }}>
            Why not? When I was starting out I wanted active projects that I
            could participate in, but often felt overwhelmed, so I'm making my
            own. Having people participate in a project can help create a sense
            of accomplishment, regardless of how big or small their involvement
            is or was. This will (as stated above) help teach people the
            following:
          </p>
          <div className="home--lists" style={{ fontSize: "2rem" }}>
            <ol>
              <li>git guidelines</li>
              <li>Thew process of pull requests</li>
              <li>Gatsby</li>
            </ol>
          </div>
          <p style={{ margin: "1.5rem 0" }}>
            All of which are needed in todays development world. By learning
            Gatsby, a person will understand React and GraphQL as well. So a
            participant will learn a framework and git flow easily and in a
            controlled environment. There's no need to gatekeep coding or
            Open-Source content.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default Index
