import React from 'react';
import { NavLink } from 'react-router-dom';
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './header.css'

function Header() {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="www.google.com"><strong>Rita</strong> Fitchett</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <NavLink className="nav-item nav-link active" to="/">Home</NavLink>
    <NavLink className="nav-item nav-link active" to="projects">Projects Gallery</NavLink>
    <NavLink className="nav-item nav-link active" to="contact">Contact</NavLink>
    <NavLink className="nav-item nav-link active" to="contact">CV</NavLink>
    </div>
  </div>
</nav>
  );
}

export default Header;