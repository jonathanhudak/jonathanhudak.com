import React from 'react'
import constructionGif from "../images/under-construction.gif"
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <h1>Hello, this is Jonathan Hudak's website.</h1>
    <p>A new site is under construction. Please return another day 🌴</p>
    <img src={constructionGif} alt="Under construction" />
  </Layout>
)

export default IndexPage
