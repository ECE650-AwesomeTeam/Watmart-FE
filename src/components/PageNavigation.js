import React from "react";
import styles from '../css/PageNavigation.module.css';
import { NavLink } from "react-router-dom";
const PageNavigation = ({ title }) => {
    return (
        <div className={styles.container}>
            <NavLink to="/">Home</NavLink>
            /{title}
        </div>
    );
};

export default PageNavigation;