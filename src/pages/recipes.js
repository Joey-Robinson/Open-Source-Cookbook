import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Recipes = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <section className="recipes">
        <ul className="recipes--list">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <li>
                <h3>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <div>
                  <a
                    href={node.frontmatter.cover.publicURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img
                      fluid={node.frontmatter.cover.childImageSharp.fluid}
                      alt={title}
                    />
                  </a>
                </div>
                <div className="recipes--list__small">
                  <small>
                    <span>{node.frontmatter.author}</span> -{" "}
                    {node.frontmatter.date}
                  </small>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    </Layout>
  )
}

export default Recipes

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            author
            cover {
              publicURL
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
