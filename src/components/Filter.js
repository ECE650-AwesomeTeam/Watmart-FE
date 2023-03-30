import React, {useEffect, useState} from 'react';
import { useFilterContext  } from "../contexts/FilterContext";
import styles from '../css/Filter.module.css';
import FormatPrice from './FormatPrice';

const Filter = ({ isCategoryHidden }) => {
    const { 
        filters:{ text, category, quality, price, maxPrice, minPrice},
        all_products, 
        updateFilterValue,
        clearFilters }  = useFilterContext();

    const extractField = (data, attr) => {
        let newData = data.map(item => {
            return item[attr];
        });
        return ["all", ...new Set(newData)];
    };

    const qualityData = ["all", "new", "used"];
    const categoryData = extractField(all_products,"category");

    return (
        <div className={styles.container}>
            <div className={styles["filter-search"]}>
                <form onSubmit={(i) => i.preventDefault()}>
                    <input
                        type="text"
                        name="text"
                        placeholder='Search'
                        value={text} 
                        onChange={updateFilterValue} />
                </form>
            </div>
            <div className={styles["filter-category"]}>
                <h3>Quality</h3>
                <div>
                {qualityData.map((item,index) => {
                        return (
                            <button
                                key={index}
                                type="button"
                                name="quality"
                                value={item}
                                className={item.toLowerCase() === quality ? styles.active: ""}
                                onClick={updateFilterValue}>
                                    {item}
                                </button>
                        )
                    })}
                </div>
            </div>
            {!isCategoryHidden && <div className={styles["filter-category"]}>
                <h3>Category</h3>
                <div>
                    {categoryData.map((item,index) => {
                        return (
                            <button
                                key={index}
                                type="button"
                                name="category"
                                value={item}
                                className={item === category ? styles.active : ""}
                                onClick={updateFilterValue}>
                                    {item}
                                </button>
                        )
                    })}
                </div>
            </div>}
            
            <div className={styles.filter_price}>
                <h3>Price</h3>
                <p>
                    <FormatPrice price={price} />
                </p>
                <input
                type="range"
                name="price"
                min={minPrice}
                max={maxPrice}
                value={price}
                onChange={updateFilterValue}/>
            </div>
            <div className="filter-clear">
                <button className="btn" onClick={clearFilters}>Clear Filters</button>
            </div>
        </div>
        
    );

};

export default Filter;