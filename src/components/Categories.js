import React from "react";
import '../css/Categories.css';
import CategoryItem from "./CategoryItem";

const Categories = (props) => {

    return (
        <div className="categories" >
            <h1 className="feature-title">Featured Categories</h1>
            <ul className="category-grid">
                {props.categories.map(item => {
                    return <CategoryItem img={item.category_img} categoryName={item.category_name} key={item.key} />
                })}
                
            </ul>      
        </div>
    );
}

export default Categories;