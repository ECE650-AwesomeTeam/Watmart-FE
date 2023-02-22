import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({value, changeInput}) => (
        <div className='searchBar-wrap'>
            <SearchIcon className='searchBar-icon' />
            <input
                type='text'
                placeholder ='smalldick'
                value={value}
                onChange={changeInput}
            />
            <h2>search bar</h2>
        </div>
);

export default SearchBar;