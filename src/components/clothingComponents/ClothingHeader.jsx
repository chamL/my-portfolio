import React, { useState } from "react";
import "./clothingHeader.css"; // Import styles

const ClothingHeader = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <header>
            <div className="header-top">
                <div className="hamburger">
                    <button className="hamburger-btn" onClick={toggleSidebar}>
                        <div className="line-en"></div>
                        <div className="line-to"></div>
                        <div className="line-tre"></div>
                    </button>
                </div>
                <h1>SOTA/KLÆR</h1>
                <div className="header-buttons">
                    <button>
                        <a href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                        </a>
                    </button>
                    <button>
                        <svg
                            className="profile"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            id="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                            />
                        </svg>
                    </button>
                    <button id="shp-open">
                        <i className="cart-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 23 23"
                                className="chart-i"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                />
                            </svg>
                            <span className="cart-number">0</span>
                        </i>
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

            <div className="header-bottom">
                <ul>
                    <li><a href="#">TEES</a></li>
                    <li><a href="#">HOODIES</a></li>
                    <li><a href="#">HEADWEAR</a></li>
                    <li><a href="#">COLLECTIONS</a></li>
                </ul>
            </div>
        </header>
    );
};

export default ClothingHeader;
