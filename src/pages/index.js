import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <Link to="/another-page/">Another page</Link>
  </Layout>
)

export default IndexPage
