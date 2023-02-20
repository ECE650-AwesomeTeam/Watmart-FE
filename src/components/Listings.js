import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Searchbar from "./Searchbar";
import Categories from './Categories';
import Footer from "./Footer";
import Features from "./Features";
import '../css/main.css';

const Listings: React.FC<{}>  = (props) => {
    return (
    <>
        <Header />
        <Searchbar />
        <div className="listingsContainer">
            <Categories />
            <Features />
            <Footer />
        </div>
        
    </>
    );
};

export default Listings;