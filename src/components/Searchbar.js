import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import '../css/Searchbar.css';

const Searchbar = () => {
    return (
        <div className="searchbar">
            <div className="content">
                <h1>Reduce, Reuse, Recycle with a click </h1>
                <p className="search-text">Search for pre-owned items in the largest e-commercial for Waterloo students.</p>
                <form className="search">
                    <div>
                        <input type="text" placeholder="What are you looking for?" />
                    </div>
                    <div className="radio">
                        <input type="radio" checked />
                        <label>Buy</label>
                        <input type="radio" checked />
                        <label>Sell</label>
                        <button type="submit">
                            <AiOutlineSearch className="icon" />
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
};
export default Searchbar;