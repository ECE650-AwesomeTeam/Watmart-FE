import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './style.css'
const SearchBar = ({value, changeInput}) => (
        <div classNmae='searchBar-wrap'>
            <SearchIcon className = 'searchBar-icon' />
            <input
                type='text'
                placeholder='small dick'
                value={value}
                onChange={changeInput}
            />
        </div>
    );

export default SearchBar