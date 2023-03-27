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
import { FortTwoTone } from "@mui/icons-material";
const API = "https://api.pujakaitem.com/api/products";

const ListingDetail = () => {
    const { getSingleProduct, singleProduct, isSingleLoading } = useProductContext();
    const { id } = useParams();
    
    const {
        name,
        company,
        price,
        description,
        category,
        stock,
        stars,
        reviews,
        image,
      } = singleProduct;

    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`);
    },[]);
    
    if (isSingleLoading) {
        return <div className={styles.page_loading}>Loading.....</div>;
    }

    return (
        <>
        <div className={styles["root-container"]}>
            <Header isSearchBarHidden={true}/>
            <PageNavigation title={name} />
            <div className={styles.container}>
                <div className={`${styles.grid} ${styles["grid-two-column"]}`}>
                    <div className={styles.product_images}>
                        <Gallery images={image} />
                    </div>
                    <div className={styles["product-data"]}>
                        <h2>{name}</h2>
                        <p className={styles["product-data-price"]}>
                            Price: <FormatPrice price={price} />
                        </p>
                        <p>{description}</p>
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
                            <p>Availability: <span>{stock > 0? "In stock" : "Not available"}</span></p>
                            <p>Seller: <span>{id}</span></p>
                            <p>Brand: <span>{company}</span></p>
                        </div>
                        <hr />
                        { stock > 0 && <button className="btn">Buy item</button>}
                    </div>
                </div>
                
            </div>
        </div>
        <Footer />
        </>
    )
};

export default ListingDetail;