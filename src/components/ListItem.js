import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../css/ListItem.module.css';
import FormatPrice from "./FormatPrice";

const ListItem = ({ desc, img, price, name }) => {
    return (
        <div className={`${styles.card} ${styles.grid} ${styles["grid-two-column"]}`}>
            <figure className={styles.figure}>
                <img className={styles.img} src={img} alt={name} />
            </figure>
            <div className={styles["card-data"]}>
                <h3>{name}</h3>
                <p><FormatPrice price={price} /></p>
                <p>{desc.slice(0, 90)}...</p>
                <button className={`btn ${styles.btn}`}>Read more</button>
            </div>
        </div>
    );
};

export default ListItem;