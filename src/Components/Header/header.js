import React from 'react';
import styles from './header.module.css';
import { NavLink } from 'react-router-dom';

const Header = ({ homeButtonOnClick }) => {
    return (
        <header className={styles.header}>
            <NavLink className={styles.NavLink}to="/">Home</NavLink>
            <NavLink className={styles.NavLink}to="/house">House</NavLink>
            <NavLink className={styles.NavLink}to="/order">Order</NavLink>
            <NavLink className={styles.NavLink}to="/users">Users</NavLink>
            <NavLink className={styles.NavLink}to="/login">Login</NavLink>
            <NavLink className={styles.NavLink}to="/inscription">Inscription</NavLink>
            <NavLink className={styles.NavLink}to="/dashboard">Dashboard</NavLink>
        </header>
    );
};

export default Header;