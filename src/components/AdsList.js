import React from "react";
import '../css/Features.css';
import AdsItem from "./AdsItem";

const AdsList = (props) => {
    return (
        <div className="features">
            <h1 className="features-text">Top featured listing</h1>
            <div className="container">
                {props.items.map((ad,i) => {
                    return <AdsItem img={ad.ads_img} desc={ad.ads_description} price={ad.ads_price} key={i}/>
                })}
            </div>
        </div>
    )
}

export default AdsList;