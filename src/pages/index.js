import Layout from '../components/layout'
import { Styled } from 'theme-ui'

/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box, Card, Image, Heading, Text } from 'rebass'

const IndexPage = () => (
  <Layout>
    <Text as="p" fontSize={[3, 4]} fontFamily="body" color="primary">
      some stuff about how i am an amazing frontend engineer currently working
      @amazon
    </Text>
  </Layout>
)

export default IndexPage
