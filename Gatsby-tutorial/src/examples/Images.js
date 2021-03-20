import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image1.jpeg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image3.jpeg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image2.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={img} width="100%" alt="" />
      </article>
      <article className="single-image">
        <h3>fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
        <div className="small">
          <Image fluid={data.fluid.childImageSharp.fluid} />
        </div>
      </article>
    </section>
  )
}

export default Images
