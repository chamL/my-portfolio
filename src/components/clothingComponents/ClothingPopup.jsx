import React, { useState } from "react";
import ClothingFooter from "./ClothingFooter";
import ClothingMain from "./ClothingMain";

// Reusable Popup component
const Popup = ({ isOpen, closePopup, children }) => {
    return (
        isOpen && (
            <dialog className="popup" open>
                <div className="close-btn">
                    <button onClick={closePopup}>&times;</button>
                </div>
                <div>{children}</div>
            </dialog>
        )
    );
};

// Main component to manage both Hamburger and Cart popups
const ClothingPopup = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const openCartPopup = () => setIsCartOpen(true);
    const closeCartPopup = () => setIsCartOpen(false);

    const openHamburgerPopup = () => setIsHamburgerOpen(true);
    const closeHamburgerPopup = () => setIsHamburgerOpen(false);

    return (
        <div>
            {/* Hamburger Menu Popup */}
            <button onClick={openHamburgerPopup}>Open Menu</button>
            <Popup isOpen={isHamburgerOpen} closePopup={closeHamburgerPopup}>
                <h2>Menu</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </Popup>

            {/* Shopping Cart Popup */}
            <button onClick={openCartPopup}>Open Cart</button>
            <Popup isOpen={isCartOpen} closePopup={closeCartPopup}>
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
        </div>
    );
};

export default ClothingPopup;
