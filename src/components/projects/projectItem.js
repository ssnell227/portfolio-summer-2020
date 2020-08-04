import React, {useRef, useEffect} from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"
import {useIntersection} from 'react-use'
import {fadeIn, fadeOut} from '../../utils/animations'





const ProjectItem = ({ data, position, identifier }) => {
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

  const sectionRef = useRef(null)

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: .5
  })

  useEffect(() => {
    if (intersection && intersection.intersectionRatio > .5) {
      fadeIn(`.${identifier}`)
    } else {
      fadeOut(`.${identifier}`)
    }

  }, [intersection, identifier])
  

  return (
    <div ref={sectionRef} className={`project-item-container ${identifier}`}>
      <p className={`project-item-title ${position}`}>{data.title}</p>
      <div className='img-wrapper'>
        <a target='_blank' rel='noreferrer' href={data.url}><Img className='project-item-img' alt={data.title} fluid={dataImage[data.image].childImageSharp.fluid} /></a>
      </div>
      <div className={`project-item-bottom-container`}>
        <p className={`project-item-description`}>{data.description}</p>
          <a href={data.gitHub}><Img className={`link-img`} alt='github' fluid={dataImage.github.childImageSharp.fluid} /></a>

      </div>
    </div>
  )
}
export default ProjectItem