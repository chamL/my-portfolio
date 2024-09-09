import React from 'react';



function ArcadeFrameHeader() {
    return (
        <header>
            <a className="stick_btn left_btn" href="/arcade">
                <img src="bilder/left.png" alt="" />
                <div className="stick_left_back"></div>
            </a>
            <h1>Snake</h1>
            <a href="#" className="stick_btn right_btn">
                <img src="bilder/people.png" alt="" />
                <div className="stick_right_back"></div>
            </a>
        </header>
    );
}

export default ArcadeFrameHeader;
