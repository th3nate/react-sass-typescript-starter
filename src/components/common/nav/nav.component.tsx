import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav() {
  return (
    <nav className="my-2 my-md-0 mr-md-3">
      <NavLink className="mr-1 btn btn-outline-primary" activeClassName='btn-primary text-white' to='/' exact>Home</NavLink>
      <NavLink className="mr-1 btn btn-outline-primary" activeClassName='btn-primary text-white' to='/about'>About</NavLink>
    </nav>
  );
}

export default Nav;
