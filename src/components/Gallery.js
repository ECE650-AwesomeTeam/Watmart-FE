import React, {useState, useEffect} from "react";
import styles from '../css/Gallery.module.css';

const Gallery = ({ images }) => {
    const [mainImage, setMainImage] = useState();
    useEffect(() => {
        console.log(images);
        setMainImage(images[0]);
    },[images]);
    console.log("New gallery"); 
    return (
        <div className={styles.container}>
            <div className={`${styles.grid} ${styles["grid-four-column"]}`}>
                {images.map((item,index) => {
                    return (
                            <img
                                src={item}
                                alt={""}
                                key={index}
                                onClick={() => setMainImage(item)}
                            />
                    )
                })}
            </div>
            <div className={styles["main-image"]}>
                <img src={mainImage} alt={""} />
            </div>
        </div>
    )
};

export default Gallery;