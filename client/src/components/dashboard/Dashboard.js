import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../project/ProjectList'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { testAction } from '../../store/actions/testAction'

class Dashboard extends Component {

    componentWillMount() {
        this.props.testAction();
    }

    render(){
        // console.log(this.props);
        const { testCall } = this.props;

        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m12">
                    <p className="App-intro">Response: {testCall}</p>
                        {/* <ProjectList projects ={projects}/> */}
                    </div>
                    {/* <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    debugger;
    console.log(state)
    return {
        testCall: state.project.test
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        testAction: () => dispatch(testAction())
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Dashboard);