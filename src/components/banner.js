import React, { useEffect, useRef } from 'react'
import { fadeIn, fadeOut } from '../utils/animations'
import { useIntersection } from 'react-use'
import { bubbles } from '../utils/bubbles'

const Banner = () => {
    useEffect(() => {
        fadeIn('.banner')
    }, [])

    const sectionRef = useRef(null)
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const c = canvas.getContext('2d');
        const circleArray = [];

        const maxRadius = 100;

        const colorArray = [
            '#8000FF',
            '#59139E',
            '#14009A',
            '#2B70AC',
            '#3DB7DC',
            '#CA7403',
            '#FF9A40',
        ]
        bubbles(canvas, c, circleArray, maxRadius, colorArray)


        //interactive
        // const inCircle = (point, circle) => {
        //     if (circle.radius > (Math.sqrt(Math.pow((point.x + .5 * window.innerWidth)-(circle.x + .5 * window.innerWidth), 2)
        //     +Math.pow((point.y+20)-(circle.y +20), 2)))){
        //         return true;
        //     }
        // }
        // const bubblePop = (e) => {
        //     const mousePos = {
        //         x: e.clientX - .5 * (window.innerWidth - canvas.width),
        //         y: e.clientY
        //     }
        //     console.log(mousePos)
        //     circleArray.forEach(circle => {
        //         if (inCircle(mousePos, circle)) {
        //            circleArray.splice(circleArray.indexOf(circle), 1);
        //         } 
        //     })
        // }
    }, [])





    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: .9
    })

    if (intersection && intersection.intersectionRatio > .9) {
        fadeIn('.scroll-prompt')
        console.log('firing')
    } else {
        fadeOut('.scroll-prompt')
    }

    return (
        <div ref={sectionRef} id='banner' className='container banner'>
            <div className='banner-text'>
                <p className='title-text'>Hi, my name is</p>
                <div className='name-container'>
                    <p className='title-name first-name'>Stephen</p>
                    <p className='title-name last-name'>Snell</p>
                </div>
                <p className='title-text bottom-right'>Web developer in SLC, Utah</p>
            </div>
            <div className='canvas-container'>
                <canvas width={'1000'} height='600' ref={canvasRef} id='bubbles' />
            </div>
            <div className='scroll-prompt'>scroll down</div>
        </div>
    )
}

export default Banner