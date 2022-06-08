import React from 'react';
import { NavLink } from 'react-router-dom';

import "./style.scss";

const Header: React.FC = () => {
  return <header className='header'>
    <nav className='header__nav'>
      <li className="header__nav__link">
        <NavLink to={""} className={({ isActive }) => "header__nav__link--item " + (isActive ? "active" : "")}>1</NavLink>
      </li>
      <li className="header__nav__link">
        <NavLink to={""} className={({ isActive }) => "header__nav__link--item " + (isActive ? "active" : "")}>2</NavLink>
      </li>
      <li className="header__nav__link">
        <NavLink to={""} className={({ isActive }) => "header__nav__link--item " + (isActive ? "active" : "")}>3</NavLink>
      </li>
    </nav>
  </header>;
};

export default Header;
