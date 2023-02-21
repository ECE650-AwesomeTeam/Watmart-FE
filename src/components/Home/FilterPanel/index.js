import React from 'react'
import CheckboxProton from "./CheckboxProton";
import FilterListToggle from "./FilterListToggle";
import SliderProton from "./SliderProton";
import { categoryList, ratingList } from './filterFake';
import './styles.css';
const FilterPanel = ({
                         selectedCategory,
                         selectCategory,
                         selectedRating,
                         selectedPrice,
                         selectRating,
                         cuisines,
                         changeChecked,
                         changePrice,
                     }) => (
    <div>
        <div className='input-group'>
            <p className='label'>Category</p>
            <FilterListToggle
                options={categoryList}
                value={selectedCategory}
                selectToggle={selectCategory}
            />
        </div>
        <div className='input-group'>
            <p className='label'>Cuisine</p>
            {cuisines.map((cuisine) => (
                <CheckboxProton
                    key={cuisine.id}
                    cuisine={cuisine}
                    changeChecked={changeChecked}
                />
            ))}
        </div>
        <div className='input-group'>
            <p className='label-range'>Price Range</p>
            <SliderProton value={selectedPrice} changePrice={changePrice} />
        </div>
        <div className='input-group'>
            <p className='label'>Star Rating</p>
            <FilterListToggle
                options={ratingList}
                value={selectedRating}
                selectToggle={selectRating}
            />
        </div>
    </div>
);

export default FilterPanel;