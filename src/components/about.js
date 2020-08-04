import React, { useRef, useEffect } from 'react'
import { slideIn, fadeIn } from '../utils/animations'
import { useIntersection } from 'react-use'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const About = () => {
    const sectionRef = useRef(null)

    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: .5
    })
    
    useEffect(() => {
      if (intersection && intersection.intersectionRatio > .5) {
          slideIn('.about-title')
          fadeIn('.about-text')
      }
    }, [intersection])

    const dataImg = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


    return (
        <div ref={sectionRef} id='about' className='container about'>
            <div className='section-title about-title'>Nice to meet you</div>
            <div className='about-content'>
                <div className='about-text'>
                    <p>I'm a web developer with a drive to learn and build.</p>
                    <div className='text-break' />
                    <p>My main focus has been building web-browser games in React and Express.  Creating content that people can interact with and come away from with a <span className='underline'>lasting memory</span> is what I strive for.</p>
                    <div className='text-break' />
                    <p>Outside of my professional life, I'm a keen rock climber and skier, curator of eclectic music playlists, occasional visual artist, and avid home-cook.</p>
                </div>
                <div className='about-image-container'>
                    <Img className='about-image' fluid={dataImg.headshot.childImageSharp.fluid} />
                </div>
            </div>
        </div>
    )
}

export default About