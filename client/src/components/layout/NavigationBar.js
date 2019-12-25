import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem } from 'react-materialize';
import AuthLinks from './AuthLinks'
import NonAuthLinks from './NonAuthLinks'
import { connect } from 'react-redux'

const NavigationBar = () => {
  return(
    <Navbar className="nav-wrapper grey darken-3 row" brand={<NavItem href="/" className="col s1 push-s1">Whisper</NavItem>} alignLinks="right">
      <NonAuthLinks/>
      <AuthLinks/>
    </Navbar>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {

  }
}

export default connect(mapStateToProps)(NavigationBar);
