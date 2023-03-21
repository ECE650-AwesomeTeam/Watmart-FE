import React from "react";
import '../css/Features.css';
import AdsItem from "./AdsItem";

const AdsList = ({ products }) => {
    return (
        <div className="features">
            <h1 className="features-text">Top featured listing</h1>
            <div className="container">
                {products.map(item => {
                    const { id, name, image, price, description } = item;
                    return <AdsItem img={image} desc={description} price={price} key={id}/>
                })}
            </div>
        </div>
    )
}

export default AdsList;