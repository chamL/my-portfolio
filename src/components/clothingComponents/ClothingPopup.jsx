import React, { useState } from "react";
import ClothingFooter from "./ClothingFooter";

const Popup = ({ isOpen, closePopup, children }) => {
    return (
        isOpen && (
            <dialog className="popup">
                <div className="close-btn">
                    <button onClick={closePopup}>&times;</button>
                </div>
                <div>{children}</div>
            </dialog>
        )
    );
};

export const ProfilePopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => setIsOpen(true);
    const closePopup = () => setIsOpen(false);

    return (
        <>
            <button onClick={openPopup}>Open Profile</button>
            <Popup isOpen={isOpen} closePopup={closePopup}>
                <h2>LOG IN</h2>
                <form>
                    <div className="form-element">
                        <label htmlFor="email">E-mail</label>
                        <input id="email" placeholder="Enter email" type="email" />
                    </div>
                    <div className="form-element">
                        <label htmlFor="password">Password</label>
                        <input id="password" placeholder="Enter password" type="password" />
                    </div>
                    <button type="submit">Sign In</button>
                </form>
            </Popup>
        </>
    );
};

export const CartPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => setIsOpen(true);
    const closePopup = () => setIsOpen(false);

    return (
        <>
            <button onClick={openPopup}>Open Cart</button>
            <Popup isOpen={isOpen} closePopup={closePopup}>
                <h1>SHOPPING CART</h1>
                <div className="shopping-products">
                    {/* Add Cart Products Here */}
                </div>
                <hr />
                <div className="shp-btm">
                    <button>Continue Shopping</button>
                    <div className="shp-btm-right">
                        <button>Checkout</button>
                        <div>
                            <p>Total Sum</p>
                            <span className="small-txt">3 Items</span>
                            <span className="shp-btm-total">&#36;450,00</span>
                        </div>
                    </div>
                </div>
            </Popup>
        </>
    );
};
export default ClothingFooter;