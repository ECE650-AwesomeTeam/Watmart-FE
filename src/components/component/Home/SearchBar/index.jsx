import React from 'react';
import './styles.css';
import PropTypes from "prop-types";


function SearchIcon(props) {
    return null;
}

SearchIcon.propTypes = {className: PropTypes.string};
const SearchBar = ({ value, changeInput }) => (
  <div className='searchBar-wrap'>
    <SearchIcon className='searchBar-icon' />
    <input
      type='text'
      placeholder='Woodland Hills'
      value={value}
      onChange={changeInput}
    />
  </div>
);

export default SearchBar;
