import React from 'react'
import FilterListToggle from "./FilterListToggle";
import {ItemConditions, ratingList} from "./FilterConstants";
import '../css/FilterPanel.css'
import FilterCheckboxProton from "./FilterCheckboxProton";
import FilterSliderProton from "./FilterSliderProton";

const FilterPanel = ({
                         selectedQuality,
                         selectToggle,
                         selectedRating,
                         selectRating,
                         category,
                         changeChecked,
                         selectedPrice,
                         changedPrice, }) => {
    return (
        <div>
            {/* Quality */}
            <div className="input-group">
                <p className="label">Quality</p>
                <FilterListToggle
                    options={ItemConditions}
                    value={selectedQuality}
                    selectToggle={selectToggle}/>
            </div>
            {/* Category */}
            <div className="input-group">
                <p className="label">Category</p>
                {category.map((category_item) => (
                    <FilterCheckboxProton
                        key={category_item.id}
                        cuisine={category_item}
                        changeChecked={changeChecked}
                    />
                ))}
            </div>

            {/* price range */}
            <div className='input-group'>
                <p className='label-range'>Price Range</p>
                <FilterSliderProton value={selectedPrice} changedPrice={changedPrice} />
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