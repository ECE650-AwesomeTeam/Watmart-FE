import React, {useState} from 'react';
import SearchBar from "./Filter/SearchBar";
import FilterPanel from "./Filter/FilterPanel";
import List from "./Filter/List";
import '../css/Filter.css';

const Filter = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedRating, setSelectedRating] = useState(null);
    const handleSelectCategory = (event, value) =>
        ! value ? null : setSelectedCategory(value)

    const handleSelectRating = (event, value) =>
        ! value ? null : setSelectedRating(value)

    return (
        <div className='home'>
            {/* Search Bar */}
            <SearchBar />
            <div className='home_panelList-wrap'>
                 Filter Panel
                <div className='home_panel-wrap'>
                    <FilterPanel
                        selectToggle={handleSelectCategory}
                        selectedCategory={selectedCategory}
                        selectRating={handleSelectRating}
                        selectedRating={selectedRating}
                    />
                </div>
                {/* List & Empty View */}
                <div className='home_list-wrap'>
                    <List />
                </div>
            </div>
        </div>
    );

}
export default Filter