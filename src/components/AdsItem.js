import React from "react";
import styles from '../css/ListingItem.module.css';
import {FaRegHeart} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import FormatPrice from "./FormatPrice";

const AdsItem = (props) => {
    const navigate = useNavigate();

    const listingClickHandler = () => {
        navigate("/listing/300");
    };

    return (
        <figure className={styles.figure} onClick={listingClickHandler}>
            <div className={styles["img-container"]}>
                <img src={props.img} atl='' />
                <figcaption className={styles.caption}>Mobile</figcaption>
            </div>
            
            <div className={styles["ads-desc-section"]}>
                <p className={styles["ads-desc"]}>{props.desc}</p>
                <div className={styles["ads-desc-bottom"]}>
                    <p><FormatPrice price={props.price} /></p>
                    <FaRegHeart className={styles["ads-bookmark-icon"]} />
                </div>
            </div>

        </figure>
        
    )
}

export default AdsItem;