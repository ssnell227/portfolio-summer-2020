import React from 'react'
import ProjectItem from './projectItem'
import projectsData from '../../data/projectsData'

const Projects = () => {
    const projectItemMap = projectsData.map((item, index) => <
        ProjectItem
        key={`project-${index}`}
        data={item}
        position={index%2=== 0? 'left' : 'right'}
        />)
    return (
        <div id='projects' className='container projects'>
            <div className='section-title projects-title'>My work</div>
            {projectItemMap}
        </div>
    )
}
export default Projects