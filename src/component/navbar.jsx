
import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (  <section id="navbar">
    <nav class="navbar navbar-expand-lg navbar-light">
      {/* <a class="navbar-brand" href="#"><img src="/go.PNG"/></a> */}
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <NavLink class="nav-link" to="/all">
              HOME
          </NavLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">
              SERVICES
          </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about-us">
              ABOUT US
          </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#our-team">
              TESTIMONIALS
          </a>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/contact">
              CONTACT</NavLink>
          
          </li>
        </ul>
      </div>
    </nav>
    </section>);
}
 
export default Navbar;

