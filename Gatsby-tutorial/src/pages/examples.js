import React from "react"
import Header from "../examples/Header"
import Layout from "../components/Layout"
import HeaderStatic from "../examples/HeaderStatic"
import { graphql } from "gatsby"

const examples = props => {
  console.log(props)
  return (
    <Layout>
      <p>Hello from the examples page</p>
      <Header />
      <HeaderStatic />
      <h3>{props.data.site.info.title}</h3>
    </Layout>
  )
}
export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        title
        description
        author
      }
    }
  }
`
export default examples
