import React from 'react'
import { Link } from 'gatsby'
import { Box, Text, Heading } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export default function PostFeature({ post }) {
  console.log(post)
  const title = post.frontmatter.title || post.fields.slug
  return (
    <Box
      as="article"
      key={post.fields.slug}
      sx={{
        py: [5, 6],
        px: [3, 4],
      }}
    >
      <Box as="header">
        <Heading
          as="h2"
          sx={{
            fontSize: [4, 5],
            fontWeight: 1,
          }}
        >
          <Link style={{ boxShadow: `none` }} to={post.fields.slug}>
            {title}
          </Link>
        </Heading>
        <Text>{post.frontmatter.date}</Text>
      </Box>
      <section>
        <Text>{post.frontmatter.description}</Text>
      </section>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Box>
  )
}
