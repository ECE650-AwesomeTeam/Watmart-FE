import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Searchbar from "./Searchbar";
import Categories from './Categories';
import Footer from "./Footer";
import Features from "./Features";
import Filter from "./Filter";
const Listings = (props) => {
    return (
    <div>
        <Header />
        <Searchbar />
        {/*<Filter />*/}
        <Categories />
        <Features />
        <Footer />
    </div>
    );
};

export default Listings;