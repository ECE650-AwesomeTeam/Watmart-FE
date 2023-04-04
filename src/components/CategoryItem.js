import React from "react";
import '../css/CategoryItem.css';
import { useNavigate } from 'react-router-dom';
import ListingDetail from "./ListingDetail";
const CategoryItem = ({ img, categoryName }) => {
    const navigate = useNavigate();

    const categoryClickHandler = () => {
        navigate("/listings/"+categoryName);
    };
    return (
        <button data-testid="item" className="category-item-container"  onClick={categoryClickHandler}>
            <img className="" src={img} atl='' />
            <div className="overlay" />
            <p className="category-item-text">{categoryName}</p>
        </button>    
    );
}

export default CategoryItem;