import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Categories from "./Categories";
import Footer from "./Footer";
import Features from "./Features";
import AnimatingBar from "./AnimatingBar";
const Listings = (props) => {
    return (
        <div>
            <Header />
            <AnimatingBar />
            <Categories />
            <Features />
            <Footer />
        </div>
    );
};

export default Listings;
