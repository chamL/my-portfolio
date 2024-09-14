import React from 'react';
import profileImage from '../../assets/image/rasta.png';



function ArcadeFrameHeader() {
    return (
        <header><div
            className='arcade_frame_header_left'>
            <a className="backButton backButton_left" href="/arcade" >
                &#10140;
                <div className="backButton_animation"></div>
            </a>
        </div>
            <div className='arcade_frame_header_center'>
                <h1>Snake input own h1</h1>
            </div>

            <div className='arcade_frame_header_right'>
                <a href="/" className="backButton homeButton">
                    <img src={profileImage} alt="" />
                    <div className="backButton_animation"></div>
                </a>
            </div>
        </header>

    );
}

export default ArcadeFrameHeader;
