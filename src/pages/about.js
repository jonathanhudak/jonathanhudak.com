import React from 'react'

import Layout from 'components/layout'
import SEO from 'components/seo'
import { Text, Heading, Box } from 'theme-ui'

const SecondPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Page two" />
      <Box sx={{ maxWidth: '50ch', my: [3, 5], mx: 'auto' }}>
        <Heading as="h1" sx={{ fontSize: [6, 7] }}>
          Who?
        </Heading>
        <Text sx={{ fontSize: [4, 5] }}>
          A husband, father, frontend web engineer, visual artist, musician,
          amateur gastronomist, ...
        </Text>
      </Box>
    </Layout>
  )
}

export default SecondPage

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
