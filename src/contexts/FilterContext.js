import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from '../reducers/filterReducer';
import { useProductContext } from "./ProductContext";
const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
        text: "",
        category: "all",
        quality: "all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    },
};

export const FilterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { products } = useProductContext();
    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" });
    };
    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" });
    };

    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({type: "GET_SORT_VALUE", payload: userValue});
    };

    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value }});
    };

    const clearFilters = () => {
        dispatch({ type: "CLEAR_FILTERS" });
    };

    //sort the product
    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS"});
        dispatch({ type: "SORTING_PRODUCTS"});
    }, [products, state.sorting_value, products, state.filters]);

    //load all the products for grid and list view
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products});
    }, [products]);

    return (
        <FilterContext.Provider
            value={{
                ...state,
                setGridView,
                setListView,
                sorting,
                updateFilterValue,
                clearFilters,
            }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};