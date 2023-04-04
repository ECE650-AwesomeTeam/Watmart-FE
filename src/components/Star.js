import React from "react";
import styles from '../css/Star.module.css';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = props => {
    const ratingStars = Array.from({length: 5}, (ele, index) => {
        let number = index+0.5;
        return (
            <span key={index}>
                { props.stars >= number + 1 ? (<FaStar className={styles.icon} />) : props.stars >= number ? (<FaStarHalfAlt className={styles.icon} />) : (<AiOutlineStar className={styles.icon} />)}
            </span>

        );
    });
    return (
        <div className={styles['icon-style']}>
            {ratingStars}
        </div>
    )
};

export default Star; 