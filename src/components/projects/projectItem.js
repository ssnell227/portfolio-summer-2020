import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"


const ProjectItem = ({ data, position }) => {
    const dataImage = useStaticQuery(graphql`
    query {
      feefifidleyio: file(relativePath: { eq: "feefifidleyio.png" }) {
        childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wordlogic: file(relativePath: { eq: "wordlogic.png" }) {
        childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      intervaltimer: file(relativePath: { eq: "intervaltimer.png" }) {
        childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imprecipe: file(relativePath: { eq: "imprecipe.png" }) {
        childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      github: file(relativePath: { eq: "GitHub-Mark-64px.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <div className='project-item-container'>
            <p className={`project-item-title ${position}`}>{data.title}</p>
            <a href={data.url} target='_blank'><Img className='project-item-img' fluid={dataImage[data.image].childImageSharp.fluid} /></a>
            <div className={`project-item-bottom-container flex-${position}`}>
                <p className={`project-item-description ${position}`}>{data.description}</p>
                <div className={`link-container`}>
                    <a href={data.gitHub}><Img className={`link-img`} fluid={dataImage.github.childImageSharp.fluid} /></a>
                </div>
            </div>
        </div>
    )
}
export default ProjectItem