import React from "react";
import Header from './Header';
import styles from '../css/SearchItemList.module.css';
import Filter from "./Filter";

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
                </div>
            </div>
        </div>
    )
};

export default SearchItemList;