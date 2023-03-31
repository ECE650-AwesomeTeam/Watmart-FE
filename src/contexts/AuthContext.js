import React, { createContext, useEffect, useReducer } from "react";
import jwtDecode from "jwt-decode";
import axios from "../api/axiosConfigration";

const initialState = {
    isAuthenticated: false,
    isInitialised: false,
    email: "",
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

        console.log(token)
        setSession(token);

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
                login,
                logout,
                register,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
