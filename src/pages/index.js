import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import SEO from 'components/seo'
import PostFeature from 'components/PostFeature'
import { Box } from 'theme-ui'

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx && data.allMdx.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      {posts.map(({ node }) => (
        <PostFeature key={node.id} post={node} />
      ))}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            theme {
              background
              titleColor
            }
            published
          }
          body
        }
      }
    }
  }
`
