import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink, NavItem } from 'react-materialize';
 
const NonAuthLinks = () => {
  return(
      <ul className="right">
          <li><NavItem href='/signup'>Sign Up</NavItem></li>
          <li><NavItem href='/signin'>Log In</NavItem></li>
      </ul>
  )
}

export default NonAuthLinks;