import React, { useEffect } from "react";
import Header from './Header';
import { useParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";
import styles from '../css/ListingDetail.module.css';
import PageNavigation from "./PageNavigation";
import Gallery from "./Gallery";
import FormatPrice from "./FormatPrice";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Footer from "./Footer";


const ListingDetail = () => {
    const { getSingleProduct, singleProduct, isSingleLoading } = useProductContext();
    const { id } = useParams();
    
    const {
        title, 
        images, 
        price, 
        content, 
        category, 
        quality, 
        user, 
        status } = singleProduct;
    console.log("images = " + images);
    useEffect(() => {
        getSingleProduct(id);
    },[]);
    
    if (isSingleLoading) {
        return <div className={styles.page_loading}>Loading.....</div>;
    }

    return (
        <>
        <div className={styles["root-container"]}>
            <Header isSearchBarHidden={true}/>
            <PageNavigation title={title} />
            <div className={styles.container}>
                <div className={`${styles.grid} ${styles["grid-two-column"]}`}>
                    <div className={styles.product_images}>
                        <Gallery images={images.map(url => { return "http://159.203.44.151:9999/media/" + url})} />
                    </div>
                    <div className={styles["product-data"]}>
                        <h2>{title}</h2>
                        <p className={styles["product-data-price"]}>
                            Price: <FormatPrice price={price} />
                        </p>
                        <p>{content}</p>
                        <div className={styles["product-status"]}>
                            <div className={styles["product-item-status"]}>
                                <TbTruckDelivery className={styles["status-icon"]} />
                                <p>Free Delivery</p>
                            </div>
                            <div className={styles["product-item-status"]}>
                                <TbReplace className={styles["status-icon"]} />
                                <p>Free Return</p>
                            </div>
                            <div className={styles["product-item-status"]}>
                                <TbReplace className={styles["status-icon"]} />
                                <p>Free Replacement</p>
                            </div>
                            <div className={styles["product-item-status"]}>
                                <MdSecurity className={styles["status-icon"]} />
                                <p>3 Year Warranty</p>
                            </div>
                        </div>
                        <div className={styles["product-data-info"]}>
                            <p>Availability: <span>{status === "Available" ? "In stock" : "Not available"}</span></p>
                            <p>Seller: <span>{user}</span></p>
                            <p>Condition: <span>{quality}</span></p>
                        </div>
                        <hr />
                        { status === "Available" && <button className="btn">Buy item</button>}
                    </div>
                </div>
                
            </div>
        </div>
        <Footer />
        </>
    )
};

export default ListingDetail;