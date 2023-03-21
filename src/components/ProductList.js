import React from "react";
import ListView  from './ListView';
import { useFilterContext  } from "../contexts/FilterContext";
import AdsList from "./AdsList";

const ProductList = () => {
    const { filter_products, grid_view } = useFilterContext();

    if (grid_view === true) {
        return <AdsList products={filter_products}/>
    }
    if (grid_view === false) {
        return <ListView products={filter_products}/>
    }
};

export default ProductList;