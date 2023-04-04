import React from "react";
import styles from '../css/OrderList.module.css';
import OrderItem from "./OrderItem";

const OrderList = ({ orders }) => {
    return (
        <div className={styles.container}>
            {orders.map(item => {
                const { id, title, images, price, description, quality, buyer, seller, status, note } = item;
                return <OrderItem name={title} img={"http://159.203.44.151:9999/media/" + images[0]} desc={description} price={price} id={id} note={note} />
            })}
        </div>
    );
};

export default OrderList;