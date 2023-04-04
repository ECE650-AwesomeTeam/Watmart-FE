import React, { useEffect, useState } from "react";
import Header from './Header';
import { useParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";
import styles from '../css/ListingDetail.module.css';
import PageNavigation from "./PageNavigation";
import Gallery from "./Gallery";
import FormatPrice from "./FormatPrice";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Footer from "./Footer";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Dialog } from "@mui/material";
import Button from "@mui/material/Button";
import useAuth from '../hooks/useAuth';

const ListingDetail = () => {
    const { getSingleProduct, singleProduct, isSingleLoading } = useProductContext();
    const { submitOrder, submit_order_IDs } = useAuth();
    const { id } = useParams();
    const [openDialog, setOpenDialog] = useState(false);
    const [note, setNote] = useState("");
    const [buyBtnDisabled, setBuyBtnDisabled] = useState(false);

    const {
        title, 
        images, 
        price, 
        content, 
        category, 
        quality, 
        user, 
        status } = singleProduct;
    console.log("status = "+ status);
    useEffect(() => {
        getSingleProduct(id);
    },[]);

    useEffect(() => {
        if (submit_order_IDs.length > 0) {
            const last_order = submit_order_IDs[submit_order_IDs.length-1];
            if (last_order.productId === id) {
                // getSingleProduct(id);
                setBuyBtnDisabled(true);
            }
        }
    },[submit_order_IDs]);
    
    if (isSingleLoading) {
        return <div className={styles.page_loading}>Loading.....</div>;
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setNote("");
    };

    const handleSubmitOrder = () => {
        submitOrder(id, note, user);
        setOpenDialog(false);
        setNote("");
    };

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleNoteInput = (event) => {
        setNote(event.target.value);
    };

    return (
        <>
        <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Message to the seller"}
            </DialogTitle>
            <DialogContent>
                <input
                    className={styles["dialog-input"]}
                    type="text"
                    name="text"
                    placeholder='Location, time, phone, ect...'
                    onChange={handleNoteInput}
                    value={note}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseDialog}>Cancel</Button>
                <Button 
                onClick={handleSubmitOrder}
                sx={{
                    bgcolor: 'red',
                    borderRadius: '5px',
                    color: 'white',
                    '&:hover': {
                        bgcolor: 'red',
                      },
                      '&:active': {
                        bgcolor: 'red',
                      },
                }}>
                    Submit order
                </Button>
            </DialogActions>
        </Dialog>
        <div className={styles["root-container"]}>
            <Header isSearchBarHidden={true}/>
            <PageNavigation title={title} />
            <div className={styles.container}>
                <div className={`${styles.grid} ${styles["grid-two-column"]}`}>
                    <div className={styles.product_images}>
                        <Gallery images={images.map(url => { return "http://159.203.44.151:9999/media/" + url})} />
                    </div>
                    <div className={styles["product-data"]}>
                        <h2>{title}</h2>
                        <p className={styles["product-data-price"]}>
                            Price: <FormatPrice price={price} />
                        </p>
                        <p>{content}</p>
                        <div className={styles["product-status"]}>
                            <div className={styles["product-item-status"]}>
                                <TbTruckDelivery className={styles["status-icon"]} />
                                <p>Free Delivery</p>
                            </div>
                            <div className={styles["product-item-status"]}>
                                <TbReplace className={styles["status-icon"]} />
                                <p>Free Return</p>
                            </div>
                            <div className={styles["product-item-status"]}>
                                <TbReplace className={styles["status-icon"]} />
                                <p>Free Replacement</p>
                            </div>
                            <div className={styles["product-item-status"]}>
                                <MdSecurity className={styles["status-icon"]} />
                                <p>3 Year Warranty</p>
                            </div>
                        </div>
                        <div className={styles["product-data-info"]}>
                            <p>Availability: <span>{status === "Available" ? "In stock" : "Not available"}</span></p>
                            <p>Seller: <span>{user}</span></p>
                            <p>Condition: <span>{quality}</span></p>
                        </div>
                        <hr />
                        { status === "Available" && <button 
                            className={`btn ${buyBtnDisabled ? styles["btn-disable"]:""}`} 
                            disabled={buyBtnDisabled}
                            onClick={handleOpenDialog}>{buyBtnDisabled ? "Ordered" :"Buy item"}</button>}
                    </div>
                </div>
                
            </div>
        </div>
        <Footer />
        </>
    )
};

export default ListingDetail;