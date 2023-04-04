import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/productReducer';
import axios from "../api/axiosConfigration";

const ProductContext = createContext();

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    isSingleLoading: false,
    singleProduct: {
        id: 0,
        user: "",
        time: "",
        price: 0,
        status: "",
        title: "",
        content: "",
        category: "",
        quality: "",
        images: [],
    },
};

const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const getProducts = async () => {
        dispatch({ type: "SET_LOADING"});
        try {
            const response = await axios.get("/post/?");
            const products = await response.data.data.postList;
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({type: "API_ERROR" });
        };
    };

    const getSingleProduct = async (id) => {
        dispatch({type: "SET_LOADING" });
        try {
            const response = await axios.get("/post/?id="+id);
            const product = await response.data.data.postList[0];
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: product});
        } catch (error) {
            dispatch({type: "SET_SINGLE_ERROR" });
        };
    };

    useEffect(() => {
        getProducts();
    },[]);

    return (
        <ProductContext.Provider value={{...state, getSingleProduct}}>
            {children}
        </ProductContext.Provider>
    );
};

const useProductContext = () => {
    return useContext(ProductContext);
};

export { ProductProvider, ProductContext, useProductContext };