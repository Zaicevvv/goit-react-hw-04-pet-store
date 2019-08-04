import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

const activeStyle = {
  color: 'palevioletred',
};

const Nav = () => (
  <ul className={css.nav}>
    <li>
      <NavLink to="/" exact activeStyle={activeStyle} className={css.navItem}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/about" activeStyle={activeStyle} className={css.navItem}>
        About
      </NavLink>
    </li>
    <li>
      <NavLink to="/pets" activeStyle={activeStyle} className={css.navItem}>
        Pets
      </NavLink>
    </li>
  </ul>
);

export default Nav;
