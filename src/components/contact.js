import React, { useRef } from 'react'
import { slideIn, fadeIn } from '../utils/animations'
import { useIntersection } from 'react-use'


const Contact = () => {
    const sectionRef = useRef(null)

    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: .1
    })

    if (intersection && intersection.intersectionRatio > .1) {
        slideIn('.contact-title')
        fadeIn('.contact-link-container')
    }

    return (
        <div ref={sectionRef} id='contact' className='container contact'>
            <div className='section-title contact-title'>
                Contact
            <div className='contact-description'>
                    <p>Let's talk.</p>
            </div>
        </div>
            <div className='contact-link-container'>
                <a className='contact-link' rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/stephen-snell/'>Linkedin</a>
                <a className='contact-link' rel='noreferrer' href='mailto:ssnell227@gmail.com'>Email</a>
                <a className='contact-link' rel='noreferrer' target='_blank' href='https://github.com/ssnell227'>Github</a>
            </div>
        </div>
    )
}
export default Contact