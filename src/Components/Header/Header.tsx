import React from 'react';
import logo from '../../assets/RR_Logo.png';
import burger from '../../assets/Menu.png';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="header__caption">
      <img src={logo} alt="" className="header__logo" height="50" width="50" />
      <h1 className="header__name">
        Dapplets Project
        <b>.</b>
      </h1>
    </div>
    <img className="header__burger" src={burger} height="12.5" width="16" alt="" />
  </header>
);

export default Header;
