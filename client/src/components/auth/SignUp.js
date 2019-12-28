import React, { Component } from 'react'
import { signUp, signUpComplete } from '../../store/actions/registerActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state) 
    }

    complete = null
    completeToast = () => {
        if(!this.complete){
            toast("Registration Complete!", {
                className: 'white-text green lighten-1 top-1'
            })
            this.complete = true
        }
    }

    

    render() {
        const { registerError, registerState } = this.props
        if(registerState === 'registered'){
            this.props.signUpComplete()
            this.completeToast()
            return(
                <Redirect to='/'/>
            )
        }else{
            return (
                <div className = "container row center-align valign-wrapper user-form">
                    <div className="form-container col s12 l6 offset-l3 offset-s0">
                        <form onSubmit={this.handleSubmit} className="white">
                            <h5 className="grey-text text-darken-3">Join Us</h5>
                            <div className="input-field">
                                <label htmlFor="firstName">First name</label>
                                <input type="text" id="firstName" required onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="lastName">Last name</label>
                                <input type="text" id="lastName" required onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" required onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" required onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <button className="btn blue lighten-1 z-depth-0">Sign Up</button>
                            </div>
                            <div className="red-text center">
                                {registerError ? <p>{registerError}</p> : null}
                            </div>
                        </form>
                    </div>
                </div>
            )
            }
    }
}

const mapStateToProps = (state) => {
    debugger;
    console.log(state)
    return {
        registerError: state.register.error,
        registerState: state.register.regState

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (userInfo) => dispatch(signUp(userInfo)),
        signUpComplete: () => dispatch(signUpComplete)
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(SignUp);
