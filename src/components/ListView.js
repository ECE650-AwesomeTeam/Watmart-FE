import React from "react";
import styles from '../css/ListView.module.css';
import ListItem from './ListItem';

const ListView = ({ products }) => {
    return (
        <div className={styles.container}>
            { products.map(item => {
                const { id, name, image, price, description } = item;
                return <ListItem name={name} img={image} desc={description} price={price} key={id}/>
            })}
        </div>
    )
};

export default ListView;