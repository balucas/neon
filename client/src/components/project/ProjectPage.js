import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Spinner from '../spinner/spinner'

class  ProjectPage extends Component{
    render(){
        const { project } = {
            title: "Placeholder title",
            content: "Placeholder content",
            authorFirstName: "Placeholder First"
        }
        if(project){
            return (
                <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title">{project.title}</span>
                            <p>{project.content}</p>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                            <div>Posted by {project.authorFirstName}</div>
                            <div>November 14th, 11PM</div>
                        </div>
                    </div>
                </div>
            )
        }
        // }else{
        //     return (
        //         <Spinner/>
        //     )
        // }
    }
}

const mapStateToProps = (state, ownProps) => {
    // const id = ownProps.match.params.id;
    // const projects = state.firestore.data.projects;
    // const project = projects ? projects[id] : null; 
    // return {    
    //     project: project
    // }
}

export default compose(
    connect(mapStateToProps)
)(ProjectPage);
