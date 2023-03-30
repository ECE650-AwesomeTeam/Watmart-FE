import React from "react";
import styles from '../css/ListView.module.css';
import ListItem from './ListItem';

const ListView = ({ products }) => {
    return (
        <div className={styles.container}>
            { products.map(item => {
                const { id, title, images, price, content, category, quality, user, status } = item;
                return <ListItem name={title} img={"http://159.203.44.151:9999/media/" + images[0]} desc={content} price={price} id={id}/>
            })}
        </div>
    )
};

export default ListView;