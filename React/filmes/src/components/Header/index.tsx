import React from 'react';
import logo from '../../assets/images/logo.png';
import '../../assets/global.css';
import './style.css'

function Header() {
  return (
    <div className="principal">
      <div className="header">
        <nav>
          <img src={logo} alt="logo da coletânea"/>
          <ul>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;