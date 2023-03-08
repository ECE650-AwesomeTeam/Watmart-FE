import React from "react";
import '../css/Categories.css';
import CategoryItem from "./CategoryItem";

const Categories = (props) => {

    return (
        <div className="categories" >
            <h1 className="feature-title">Featured Categories</h1>
            <ul className="category-grid">
                {props.categories.map((item,i) => {
                    return <CategoryItem key={i} img={item.category_img} categoryName={item.category_name}  />
                })}
                
            </ul>      
        </div>
    );
}

export default Categories;