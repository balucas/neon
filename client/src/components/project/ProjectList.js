import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'
import Spinner from '../spinner/spinner'

const ProjectList = ({projects}) => {
    return (
        <div className="post-list section">
            { projects && projects.map(project => {
                return (
                    <Link to={'/project/' + project.id} key={project.id}>
                        <ProjectSummary project={project}/>
                    </Link>
                )
            })
            || <Spinner/>}
        </div>
    )
}

export default ProjectList;