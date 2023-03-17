import React from "react";
import styles from '../css/Sort.module.css';
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {
    return (
        <div className={styles.container}>
            {/* 1st column */}
            <div className={styles["sorting-list--grid"]}>
                <button className={styles["sort-btn"]}>
                    <BsFillGridFill className={styles.icon} />
                </button>
                <button className={styles["sort-btn"]}>
                    <BsList className={styles.icon} />
                </button>
            </div>

            { /* 2nd column */}
            <div className={styles["product-data"]}>
                <p>20 Product Avalibale</p>
            </div>

            { /* 3rd column */}
            <div className={styles["sort-selection"]}>
                <form action="#">
                <label htmlFor="sort"></label>
                <select
                    name="sort"
                    id="sort"
                    className={styles["sort-selection--style"]}>
                    <option value="lowest">Price(lowest)</option>
                    <option value="#" disabled></option>
                    <option value="highest">Price(highest)</option>
                    <option value="#" disabled></option>
                    <option value="a-z">Price(a-z)</option>
                    <option value="#" disabled></option>
                    <option value="z-a">Price(z-a)</option>
                </select>
                </form>
            </div>
        </div>
    );
};

export default Sort;