import React from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.navbarContainer}>
            <span className={styles.logo}>BookTM</span>
            <div className={styles.navItems}>
                <button className={styles.navButtons}>Register</button>
                <button className={styles.navButtons}>Login</button>
            </div>

        </div>
    </div>
  )
}

export default Navbar