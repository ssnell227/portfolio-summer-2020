import React from 'react'
import Img from 'gatsby-image'

const Banner = () => (
        <div id='banner' className='container banner'>
            <div className='banner-text'>
                <p className='title-text'>Hi, my name is</p>
                <div className='name-container'>
                    <p className='title-name first-name'>Stephen</p>
                    <p className='title-name last-name'>Snell</p>
                </div>
                <p className='title-text bottom-right'>Web developer in SLC, Utah</p>
            </div>
            <div className='banner-image'>
                {/* <Img /> */}
            </div>
            <div className='scroll-prompt'>scroll down</div>
        </div>
)

export default Banner