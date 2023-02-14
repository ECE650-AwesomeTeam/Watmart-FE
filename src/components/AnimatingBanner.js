import React from "react";
import videoBg from '../images/videoBg.mp4';
import styles from '../css/AnimatingBanner.module.css';

const AnimatingBanner = props => {
    return (
        <div className={styles.banner}>
            <div className={styles.overlay} />
            <video src={videoBg} autoPlay loop muted />
            <div className={styles.content}>
                <h1>Welcome to <span className={styles.app_name}>Watmart</span></h1>
                <p>Reduce, reuse, Recycle with a click.</p>
            </div>
        </div>
    );
};

export default AnimatingBanner;