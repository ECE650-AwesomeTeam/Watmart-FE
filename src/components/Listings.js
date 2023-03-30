import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Categories from "./Categories";
import Footer from "./Footer";
import AdsList from "./AdsList";
import AnimatingBar from "./AnimatingBar";

import '../css/main.css';
import { useProductContext } from "../contexts/ProductContext";
import Apt1 from '../assets/apt1.jpg';
import Apt2 from '../assets/apt2.jpg';
import Apt3 from '../assets/apt3.jpg';
import Apt4 from '../assets/apt4.jpg';
import Apt5 from '../assets/apt5.jpg';
import Apt6 from '../assets/apt6.jpg';
import Apt7 from '../assets/apt7.jpg';
import Apt8 from '../assets/apt8.jpg';
import Apt9 from '../assets/apt9.jpg';

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

const Listings: React.FC<{}>  = (props) => {

    const categories = [
        {
            catgory_id: 1,
            category_name: "Electronics",
            category_img: Apt1
        },
        {
            catgory_id: 2,
            category_name: "Furniture",
            category_img: Apt2
        },
        {
            catgory_id: 3,
            category_name: "Clothing",
            category_img: Apt3
        },
        {
            catgory_id: 4,
            category_name: "Books",
            category_img: Apt4
        },
        {
            catgory_id: 5,
            category_name: "Sports",
            category_img: Apt5
        },
        {
            catgory_id: 6,
            category_name: "Collections",
            category_img: Apt6
        },
        {
            catgory_id: 7,
            category_name: "Music instruments",
            category_img: Apt7
        },
        {
            catgory_id: 8,
            category_name: "Accessories",
            category_img: Apt8
        },
        {
            catgory_id: 9,
            category_name: "Home appliances",
            category_img: Apt9
        }
    ];

    const { products } = useProductContext();
    return (
    <>
        <Header />
        <AnimatingBar />
        <div className="listingsContainer">
            <Categories categories={categories} />
            <h1 className="features-text">Top featured listing</h1>
            <AdsList products={products} numCol={5}/>   
        </div>
        <Footer />
        
    </>
    );
};

export default Listings;
