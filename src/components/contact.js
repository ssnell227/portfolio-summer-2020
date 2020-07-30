import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"

const Contact = () => {
    

    return (
        <div id='contact' className='container contact'>
            <div className='section-title'>Contact</div>
            <div className='contact-icon-container'>
                <a target='_blank' href='https://www.linkedin.com/in/stephen-snell/'>Linkedin</a>
                <a href='mailto:ssnell227@gmail.com'>Email</a>
                <a target='_blank' href='https://github.com/ssnell227'>Github</a>
            </div>
        </div>
    )
}
export default Contact