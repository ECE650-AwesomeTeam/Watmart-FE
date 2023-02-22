import React, {useState} from 'react';
import SearchBar from "./Filter/SearchBar";
import FilterPanel from "./Filter/FilterPanel";
import List from "./Filter/List";
import '../css/Filter.css';

const Filter = () => {
    const [selectedCategory, setSelectedCategory] = useState(initialState);

    return (
        <div className='home'>
            {/* Search Bar */}
            <SearchBar />
            <div className='home_panelList-wrap'>
                 Filter Panel
                <div className='home_panel-wrap'>
                    <FilterPanel
                        selectedToggle={handleSelectToggle}
                        selectedCategory={selectedCategory}/>
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