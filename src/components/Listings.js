import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Searchbar from "./Searchbar";
import Categories from './Categories';
import Footer from "./Footer";
import AdsList from "./AdsList";
import '../css/main.css';
import Apt1 from '../assets/apt1.jpg';
import Apt2 from '../assets/apt2.jpg';
import Apt3 from '../assets/apt3.jpg';
import Apt4 from '../assets/apt4.jpg';
import Apt5 from '../assets/apt5.jpg';
import Apt6 from '../assets/apt6.jpg';
import Apt7 from '../assets/apt7.jpg';
import Apt8 from '../assets/apt8.jpg';
import Apt9 from '../assets/apt9.jpg';

import Tapes from '../assets/tapes.jpg';
import Motorbikes from '../assets/motorbikes.jpg';
import Motobike1 from '../assets/motobike1.jpg';
import Kitchen from '../assets/kitchen.jpg';
import Sportitems from '../assets/sportitems.jpg';
import Kettle from '../assets/kettle.jpg';
import Kebab from '../assets/kebab.jpg';
import Bed4 from '../assets/bed4.jpg';
import LivingRoom from '../assets/living-room.jpg';
import Bathroom2 from '../assets/bath2.jpg';

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
            category_name: "Collectibles",
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
    const ads = [
        {
            ads_key: getRandomIntInclusive(0,100),
            ads_img: Tapes,
            ads_price: 800,
            ads_description: "Student needs to live in accommodation Kitchener (32082).Student needs to live in accommodation Kitchener (32082)",     
        },
        {
            ads_key: getRandomIntInclusive(0,100),
            ads_img: Motorbikes,
            ads_price: 1800,
            ads_description: "2007 Porsche cayman",     
        },
        {
            ads_key: getRandomIntInclusive(0,100),
            ads_img: Motobike1,
            ads_price: 2800,
            ads_description: "2010 Hyundai Genesis Coupe Certified.",     
        },
        {
            ads_key: getRandomIntInclusive(0,100),
            ads_img: Kitchen,
            ads_price: 400,
            ads_description: "hardwood floors and open up the kitchen area.",     
        },
        {
            ads_key: getRandomIntInclusive(0,100),
            ads_img: Sportitems,
            ads_price: 2400,
            ads_description: "Solid stone carved Male and Female Golfer sculpture . 9 inches. Please see my other posts for additional golf items and decor.",     
        },
        {
            ads_key: getRandomIntInclusive(0,100),
            ads_img: Kettle,
            ads_price: 200,
            ads_description: "Like new kettle.Want gone asap",     
        },
        {
            ads_key: getRandomIntInclusive(0,100),
            ads_img: Kebab,
            ads_price: "Please contact",
            ads_description: "Delicious meals.",     
        },
        {
            ads_key: getRandomIntInclusive(0,100),
            ads_img: Bed4,
            ads_price: 199,
            ads_description: "KITCHENER’S MATTRESS- QUEEN 2” PILLOW TOP MATTRESS FOR $199 ONLY",     
        },
        {
            ads_key: getRandomIntInclusive(0,100),
            ads_img: LivingRoom,
            ads_price: "Please contact",
            ads_description: "***Huge Ultraflex Mattress Clearance on all Mattress in a Box***",     
        },
        {
            ads_key: getRandomIntInclusive(0,100),
            ads_img: Bathroom2,
            ads_price: 175.93,
            ads_description: "Delicious meals.",     
        },
        {
            ads_key: getRandomIntInclusive(0,100),
            ads_img: Kebab,
            ads_price: "Please contact",
            ads_description: "Delicious meals.",     
        },
        {
            ads_key: getRandomIntInclusive(0,100),
            ads_img: Kebab,
            ads_price: "Please contact",
            ads_description: "Delicious meals.",     
        },
    ];

    return (
    <>
        <Header />
        <Searchbar />
        <div className="listingsContainer">
            <Categories categories={categories} />
            <AdsList items={ads} />   
        </div>
        <Footer />
        
    </>
    );
};

export default Listings;