import React, { useState } from "react";
import '../css/Header.css';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaRegTimesCircle} from 'react-icons/fa';
import {BsCart4} from 'react-icons/bs';
import Logo from '../images/logo-no-background.png';

const Header = () => {

    const  [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div className="header">
            <div className="container">
                <h1 className="logo-container">
                    <img className="logo" src={Logo} alt='' />
                    <span>Watmart</span>
                </h1>
                <div className="container1">
                    <ul className={ click ? 'nav-menu active' : 'nav-menu' }>  
                        <li><p><span className="hyperlink">Register</span> or <span className="hyperlink">Signin</span></p></li>
                    </ul>
                    <button className="btn">Post ad</button>
                </div>
                <div className="hamburger" onClick={handleClick}>
                    { click ? (<FaRegTimesCircle className="icon" />) : (<HiOutlineMenuAlt4 className="icon"/>)}
                    
                </div>
            </div>
        </div>
    )
}

export default Header;