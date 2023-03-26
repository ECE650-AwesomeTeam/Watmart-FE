import React from "react";
import '../css/Features.css';
import AdsItem from "./AdsItem";

const AdsList = ({ products, numCol }) => {
    return (
        <div className="features">
            <div style={{'--num-cols':`${numCol}`}} className="container">
                {products.map(item => {
                    const { id, name, image, price, description, category } = item;
                    return <AdsItem img={image} desc={description} price={price} key={id} category={category} name={name} id={id}/>
                })}
            </div>
        </div>
    )
}

export default AdsList;