import React from "react";
import '../css/Categories.css';
import CategoryItem from "./CategoryItem";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import Apt1 from '../assets/apt1.jpg';
import Apt2 from '../assets/apt2.jpg';
import Apt3 from '../assets/apt3.jpg';
import Apt4 from '../assets/apt4.jpg';
import Apt5 from '../assets/apt5.jpg';
import Apt6 from '../assets/apt6.jpg';
import Apt7 from '../assets/apt7.jpg';
import Apt8 from '../assets/apt8.jpg';
import Apt9 from '../assets/apt9.jpg';

const Categories = () => {

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
        },
    ];
    return (
        <div className="categories" >
            <h1 className="feature-title">Featured Categories</h1>
            <ul className="category-grid">
                {categories.map(item => {
                    return <CategoryItem img={item.category_img} categoryName={item.category_name} key={item.key} />
                })}
            </ul>      
        </div>
    );
}

export default Categories;