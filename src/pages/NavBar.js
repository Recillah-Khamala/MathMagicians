import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/calculator', text: 'Calculator' },
  { to: '/about', text: 'About' },
];

const NavBar = () => (
  <div className={styles.navigation}>
    <h1> MATH MAGICIANS</h1>
    <ul className={styles.items}>
      {LINKS.map((item) => (
        <li key={item.to}>
          {' '}
          <NavLink
            to={item.to}
            className={styles.NavLink}
          >
            {item.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default NavBar;
