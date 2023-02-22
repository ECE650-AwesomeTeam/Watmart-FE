import React from 'react'
import FilterListToggle from "./FilterListToggle";
import {categoryList, ratingList} from "./constant";
import './FilterPanel.css'

const FilterPanel = ({selectedCategory, selectToggle, selectedRating, selectRating}) => {
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
            {/* cusines */}
            {/*<div className="input-group">*/}
            {/*    <p className="label">Cuisine</p>*/}
            {/*    <*/}
            {/*        options={categoryList}*/}
            {/*        value={selectedCategory}*/}
            {/*        selectToggle={selectToggle}/>*/}
            {/*</div>*/}

            {/* price range */}
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