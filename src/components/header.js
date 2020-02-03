import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'

const Header = ({ siteTitle }) => (
  <header
    sx={{
      // this uses the value from `theme.space[4]`
      padding: 4,
      // these use values from `theme.colors`
      color: 'background',
      backgroundColor: 'primary',
    }}
  >
    <div>
      <h1>
        <Link sx={{ color: 'background' }} to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
