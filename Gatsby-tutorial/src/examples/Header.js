import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      info: siteMetadata {
        title
        description
        author
      }
    }
  }
`

const Header = () => {
  const data = useStaticQuery(getData)
  const { title, description } = data.site.info
  return (
    <div>
      <h1>title: {title}</h1>
      <h1>description: {description}</h1>
    </div>
  )
}

export default Header
