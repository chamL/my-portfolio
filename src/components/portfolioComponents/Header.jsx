
import React, { useState } from "react";
import logo from '../../assets/image/rasta.png'


<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet"></link>

function Header() {

    const [navOpen, setnavOpen] = useState(false);

    const toggleNav = () => {
        const navigation = document.getElementById('nav');
        if (!navOpen) {
            navigation.style.transform = 'translateX(0)'
        }
        else {
            navigation.style.transform = 'translateX(205px)'
        }
        setnavOpen(!navOpen);
    };



    return (
        <header className="portfolio_header">
            <div className="portfolio_header_left">
                <img src={logo} alt="logo" />

            </div>

            <div className="portfolio_header_center">portfolio...
            </div>

            <div className="portfolio_header_right">
                <button id="nav_btn" onClick={toggleNav} className="portfolio_hamburger">&#9776;</button>

                <div>
                    <ul className="nav_ul" id="nav">
                        <li>Intro</li>
                        <li>Projects</li>
                        <li>Skills</li>
                        <li>Experience</li>
                        <li>CV</li>
                        <li>Outro</li>

                    </ul>
                </div>
            </div>
        </header>

    );
}

export default Header;
