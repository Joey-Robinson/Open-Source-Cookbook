import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ReusableImage from "../../components/image"

const Images = () => (
  <Layout>
    <SEO title="How-to - Images" />
    <section className="images">
      <h3>HowTO - Images</h3>
      <div className="images--container container">
        <div className="container--link">
          <a
            href="https://github.com/Joey-Robinson/osc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fork The Repository
          </a>
        </div>
        <div className="container--image">
          <ReusableImage alt="Fork The Repository" filename="fork.png" />
        </div>
        <div className="container--image">
          <p>Clone The Repository:</p>
          <ReusableImage alt="Clone The Repository" filename="gitclone.png" />
        </div>
        <div className="container--image">
          <p>Install Dependencies:</p>
          <ReusableImage alt="Install Instructions" filename="install.png" />
        </div>
        <div className="container--image">
          <p>Create New Branch:</p>
          <ReusableImage
            alt="Create New Branch"
            filename="grilledchicken.png"
          />
        </div>
        <div className="container--image">
          <p>Navigate To Content Folder:</p>
          <ReusableImage alt="Content Folder" filename="contentfolder.png" />
        </div>
        <div className="container--image">
          <p>Create New Folder And File For New Recipe:</p>
          <ReusableImage alt="Add New Recipe" filename="newrecipe.png" />
        </div>
        <div className="container--image">
          <p>Add The Proper Frontmatter:</p>
          <ReusableImage alt="Frontmatter Syntax" filename="syntax.png" />
        </div>
        <div className="container--image">
          <p>Add Your Content, Including Ingredients & Directions:</p>
          <ReusableImage alt="Adding Content" filename="content.png" />
        </div>
        <div className="container--image">
          <p>Add, Commit, and Push Changes To GitHub</p>
          <ReusableImage alt="Commit Changes" filename="git.png" />
        </div>
      </div>
    </section>
  </Layout>
)

export default Images
