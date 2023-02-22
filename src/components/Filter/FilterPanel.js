import React from 'react'
import FilterListToggle from "./FilterListToggle";
import {categoryList} from "./constant";


const FilterPanel = ({selectedCategory, selectedToggle}) => {
    return (
        <div>
            {/* Category */}
            <div className="input-group">
                <p className="label">Category</p>
                <FilterListToggle
                    options={categoryList}
                    value={selectedCategory}
                    selectToggle={selectedToggle}/>
            </div>
            {/* cusines */}
            {/* price range */}
            {/* star range */}


        </div>
    )
}

export default FilterPanel;