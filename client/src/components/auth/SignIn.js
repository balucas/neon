import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }

    complete = null
    completeToast = (name) => {
        if(!this.complete){
            toast("Welcome back " + name, {
                className: 'white-text green lighten-1 top-1'
            })
            this.complete = true
        }
    }

    render() {
        const { authError, authState } = this.props;
        if(authState){
            this.completeToast(authState.first_name)
            return(
                <Redirect to='/'/>
            )
        }else{
            return (
                <div className = "container row center-align valign-wrapper user-form">
                    <div className="form-container col s12 l6 offset-l3 offset-s0">
                        <form onSubmit={this.handleSubmit} className="white">
                            <h5 className="grey-text text-darken-3">Sign In</h5>
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <button className="btn blue lighten-1 z-depth-0">Sign In</button>
                            </div>
                            <div className="red-text center">
                                {authError ? <p>{authError}</p> : null}
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        authState: state.auth.authState
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
