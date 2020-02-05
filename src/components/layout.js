import React from 'react'
import { Link } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'

const MyH1 = props => <h1 style={{ color: 'tomato' }} {...props} />
const MyParagraph = props => (
  <p style={{ fontSize: '18px', lineHeight: 1.6 }} {...props} />
)

const components = {
  h1: MyH1,
  p: MyParagraph,
}

const Layout = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div>
      <MDXProvider components={components}>
        <h1>
          <Link to={`/`}>{title}</Link>
        </h1>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </MDXProvider>
    </div>
  )
}

export default Layout
