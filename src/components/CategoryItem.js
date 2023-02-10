import React from "react";
import '../css/CategoryItem.css';

const CategoryItem = (props) => {
    return (
        <div className="category-item-container">
            <div className="image-container">
                <img className="category-item-image" src={props.img} atl='' />
            </div>
            
            <p className="category-item-text">{props.categoryName}</p>
        </div>
    );
}

export default CategoryItem;