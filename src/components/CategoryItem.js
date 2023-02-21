import React from "react";
import '../css/CategoryItem.css';
import { useNavigate } from 'react-router-dom';
import ListingDetail from "./ListingDetail";
const CategoryItem = (props) => {
    const navigate = useNavigate();

    const categoryClickHandler = () => {
        navigate("/listings");
    };
    return (
        <button className="category-item-container" key={props.key} onClick={categoryClickHandler}>
            <img className="" src={props.img} atl='' />
            <div className="overlay" />
            <p className="category-item-text">{props.categoryName}</p>
        </button>    
    );
}

export default CategoryItem;