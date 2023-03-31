import React from "react";
import '../css/Features.css';
import AdsItem from "./AdsItem";

const AdsList = ({ products, numCol }) => {
    return (
        <div className="features">
            <div style={{'--num-cols':`${numCol}`}} className="container">
                {products.map(item => {
                    const { id, title, images, price, content, category, quality, user, status } = item;
                    return <AdsItem img={images.map(url => { return "http://159.203.44.151:9999/media/" + url})} desc={content} price={price} key={id} category={category} name={title} id={id} quality={quality} status={status}/>
                })}
            </div>
        </div>
    )
}

export default AdsList;