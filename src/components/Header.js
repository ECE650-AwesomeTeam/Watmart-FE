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
import useAuth from "../hooks/useAuth";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Header = ({ isSearchBarHidden }) => {
    const [click, setClick] = useState(false);
    const [open, setOpen] = useState(false);
    const handleClick = () => setClick(!click);
    const navigate = useNavigate();

    const { isAuthenticated, email, logout } = useAuth();

    console.log(isAuthenticated)

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

    const handleLogoutClick = () => {
        setOpen(true)
    }

    const handleCloseNo = () => {
        setOpen(false);
    }

    const handleCloseYes = () => {
        setOpen(false);
        logout();
      };


    const handleSearch = () => {
        navigate("/my-profile/quan.quach");
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
                    {isAuthenticated ? 
                    <Stack direction="row" spacing={2}>
                        <Avatar onClick={handleSearch}>{email.toUpperCase().charAt(0)}</Avatar>
                        <Button variant="outlined" color="error" onClick={handleLogoutClick}>
                            Logout
                        </Button>
                        <Dialog
                            open={open}
                            onClose={handleCloseNo}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                            {"Confirm to logout?"}
                            </DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Are you sure you want to logout?
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleCloseNo}>No</Button>
                            <Button onClick={handleCloseYes} autoFocus>
                                Yes
                            </Button>
                            </DialogActions>
                        </Dialog>
                        <Button variant="contained">
                            Post Ad
                        </Button>
                    </Stack>
                    : 
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li>
                            <p>
                                <span
                                    className="hyperlink"
                                    onClick={registerClickHandler}
                                >
                                    Register
                                </span>{" "}
                                or{" "}
                                <span
                                    className="hyperlink"
                                    onClick={loginClickHandler}
                                >
                                    Sign-in
                                </span>
                            </p>
                        </li>
                    </ul>}
                    {/* <button className="btn">Post ad</button> */}
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
