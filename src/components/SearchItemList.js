import React from "react";
import Header from './Header';
import styles from '../css/SearchItemList.module.css';
import Filter from "./Filter";
import Sort from "./Sort";
import ProductList from "./ProductList";
const SearchItemList = props => {
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
                    <ProductList />
                </div>
            </div>
        </div>
    )
};

export default SearchItemList;