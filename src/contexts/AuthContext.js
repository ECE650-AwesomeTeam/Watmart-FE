import React, { createContext, useEffect, useReducer } from "react";
import jwtDecode from "jwt-decode";
import axios from "../api/axiosConfigration";

const initialState = {
    isAuthenticated: false,
    isInitialised: false,
    email: "",
    products: [],
    orders: [],
    submit_order_IDs: [],
};

const isValidToken = (accessToken) => {
    if (!accessToken) {
        return false;
    }

    const decodedToken = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp > currentTime;
};

const setSession = (accessToken) => {
    if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
        localStorage.removeItem("accessToken");
        delete axios.defaults.headers.common.Authorization;
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case "INIT": {
            const { isAuthenticated, token } = action.payload;

            return {
                ...state,
                isAuthenticated,
                isInitialised: true,
                token,
            };
        }
        case "LOGIN": {
            const { token, email } = action.payload;
            console.log("email" + email);
            return {
                ...state,
                isAuthenticated: true,
                token,
                email
            };
        }
        case "LOGOUT": {
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        }
        case "REGISTER": {
            const { token } = action.payload;

            return {
                ...state,
                isAuthenticated: true,
                token,
            };
        }
        case "GET_MY_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };
        case "GET_MY_ORDERS":
            return {
                ...state,
                orders: action.payload
            };
        case "SUBMIT_ORDER":
            return {
                ...state,
                submit_order_IDs: [...state.submit_order_IDs,action.payload],
            }
        default: {
            return { ...state };
        }
    }
};

const AuthContext = createContext({
    ...initialState,
    method: "JWT",
    login: () => Promise.resolve(),
    logout: () => {},
    register: () => Promise.resolve(),
});

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const login = async (email, password) => {
        const response = await axios.post("/login", {
            email,
            password,
        });

        const { result, msg } = response.data;


        if(result === "Failed") {
            dispatch({
                type: "LOGIN_FAIL",
                payload: {
                    msg
                }
            })
            return msg;
        }

        const { token } = response.data.data

        console.log(token);

        setSession(email);

        dispatch({
            type: "LOGIN",
            payload: {
                token,
                email
            },
        });
    };

    const register = async (email, firstname, lastname, password, birthday) => {
        const response = await axios.post("/signup", {
            email,
            "firstName": firstname,
            "lastName": lastname,
            password,
            birthday,
            "gender": "",
            "watcardID": "",
            "occupation": "",
            "phone": ""
        });



        const { result, msg } = response.data;

        if(result === "Failed") {
            return msg;
        }

        dispatch({
            type: "REGISTER",
            payload: {
                result,
            },
        });
    };

    const logout = () => {
        setSession(null);
        dispatch({ type: "LOGOUT" });
    };

    const getProducts = async () => {
        const accessToken = window.localStorage.getItem("accessToken");
        const config = {
            headers:{
                'Authorization': /*accessToken*/ 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IngyMnNoaUB1d2F0ZXJsb28uY2EiLCJwYXNzd29yZCI6Indob2lzeW91cmRhZGR5In0.8sqHbnEj2KDSYUQfQls9goYDYC_pQDJBiP3HwxR_Liw',
            },
            params: {
                "email": /*state.email*/ "x22shi@uwaterloo.ca"
            }
        };

        try {
            const response = await axios.get('/mypost/', config);
            const products = response.data.data.postList;
            dispatch({ type: "GET_MY_PRODUCTS", payload: products});
        } catch(e) {
            console.log(e);
        }
    };

    const getOrders = async () => {
        const accessToken = window.localStorage.getItem("accessToken");
        const config = {
            headers:{
                'Authorization': /*accessToken*/ 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InFxbXF1YWNoQHV3YXRlcmxvby5jYSIsInBhc3N3b3JkIjoiMjVmOWU3OTQzMjNiNDUzODg1ZjUxODFmMWI2MjRkMGIifQ.N2FxbCFKqjTRpuSFoHHdx1v8d0h92gtNL9IFFcj_Gtw',
            },
            params: {
                "email": /*state.email*/ "qqmquach@uwaterloo.ca"
            }
        };

        try {
            const response = await axios.post('/myorder', config);
            const orders = response.data.data.orderList;
            dispatch({ type: "GET_MY_ORDERS", payload: orders});
        } catch(e) {
            console.log(e);
        }
    };

    const submitOrder = async (productId, note, sellerEmail ) => {
        // const accessToken = window.localStorage.getItem("accessToken");
        const config = {
            headers:{
                'Authorization': /*accessToken*/ 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InFxbXF1YWNoQHV3YXRlcmxvby5jYSIsInBhc3N3b3JkIjoiMjVmOWU3OTQzMjNiNDUzODg1ZjUxODFmMWI2MjRkMGIifQ.N2FxbCFKqjTRpuSFoHHdx1v8d0h92gtNL9IFFcj_Gtw',
            }
        };
        const formData = new FormData();
        formData.append("email", "qqmquach@uwaterloo.ca");
        formData.append("buyer", "qqmquach@uwaterloo.ca");
        formData.append("seller", sellerEmail);
        formData.append("product", productId);
        formData.append("note", note);
        formData.append("status", "Valid");
        
        try {
            const response = await axios.post('/order',formData, config);
            const orderId = response.data.data.orderID;
            dispatch({ type: "SUBMIT_ORDER", payload: {productId,orderId}});
        } catch(e) {
            console.log(e);
        }

    };

    useEffect(() => {
        (async () => {
            try {
                const accessToken = window.localStorage.getItem("accessToken");

                if (accessToken && isValidToken(accessToken)) {
                    setSession(accessToken);
                    const response = await axios.get("/api/auth/profile");
                    const { user } = response.data;

                    dispatch({
                        type: "INIT",
                        payload: {
                            isAuthenticated: true,
                            user,
                        },
                    });
                } else {
                    dispatch({
                        type: "INIT",
                        payload: {
                            isAuthenticated: false,
                            user: null,
                        },
                    });
                }
            } catch (err) {
                console.error(err);
                dispatch({
                    type: "INIT",
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                });
            }
        })();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                ...state,
                method: "JWT",
                getProducts,
                getOrders,
                login,
                logout,
                register,
                submitOrder,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
