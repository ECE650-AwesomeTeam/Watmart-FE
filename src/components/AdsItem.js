import React from "react";
import '../css/ListingItem.css';
import {FaRegHeart} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AdsItem = (props) => {
    const navigate = useNavigate();

    const listingClickHandler = () => {
        console.log("Click here");
        navigate("/listing/:id");
    };

    return (
        <div className="listing-container" key={props.key} onClick={listingClickHandler}>
            <img src={props.img} atl='' />
            <div className="ads-desc-section">
                <p className="ads-desc">{props.desc}</p>
                <div className="ads-desc-bottom">
                    <p className="ads-price">$ {props.price}</p>
                    <FaRegHeart className="ads-bookmark-icon" />
                </div>
            </div>
        </div>
    )
}

export default AdsItem;