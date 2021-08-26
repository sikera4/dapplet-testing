import React from 'react';
import logo from '../../assets/RR_Logo.png';
import codesandbox from '../../assets/codesandbox.png';
import heart from '../../assets/heart.png';
import grid from '../../assets/grid.png';
import users from '../../assets/users.png';
import trendingUp from '../../assets/trending-up.png';
import './LeftAside.scss';

const LeftAside = () => (
  <aside className="left-aside">
    <img src={logo} alt="Logo" className="left-aside__logo" width="50" height="50" />
    <div className="left-aside__codesandbox">
      <img src={codesandbox} alt="" className="left-aside__codesandbox-icon" />
    </div>
    <div className="left-aside__regular-box">
      <img src={heart} alt="" className="left-aside__regular-icon" />
    </div>
    <div className="left-aside__regular-box">
      <img src={grid} alt="" className="left-aside__regular-icon" />
    </div>
    <div className="left-aside__regular-box">
      <img src={users} alt="" className="left-aside__regular-icon" />
    </div>
    <div className="left-aside__regular-box">
      <img src={trendingUp} alt="" className="left-aside__regular-icon" />
    </div>
  </aside>
);

export default LeftAside;
