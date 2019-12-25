import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 post-sumamry" style={projCardStyle}>
            <div className="card-content grey-text text-darken-3">
                <div className="card-title">{project.title}</div>
                <p>Posted by Bernard</p>
                <p className="grey-text">November 14th, 2019</p>
            </div>
        </div>
    )
}

const projCardStyle = {
    border: '1px solid lightgray',
    borderRadius: '5px'
};

export default ProjectSummary;