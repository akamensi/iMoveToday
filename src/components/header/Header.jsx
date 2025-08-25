// File: src/components/Header/Header.jsx
import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../logo/Logo';

const Header = () => {

  const navigate = useNavigate()
  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        <Logo />
        <div className={styles.authButtons}>
          <button className={styles.btnLogin} onClick={()=>navigate('/login')}>Log In</button>
          <button className={styles.btnRegister} onClick={()=>navigate('/signup')} >Start Your Journey</button>
   
        </div>
      </nav>
    </header>
    
  );
};

export default Header;