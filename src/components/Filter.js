import React, {useEffect, useState} from 'react';
import SearchBar from "./Filter/SearchBar";
import FilterPanel from "./Filter/FilterPanel";
import List from "./Filter/List";
import '../css/Filter.css';
import {dataList} from "./Filter/FilterConstants";

const Filter = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedRating, setSelectedRating] = useState([null]);
    const [selectedPrice, setSelectedPrice] = useState([1, 3000]);

    // calling backend
    const [list, setList] = useState(dataList);
    const [resultsFound, setResultsFound] = useState(true);
    const [searchInput, setSearchInput] = useState('');

    const [cuisines, setCuisines] = useState([
        {
            id:1,
            checked:false,
            label:'Electronics',
        },
        {
            id:2,
            checked:false,
            label:'Furniture',
        },
        {
            id:3,
            checked:false,
            label:'Clothing',
        },
        {
            id:4,
            checked:false,
            label:'Books',
        },
    ])
    const handleSelectCategory = (event, value) =>
        ! value ? null : setSelectedCategory(value)

    const handleSelectRating = (event, value) =>
        ! value ? null : setSelectedRating(value)

    const handleChangeChecked = (id) => {
        const cusinesStateList = cuisines;
        const changeCheckedCuisines = cusinesStateList.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setCuisines(changeCheckedCuisines);
    };

    const handleChangePrice = (event, value) => {
        setSelectedPrice(value);
    };

    const applyFilters = () => {
        let updatedList = dataList;

        // Rating Filter
        if (selectedRating) {
            updatedList = updatedList.filter(
                (item) => parseInt(item.rating) === parseInt(selectedRating)
            );
        }

        // Category Filter
        if (selectedCategory) {
            updatedList = updatedList.filter(
                (item) => item.category === selectedCategory
            );
        }

        // Cuisine Filter
        const cuisinesChecked = cuisines
            .filter((item) => item.checked)
            .map((item) => item.label.toLowerCase());

        if (cuisinesChecked.length) {
            updatedList = updatedList.filter((item) =>
                cuisinesChecked.includes(item.cuisine)
            );
        }

        // Search Filter
        if (searchInput) {
            updatedList = updatedList.filter(
                (item) =>
                    item.productName.toLowerCase().search(searchInput.toLowerCase().trim()) !==
                    -1
            );
        }

        // Price Filter
        const minPrice = selectedPrice[0];
        const maxPrice = selectedPrice[1];

        updatedList = updatedList.filter(
            (item) => item.price >= minPrice && item.price <= maxPrice
        );

        setList(updatedList);

        !updatedList.length ? setResultsFound(false) : setResultsFound(true);
    };

    useEffect(() => {
        applyFilters();
    }, [selectedRating, selectedCategory, cuisines, searchInput, selectedPrice]);

    return (
        <div className='home'>
            {/* Search Bar */}
            <SearchBar
                value={searchInput}
                changeInput={(e) => setSearchInput(e.target.value)} />
            <div className='home_panelList-wrap'>
                <div className='home_panel-wrap'>
                    <FilterPanel
                        selectToggle={handleSelectCategory}
                        selectedQuality={selectedCategory}
                        selectRating={handleSelectRating}
                        selectedRating={selectedRating}
                        category={cuisines}
                        changeChecked={handleChangeChecked}
                        selectedPrice={selectedPrice}
                        changedPrice={handleChangePrice}
                    />
                </div>
                {/* List & Empty View */}
                <div className='home_list-wrap'>
                    <List list={list} />
                </div>
            </div>
        </div>
    );

}
export default Filter