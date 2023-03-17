import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from '../reducers/filterReducer';

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
};

export const FilterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
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
    //sort the product
    useEffect(() => {
        // dispatch({ type: "FILTER_PRODUCTS"});
        dispatch({ type: "SORTING_PRODUCTS"});
    }, [state.sorting_value]);

    //load all the products for grid and list view
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: []});
    });

    return (
        <FilterContext.Provider
            value={{
                ...state,
                setGridView,
                setListView,
                sorting
            }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};