import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { future } from '@theme-ui/presets'
import { Global } from '@emotion/core'
import {
  ThemeProvider,
  Layout,
  Header,
  Main,
  Container,
  Styled,
} from 'theme-ui'
import { Heading, Box } from 'rebass'

import './layout.css'

const jonathanTheme = {
  ...future,
  colors: {
    ...future.colors,
    primary: 'limegreen',
  },
}

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <ThemeProvider theme={jonathanTheme}>
          <Global
            styles={theme => ({
              body: {
                padding: 0,
                background: 'blue',
                margin: 0,
              },
            })}
          />

          <Header>
            <Container>
              <Heading
                as="h1"
                color="primary"
                fontSize={[5, 6, 8]}
                fontFamily="body"
                fontWeight={500}
              >
                Jonathan Hudak
              </Heading>
            </Container>
          </Header>
          <Main>
            <Container>{children}</Container>
          </Main>
        </ThemeProvider>
      </>
    )}
  />
)
