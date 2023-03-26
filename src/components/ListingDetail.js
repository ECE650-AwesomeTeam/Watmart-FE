import React, { useEffect } from "react";
import Header from './Header';
import { useParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";
import styles from '../css/ListingDetail.module.css';

const API = "https://api.pujakaitem.com/api/products";

const ListingDetail = () => {
    const { getSingleProduct, singleProduct } = useProductContext();
    const { id } = useParams();
    
    const {
        name,
        company,
        price,
        description,
        category,
        stock,
        stars,
        reviews,
        image,
      } = singleProduct;

    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`);
    },[]);
    
    return (
        <>
            <Header />
        </>
    )
};

export default ListingDetail;