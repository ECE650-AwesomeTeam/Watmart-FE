import React from "react";
import '../css/CategoryItem.css';

const CategoryItem = (props) => {
    return (
        <li className="category-item-container" key={props.key}>
            <div className="image-container">
                <img className="category-item-image" src={props.img} atl='' />
            </div>
            <div className="overlay" />
            <p className="category-item-text">{props.categoryName}</p>
        </li>
    );
}

export default CategoryItem;