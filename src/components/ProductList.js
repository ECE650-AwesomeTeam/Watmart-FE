import React from "react";
import ListView  from './ListView';
import { useFilterContext  } from "../contexts/FilterContext";
import AdsList from "./AdsList";

const ProductList = ({ category }) => {
    const { filter_products, grid_view } = useFilterContext();
    console.log("category =" + category);
    if (grid_view === true) {
        return <AdsList numCol={4} products={ category !== "all" ? filter_products.filter(item => {return item.category.toLowerCase() === category; }) : filter_products }/>
    }
    if (grid_view === false) {
        return <ListView products={category !== "all" ? filter_products.filter(item => {return item.category.toLowerCase() === category; }) : filter_products}/>
    }
};

export default ProductList;