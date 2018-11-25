import React from 'react'
import constructionGif from "../images/under-construction.gif"

const IndexPage = () => (
  <div className="container">
    <h1>Hello, this is Jonathan Hudak's website.</h1>
    <p>A new site is under construction Please check back another day.</p>
    <img src={constructionGif} alt="Under construction" />
  </div>
)

export default IndexPage
