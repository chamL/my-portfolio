import arcade from '../../assets/image/arcade-game.png'
import retail from '../../assets/image/boutique.png'
import clothing from '../../assets/image/laundry.png'
import React, { useState } from "react";




function Projects() {
    return (
        <section>
            <div className="projects_div">
                <div id='arcade' className="project_card">
                    <img src={arcade} className="card_img_top" alt="project img" />
                    <div className="project_card_body">
                        <h3 className="project_card_title">Arcade</h3>
                        <p className="project_card_text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/arcade" className="project_card_btn">Go</a>
                    </div>
                </div>
                <div id='retail' className="project_card">
                    <img src={retail} className="card_img_top" alt="project img" />
                    <div className="project_card_body">
                        <h3 className="project_card_title">Retail</h3>
                        <p className="project_card_text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="project_card_btn">Go</a>
                    </div>
                </div>
                <div id='clothing' className="project_card">
                    <img src={clothing} className="card_img_top" alt="project img" />
                    <div className="project_card_body">
                        <h3 className="project_card_title">Clothing</h3>
                        <p className="project_card_text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/ClothingPage" className="project_card_btn">Go</a>
                    </div>
                </div>
                <div className="project_card">
                    <img src={arcade} className="card_img_top" alt="project img" />
                    <div className="project_card_body">
                        <h3 className="project_card_title">Arcade</h3>
                        <p className="project_card_text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="project_card_btn">Go</a>
                    </div>
                </div>
            </div>
            <div className="project_banner">
                <p>Skills...</p>
            </div>
        </section>

    );
}





export default Projects;