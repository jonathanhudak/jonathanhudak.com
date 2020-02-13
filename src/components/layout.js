import { Link } from 'gatsby'
import { Box, Text, Flex } from 'theme-ui'

/** @jsx jsx */
import { jsx } from 'theme-ui'

const Layout = ({ location, title, children }) => {
  return (
    <Box
      sx={{
        paddingY: [3, 5],
      }}
    >
      <Flex
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
          px: [3, 4],
        }}
      >
        <Flex>
          <Link to="/about/">About</Link>
        </Flex>
        <Link to={`/`}>
          <Text sx={{ color: 'primary', fontSize: [5] }}>{title}</Text>
        </Link>
      </Flex>
      <main>{children}</main>
      <Flex
        as="footer"
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          px: [3, 4],
        }}
      >
        <Flex></Flex>
        <Box>
          © {new Date().getFullYear()} Jonathan Hudak — Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Box>
      </Flex>
    </Box>
  )
}

export default Layout
