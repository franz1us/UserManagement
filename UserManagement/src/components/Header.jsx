import React from 'react';
import '../css/Header.css';
import brand from '../assets/brand.jpg';

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <a href="#" className="brand-logo">
          <img src={brand} alt="brand" />
        </a>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <nav>
          <ul className="header-list-container">
            <li><a className="header-list" href="#">Home</a></li>
            <li><a className="header-list" href="#">About</a></li>
            <li><a className="header-list" href="#">Contact</a></li>
            <li className="login-register">
              <a href="#">Login</a>
              <span> / </span>
              <a href="#">Register</a>
            </li>
          </ul>
        </nav>
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
      </div>
    </div>
  );
}

export default Header;
