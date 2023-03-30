import React, { useEffect, useState } from "react";
import Header from './Header';
import styles from '../css/SearchItemList.module.css';
import Filter from "./Filter";
import Sort from "./Sort";
import ProductList from "./ProductList";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

const SearchItemList = () => {
    const [category, setCategory] = useState("");
    const { id } = useParams();
    useEffect(() => {
        setCategory(id);
    },[id]);
    
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles["content-container"]}>
                <div className={styles["filter-container"]}>
                    <div className={styles.filter}>
                        <Filter />
                    </div>
                </div>
                <div className={styles["items-container"]}>
                    <Sort />
                    <ProductList category={category}/>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default SearchItemList;