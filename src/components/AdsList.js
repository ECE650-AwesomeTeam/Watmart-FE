import React from "react";
import '../css/Features.css';
import AdsItem from "./AdsItem";

const AdsList = ({ products, numCol }) => {
    return (
        <div className="features">
            <div style={{'--num-cols':`${numCol}`}} className="container">
                {products.map(item => {
                    const { id, name, image, price, description } = item;
                    return <AdsItem img={image} desc={description} price={price} key={id}/>
                })}
            </div>
        </div>
    )
}

export default AdsList;