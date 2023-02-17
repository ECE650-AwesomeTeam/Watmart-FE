import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Listings from "./Listings";

const WTRoutes: React.FC<{}> = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Listings />} />
                <Route path="/login" element={<Login />} /> 
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </>
    );
};

export default WTRoutes;
