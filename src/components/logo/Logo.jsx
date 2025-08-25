import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
        <div className={styles.logo}>
          <span className={styles.logoText}>iMove Today</span>
        </div>
    </Link>
  )
}
