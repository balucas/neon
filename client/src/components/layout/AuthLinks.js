import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink, NavItem } from 'react-materialize';
 
const AuthLinks = () => {
  return(
      <ul className="right">
          <li><NavItem href='/createproject'>New Project</NavItem></li>
          <li><NavItem href='/'>Log Out</NavItem></li>
          <li><NavItem href='/' className='btn btn-floating blue lighten-1'></NavItem></li>
      </ul>
  )
}

export default AuthLinks;