import React, {useState, useEffect} from "react";
import styles from '../css/Gallery.module.css';

const Gallery = ({ images = [{url: ""}] }) => {
    const [mainImage, setMainImage] = useState(images[0]); 
    return (
        <div className={styles.container}>
            <div className={`${styles.grid} ${styles["grid-four-column"]}`}>
                {images.map((item,index) => {
                    return (
                            <img
                                src={item.url}
                                alt={item.filename}
                                key={index}
                                onClick={() => setMainImage(item)}
                            />
                    )
                })}
            </div>
            <div className={styles["main-image"]}>
                <img src={mainImage.url} alt={mainImage.filename} />
            </div>
        </div>
    )
};

export default Gallery;