import React from "react";
import SearchBar from "../../components/Home/SearchBar";
import List from "../../components/Home/List";
import FilterPanel from "../../components/Home/FilterPanel";
import './page.css';
const Home = () => {
    return (
        <div className='home'>
            {/*search bar */}
            <SearchBar />

            <div className = 'home_panelList-wrap'>
                <div className='home_panel-wrap'>
                    {/* side Panels */}
                    <FilterPanel />
                </div>
                <div className='home_list-wrap'>
                    {/* list & empty view */}
                    <List />
                </div>
            </div>
        </div>
    );
}

export default Home;
