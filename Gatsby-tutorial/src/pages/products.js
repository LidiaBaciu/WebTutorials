import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../components/products.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data
  console.log(products)
  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => {
          return (
            <article key={product.id}>
              <Image fluid={product.image.fluid} />
              <h3>
                {product.title} <span>${product.price}</span>
              </h3>
              <Link to={`/products/${product.slug}`}>More details</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        price
        slug
        id
      }
    }
  }
`

export default ComponentName
