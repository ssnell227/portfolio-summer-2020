import React, {useRef} from 'react'
import ProjectItem from './projectItem'
import projectsData from '../../data/projectsData'
import { slideIn } from '../../utils/animations'
import { useIntersection } from 'react-use'


const Projects = () => {
    const sectionRef = useRef(null)

    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: .1
    })

    if (intersection && intersection.intersectionRatio > .1) {
        slideIn('.projects-title')
    }

    const projectItemMap = projectsData.map((item, index) => <
        ProjectItem
        key={`project-${index}`}
        identifier={`project-${index}`}
        data={item}
        position={index % 2 === 0 ? 'left' : 'right'}
    />)
    return (
        <div ref={sectionRef} id='projects' className='container projects'>
            <div  className='section-title projects-title'>My work</div>
            {projectItemMap}
        </div>
    )
}
export default Projects