import React, {useEffect, useState} from 'react';
import FilterPanel from "./FilterPanel";
import '../css/Filter.css';
import {dataList} from "./FilterConstants";


const Filter = () => {
    const [selectedQuality, setSelectedQuality] = useState(null);
    const [selectedRating, setSelectedRating] = useState([null]);
    const [selectedPrice, setSelectedPrice] = useState([1, 1000]);

    // calling backend
    const [list, setList] = useState(dataList);
    const [resultsFound, setResultsFound] = useState(true);
    const [searchInput, setSearchInput] = useState('');

    const [quality, setQuality] = useState([
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
        ! value ? null : setSelectedQuality(value)

    const handleSelectRating = (event, value) =>
        ! value ? null : setSelectedRating(value)

    const handleChangeChecked = (id) => {
        const qualityStateList = quality;
        const changeCheckedCuisines = qualityStateList.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setQuality(changeCheckedCuisines);
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

        // quality Filter
        if (selectedQuality) {
            updatedList = updatedList.filter(
                (item) => item.category === selectedQuality
            );
        }

        // category Filter
        const categoryChecked = quality
            .filter((item) => item.checked)
            .map((item) => item.label.toLowerCase());

        if (categoryChecked.length) {
            updatedList = updatedList.filter((item) =>
                categoryChecked.includes(item.cuisine)
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
    }, [selectedRating, selectedQuality, quality, searchInput, selectedPrice]);

    return (
            <div className='home_panelList-wrap'>
                <div className='home_panel-wrap'>
                    <FilterPanel
                        selectToggle={handleSelectCategory}
                        selectedQuality={selectedQuality}
                        selectRating={handleSelectRating}
                        selectedRating={selectedRating}
                        category={quality}
                        changeChecked={handleChangeChecked}
                        selectedPrice={selectedPrice}
                        changedPrice={handleChangePrice}
                    />
                </div>
            </div>
    );

}
export default Filter