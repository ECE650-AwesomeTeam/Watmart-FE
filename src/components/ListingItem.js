import React from "react";
import '../css/ListingItem.css';

const ListingItem = (props) => {
    return (
        <div className="listing-container">
            <img src={props.img} atl='' />
            <div >

            </div>
        </div>
    )
}

export default ListingItem;