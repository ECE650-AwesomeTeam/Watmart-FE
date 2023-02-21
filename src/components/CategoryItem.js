import React from "react";
import '../css/CategoryItem.css';
import { useNavigate } from 'react-router-dom';

const CategoryItem = (props) => {
    const navigate = useNavigate();
    const categoryClickHandler = () => {
        console.log("hello");
        navigate("/signup");
    };
    return (
        <button className="category-item-container" key={props.key} onClick={categoryClickHandler}>
            <div className="image-container">
                <img className="category-item-image" src={props.img} atl='' />
            </div>
            <div className="overlay" />
            <p className="category-item-text">{props.categoryName}</p>
        </button>
    );
}

export default CategoryItem;