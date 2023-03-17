import React from "react";
import GridView  from './GridView';
import ListView  from './ListView';
import { useFilterContext  } from "../contexts/FilterContext";

const ProductList = () => {
    const { filter_products, grid_view } = useFilterContext();
    if (grid_view === true) {
        return <GridView />
    }
    if (grid_view === false) {
        return <ListView />
    }
};

export default ProductList;