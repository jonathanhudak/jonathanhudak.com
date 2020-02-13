import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import { Text, Heading } from 'theme-ui'
import Layout from 'components/layout'
import SEO from 'components/seo'
import { Box } from 'theme-ui'

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx && data.allMdx.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <Box>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const [theme] = node.frontmatter.theme || [{}]
          return (
            <Box
              as="article"
              key={node.fields.slug}
              sx={{
                py: [5, 6],
                px: [3, 4],
                bg: theme.background,
                color: theme.titleColor,
              }}
            >
              <Box as="header">
                <Heading
                  as="h3"
                  sx={{
                    fontSize: [4, 5],
                    fontWeight: 1,
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </Heading>
                <Text>{node.frontmatter.date}</Text>
                <pre>{JSON.stringify(node.frontmatter)}</pre>
              </Box>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </Box>
          )
        })}
      </Box>
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
          }
          body
        }
      }
    }
  }
`
