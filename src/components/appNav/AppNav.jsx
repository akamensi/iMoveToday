// File: src/components/AppNav/AppNav.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AppNav.module.css';

const AppNav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink 
            to="properties" 
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <span className={styles.linkText}>Properties</span>
            <span className={styles.linkUnderline}></span>
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink 
            to="schools" 
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <span className={styles.linkText}>Schools</span>
            <span className={styles.linkUnderline}></span>
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink 
            to="work" 
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <span className={styles.linkText}>Work</span>
            <span className={styles.linkUnderline}></span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;