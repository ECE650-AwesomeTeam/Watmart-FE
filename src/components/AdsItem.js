import React from "react";
import styles from '../css/ListingItem.module.css';
import {FaRegHeart} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import FormatPrice from "./FormatPrice";

const AdsItem = ({ img, desc, price, category, name}) => {
    const navigate = useNavigate();

    const listingClickHandler = () => {
        navigate("/listing/300");
    };

    return (
        <figure className={styles.figure} onClick={listingClickHandler}>
            <div className={styles["img-container"]}>
                <img src={img} atl='' />
                <figcaption className={styles.caption}>{category}</figcaption>
            </div>
            
            <div className={styles["ads-desc-section"]}>
                <p className={styles["item-name"]}>{name}</p>
                <p className={styles["ads-desc"]}>{desc}</p>
                <div className={styles["ads-desc-bottom"]}>
                    <p><FormatPrice price={price} /></p>
                    <FaRegHeart className={styles["ads-bookmark-icon"]} />
                </div>
            </div>

        </figure>
        
    )
}

export default AdsItem;