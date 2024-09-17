import React from "react";
import "./clothingFooter.css";

const ClothingFooter = () => {
    return (
        <footer>
            <div className="footer">
                <div className="sosial">
                    <div className="footer-logo">
                        <h1>SOTA/KLÆR</h1>
                    </div>
                    <div className="footer_socials">
                        <a href="#">
                            <img src="bilde/fb.svg" alt="Facebook" />
                        </a>
                        <a href="#">
                            <img src="bilde/insta.svg" alt="Instagram" />
                        </a>
                        <a href="#">
                            <img src="bilde/twitter.svg" alt="Twitter" />
                        </a>
                    </div>
                </div>

                <div className="info">
                    <h2>CONTACT US</h2>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Customer Service</a></li>
                    </ul>
                </div>

                <div className="contact-us">
                    <h2>SEND US A MESSAGE</h2>
                    <form className="form">
                        <label htmlFor="email">Your Email:</label>
                        <input id="email" type="email" />
                        <label htmlFor="message">Your Message:</label>
                        <textarea id="message"></textarea>
                        <button type="submit">SEND</button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default ClothingFooter;
