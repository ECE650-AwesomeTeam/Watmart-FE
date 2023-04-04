import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Listings from "./Listings";
import ListingDetail from "./ListingDetail";
import SearchItemList from "./SearchItemList";
import ScrollToTop from "./ScrollToTop";
import MyProfile from "./MyProfile";

const WTRoutes = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Listings />} />
                <Route path="/login" element={<Login />} /> 
                <Route path="/signup" element={<Signup />} />
                <Route path="/listings/:id" element={<SearchItemList />} />
                <Route path="/listing/:id" element={<ListingDetail />} />
                <Route path="/my-profile/:id" element={<MyProfile />} />
            </Routes>
        </>
    );
};

export default WTRoutes;
