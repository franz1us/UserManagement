import React from 'react';
import '../css/Header.css';
import brand from '../assets/brand.jpg'

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <ul>
          <li><a href="#"><img src={brand} alt="brand" width="70px" /></a></li>
          <li ><a className='header-list' href="#">Home</a></li>
          <li ><a className='header-list' href="#">About</a></li>
          <li ><a className='header-list' href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;