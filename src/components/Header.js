import React, { useState } from "react";

import "../css/Header.css";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import Logo from "../assets/logo-no-background.png";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";


const Header = ({ isSearchBarHidden }) => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const navigate = useNavigate();

    const [category, setCategory] = React.useState("");

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const loginClickHandler = () => {
        navigate("/login");
    };

    const registerClickHandler = () => {
        navigate("/signup");
    };

    return (
        <div className="header">
            <div className="container">
                <h1 className="logo-container">
                    <img className="logo" src={Logo} alt="" />
                    <span>Watmart</span>
                </h1>
                {!isSearchBarHidden && <div className="searchpart">
                    <TextField
                        fullWidth
                        id="search"
                        label="What are you looking for?"
                        variant="standard"
                    />
                    <FormControl sx={{ m: 1, minWidth: 80 }} fullWidth>
                        <InputLabel id="select-small">
                            In which categories?
                        </InputLabel>
                        <Select
                            labelId="select-small"
                            id="select-small"
                            variant="standard"
                            defaultValue="*"
                            value={category}
                            label="category"
                            onChange={handleChange}
                        >
                            <MenuItem value="*">
                                <em>All categories</em>
                            </MenuItem>
                            <MenuItem value={"Technologies"}>
                                Technologies
                            </MenuItem>
                            <MenuItem value={"Textbooks"}>Textbooks</MenuItem>
                            <MenuItem value={"Lab"}>Lab Essentials</MenuItem>
                            <MenuItem value={"dictionaries"}>
                                Dictionaries
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="outlined" color="error">
                        Search
                    </Button>
                </div>}
                
                <div className="container1">
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li>
                            <p>
                                <span
                                    className="hyperlink"
                                    onClick={loginClickHandler}
                                >
                                    Register
                                </span>{" "}
                                or{" "}
                                <span
                                    className="hyperlink"
                                    onClick={registerClickHandler}
                                >
                                    Sign-in
                                </span>
                            </p>
                        </li>
                    </ul>
                    <button className="btn">Post ad</button>
                </div>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (
                        <FaRegTimesCircle className="icon" />
                    ) : (
                        <HiOutlineMenuAlt4 className="icon" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
