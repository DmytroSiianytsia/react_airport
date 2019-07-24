import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <img className='logo' src="https://iev.aero/_nuxt/img/logo@2x.2d2c20b.png" alt="logo" />
      <div className='header_nav'>
        <nav className='navBar'>
          <li>For Passengers</li>
          <li>IEVServices</li>
          <li>VIP</li>
          <li>Corporate</li>
          <li>Language</li>
        </nav>
      </div>
    </div>
  );
}

export default Header;
