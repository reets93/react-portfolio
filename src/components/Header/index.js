import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'

function Header() {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="www.google.com"><strong>Rita</strong> Fitchett</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="www.google.com">Home <span class="sr-only"></span></a>
      <a className="nav-item nav-link" href="www.google.com">Portfolio Gallery</a>
      <a className="nav-item nav-link" href="www.google.com">CV</a>
      <a className="nav-item nav-link" href="www.google.com">Get in Touch</a>
    </div>
  </div>
</nav>
  );
}

export default Header;