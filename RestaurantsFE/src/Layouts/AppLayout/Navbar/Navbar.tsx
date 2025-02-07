import React from 'react';
import './Navbar.scss';
import { Link, NavLink } from 'react-router';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h1>Restaurants</h1>
      </div>
      <div className="navbar__links">
        <NavLink className="navbar__link" to="/" end>
          Home
        </NavLink>
        <NavLink className="navbar__link" to="/Maintenance" end>
          Maintenance
        </NavLink>
      </div>
      <div className="navbar__auth">
        <Link className="navbar__link" to="/Authentication/Login" >
          Login
        </Link>
        <NavLink className="navbar__link" to="/Authentication/SignUp">
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
