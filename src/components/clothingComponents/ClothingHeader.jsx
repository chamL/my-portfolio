import React, { useState } from "react";
import heartIcon from "../../assets/image/heart.svg"
import profileIcon from "../../assets/image/user.svg"
import cartIcon from "../../assets/image/grocery-store.png"



import "./clothingHeader.css"; // Import styles

const ClothingHeader = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    // Toggle Sidebar visibility
    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <div>
            <div className="clothing_header">
                <div className="clothing_hamburger">
                    <button className="hamburger_btn" onClick={toggleSidebar}>
                        &#9776;
                    </button>
                </div>
                <div className="clothing_header_middle">
                    <h1>SOTA/KLÆR</h1>
                </div>
                <div className="clothing_header_right">
                    <button>
                        <img src={heartIcon} alt="heart icon" />
                    </button>
                    <button>
                        <img src={profileIcon} alt="profile icon" />
                    </button>
                    <button id="shp-open">
                        <img src={cartIcon} alt="cart icon" />
                    </button>
                </div>
                {/* Sidebar */}
                <div className={`sidebar ${isSidebarVisible ? "show" : ""}`}>
                    <ul>
                        <li>
                            <img src="bilde/price-sticker.png" alt="" />
                            <a href="">Release</a>
                        </li>
                        <li>
                            <img src="bilde/transparency.png" alt="" />
                            <a href="">Find</a>
                        </li>
                        <li>
                            <img src="bilde/compass.png" alt="" />
                            <a href="">Explore</a>
                        </li>
                        <li>
                            <img src="bilde/edit.png" alt="" />
                            <a href="">Profile</a>
                        </li>
                        <li>
                            <img src="bilde/heart.png" alt="" />
                            <a href="">Favorites</a>
                        </li>
                        <li>
                            <img src="bilde/transaction.png" alt="" />
                            <a href="">Transaction</a>
                        </li>
                        <li>
                            <img src="bilde/customization.png" alt="" />
                            <a href="">Custom</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ClothingHeader;
