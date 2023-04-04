import React from "react";
import styles from '../css/OrderItem.module.css';
import FormatPrice from './FormatPrice';
import { CgMoreO } from "react-icons/cg"
const OrderItem = ({ name, img, desc, price, note}) => {
    const actions = ["Confirm", "Cancel"];
    return (
        <div className={styles.container}>
            <figure className={styles.figure}>
                <img className={styles.img} src={img} alt={""} />
            </figure>
            <div className={styles["card-data"]}>
                <h3>{name}</h3>
                <p><FormatPrice price={price} /></p>
                <p>{desc.slice(0, 90)}...</p>
                <p>Message: {note}</p>
                <CgMoreO className={styles["more-btn"]} />
            </div>
        </div>
    );
};

export default OrderItem;