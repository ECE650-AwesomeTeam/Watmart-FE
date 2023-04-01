import React, { useState, useEffect } from "react";
import Header from "./Header";
import styles from "../css/MyProfile.module.css";
import Footer from "./Footer";
import Avatar from '@mui/material/Avatar';
import { BsPencilFill } from "react-icons/bs";
import useAuth from '../hooks/useAuth';
import ListView  from './ListView';
import OrderList from "./OrderList";
const MyProfile = () => {
    const { isAuthenticated, email, products, orders, getProducts, getOrders } = useAuth();
    useEffect(() => {
        getProducts();
        getOrders();
    },[]);

    const [selectProductsOrOrders, setSelectProductsOrOrders] = useState({
        select_products: true,
        select_orders: false,
    });

    
    const handleSelectProducts = () => {
        setSelectProductsOrOrders({select_products: true, select_orders: false });
    };

    const handleSelectOrders = () => {
        setSelectProductsOrOrders({select_products: false, select_orders: true });
    };


    return (
        <>
            <Header isSearchBarHidden={true}/>
            <div className={styles.container}>
                <div className={styles["profile-container"]}>
                    <div className={styles.box}>
                      <div className={styles["inner-box"]} />
                      <Avatar className={styles.avatar}>{"Q".toUpperCase()}</Avatar> 
                      <h3>Quan Quach</h3>
                       <div className={styles["edit-container"]}>
                            <BsPencilFill className={styles.icon} />
                            <p>Edit profile</p>
                       </div>
                       <div className={styles.footer}>
                            <div className={`${styles["grid-item"]} ${styles["border-right"]}`}>
                                <p>10</p>
                                <p>posts</p>
                            </div>
                            <div className={`${styles["grid-item"]} ${styles["border-right"]}`}>
                                <p>5</p>
                                <p>orders</p>
                            </div>
                            <div className={styles["grid-item"]}>
                                <p>5 mo</p>
                                <p>on Wat</p>
                            </div>
                       </div>
                    </div>
                    <div className={styles["products-box"]}>
                        <div className={`${styles.product} ${styles.flex}`} onClick={handleSelectProducts}>
                            <div className={`${styles.indicator} ${selectProductsOrOrders.select_products ? styles["indicator-active"] : ""}`} />
                            <p className={styles["margin-left"]}>Products</p>
                        </div>
                        <div className={`${styles.order} ${styles.flex}`} onClick={handleSelectOrders}>
                            <div className={`${styles.indicator} ${selectProductsOrOrders.select_orders ? styles["indicator-active"] : ""}`} />
                            <p className={styles["margin-left"]}>Orders</p>
                        </div>
                    </div>
                </div>
                <div className={styles["list-container"]}>
                    {selectProductsOrOrders.select_products && <ListView products={products} />}
                    {selectProductsOrOrders.select_orders && <OrderList orders={orders} />}
                </div>
            </div>
            <Footer />
        </>
    )
};

export default MyProfile;