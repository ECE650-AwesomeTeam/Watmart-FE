import React from "react";
import '../css/ListingItem.css';
import {FaRegHeart} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AdsItem = (props) => {
    const navigate = useNavigate();

    const listingClickHandler = () => {
        navigate("/listing/300");
    };

    return (
        <figure data-testid="listing" onClick={listingClickHandler}>
           <img src={props.img} atl='' />
       
       
       <div className="ads-desc-section">
           <p className="ads-desc">{props.desc}</p>
           <div className="ads-desc-bottom">
               <p className="ads-price">$ {props.price}</p>
               <FaRegHeart className="ads-bookmark-icon" />
           </div>
       </div>
        </figure>
        
    )
}

export default AdsItem;