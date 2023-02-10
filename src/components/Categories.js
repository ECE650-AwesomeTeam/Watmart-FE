import React from "react";
import '../css/Categories.css';
import CategoryItem from "./CategoryItem";

import Apt1 from '../images/apt1.jpg';
import Apt2 from '../images/apt2.jpg';
import Apt3 from '../images/apt3.jpg';
const Best = () => {
    return (
        <div className="categories">
            <h1>Find top-notch pre-owned items</h1>
            <div>
                <p><span className="bold">All</span></p>
                <p>Furniture</p>
                <p>Electronics</p>
                <p>Clothing and accessories</p>
                <p>Home goods</p>
            </div>
            <div className="container">
                <CategoryItem img={Apt1} categoryName="Electronics" />
                <CategoryItem img={Apt2} categoryName="Furniture" />
                <CategoryItem img={Apt3} categoryName="Clothing" />
            </div>
            <button className="btn">View all</button>
        </div>
    );
}

export default Best;