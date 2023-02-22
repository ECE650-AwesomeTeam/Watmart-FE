import React from 'react'
import FilterListToggle from "./FilterListToggle";
import {categoryList, ratingList} from "./constant";
import './FilterPanel.css'
import CheckboxProton from "./CheckboxProton";
import SliderProton from "./SliderProton";

const FilterPanel = ({
                         selectedCategory,
                         selectToggle,
                         selectedRating,
                         selectRating,
                         cuisines,
                         changeChecked,
                         selectedPrice,
                         changedPrice, }) => {
    return (
        <div>
            {/* Category */}
            <div className="input-group">
                <p className="label">Category</p>
                <FilterListToggle
                    options={categoryList}
                    value={selectedCategory}
                    selectToggle={selectToggle}/>
            </div>
            {/* cusisine */}
            <div className="input-group">
                <p className="label">Cuisines</p>
                {cuisines.map((cuisine) => (
                    <CheckboxProton
                        key={cuisine.id}
                        cuisine={cuisine}
                        changeChecked={changeChecked}
                    />
                ))}
            </div>

            {/* price range */}
            <div className='input-group'>
                <p className='label-range'>Price Range</p>
                <SliderProton value={selectedPrice} changedPrice={changedPrice} />
            </div>

            {/* star range */}
            <div className="input-group">
                <p className="label">Rating</p>
                <FilterListToggle
                    options={ratingList}
                    value={selectedRating}
                    selectToggle={selectRating}/>
            </div>

        </div>
    )
}

export default FilterPanel;