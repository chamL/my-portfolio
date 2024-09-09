import React, { useState } from "react";
import profile from '../../assets/image/resume.png'
import traits from '../../assets/image/thinking.png'
import skill from '../../assets/image/skill-development.png'
import contact from '../../assets/image/contact-mail.png'
import Projects from '../../assets/image/website.png'
import potrait from '../../assets/image/portfolio_potrait.jpg'
import victor from '../../assets/image/victro_en.jpg'

function Hero() {
    // SETTING THE STATE OF THE CARDS USING THE ID AND SETTING profile TO START 
    const [activeCard, setActiveCard] = useState("profile")
    const [movePicture, setMovePicture] = useState(false);
    const [rotateArrow, setRotateArrow] = useState(false)

    const handleButtonClick = (cardId) => {
        setActiveCard(cardId);
    };

    const handlePicture = () => {

        setMovePicture((prevState) => !prevState);
        setRotateArrow((prevState) => !prevState);
    };




    return (
        <section>
            <div className="portfolio_hero">
                <div className="portfolio_hero_left">
                    <h1>About me </h1>

                    <div className="bio_cards">
                        <div className={`bio ${activeCard === "profile" ? "active" : "inactive"}`}>

                            <div id="profile" className="profile_div">
                                <div className="profile_top">
                                    <p> profile</p>
                                </div>
                                <ul>
                                    <li>Lamin Cham</li>
                                    <hr />
                                    <li>23/10/1995</li>
                                    <hr />
                                    <li>Lamin-cham@hotmail.com</li>
                                    <hr />
                                    <li>Norwegian / Gambian</li>
                                    <hr />
                                    <li>something</li>
                                </ul>

                            </div>
                        </div>


                        <div className={`bio ${activeCard === "contact" ? "active" : "inactive"}`}>

                            <div id="contact" className="contact_div">
                                <div className="contact_top">
                                    <p> Contact </p>
                                </div>
                                <ul>
                                    <li>lamin-cham@hotmail.com</li>
                                    <hr />
                                    <li>Number: 45485535</li>
                                    <hr />
                                    <li>gitHub: ChamL</li>
                                    <hr />
                                    <li>linkedin:</li>
                                    <hr />
                                    <li>linkedin:</li>



                                </ul>

                            </div>

                        </div>

                        <div className={`bio ${activeCard === "skills" ? "active" : "inactive"}`}>

                            <div id="skills" className="skills_div">
                                <div className="skills_top">
                                    <p> Skills</p>
                                </div>
                                <ul>
                                    <li>Html Css Javascript</li>
                                    <hr />
                                    <li>Java</li>
                                    <hr />
                                    <li>React</li>
                                    <hr />
                                    <li>MySQL</li>
                                    <hr />
                                    <li>webdev</li>
                                </ul>

                            </div>

                        </div>

                        <div className={`bio ${activeCard === "Projects" ? "active" : "inactive"}`}>

                            <div id="projects" className="Projects_div">
                                <div className="Projects_top">
                                    <p> Projects </p>
                                </div>
                                <ul>
                                    <li>Clothing Store</li>
                                    <hr />
                                    <li>Arcade Website</li>
                                    <hr />
                                    <li>Retail Store</li>
                                </ul>

                            </div>
                        </div>


                        <div className={`bio ${activeCard === "traits" ? "active" : "inactive"}`}>

                            <div id="traits" className="traits_div">
                                <div className="traits_top">
                                    <p> Traits</p>
                                </div>
                                <ul>
                                    <li>Effective communication skills</li>
                                    <hr />
                                    <li>Strong team player with collaborative spirit</li>
                                    <hr />
                                    <li>Enthusiastic learner and self-motivated individual</li>
                                    <hr />
                                    <li>Spreads joy and laughter</li>
                                    <hr />
                                    <li>Excellent time management skills</li>
                                </ul>

                            </div>
                        </div>
                    </div>


                    <div className="bio_btn">
                        <button id="profile" onClick={() => handleButtonClick("profile")}><img src={profile} alt="" /><p></p></button>
                        <button id="contact" onClick={() => handleButtonClick("contact")}><img src={contact} alt="" /></button>
                        <button id="skills" onClick={() => handleButtonClick("skills")}><img src={skill} alt="" /></button>
                        <button id="projects" onClick={() => handleButtonClick("Projects")}><img src={Projects} alt="" /></button>
                        <button id="traits" onClick={() => handleButtonClick("traits")}><img src={traits} alt="" /></button>
                    </div>

                </div>
                <div className="portfolio_hero_right">
                    <h1>Welcome to Lamin Cham portfolio</h1>
                    <div className="potrait_div">
                        <div className="intro_txt">
                            <p>Hello, my name is Lamin, and I am a web developer with a passion for crafting interactive and dynamic websites. I thrive on turning innovative ideas into engaging digital experiences that captivate users. With a keen eye for detail and a commitment to excellence, I strive to create websites that are not only visually appealing but also highly functional and user-friendly. Let's collaborate to bring your vision to life and create something truly extraordinary together!
                            </p>
                            <p>Hello, my name is Lamin, and I am a web developer with a passion for crafting interactive and dynamic websites. I thrive on turning innovative ideas into engaging digital experiences that captivate users. With a keen eye for detail and a commitment to excellence, I strive to create websites that are not only visually appealing but also highly functional and user-friendly. Let's collaborate to bring your vision to life and create something truly extraordinary together!
                            </p>
                        </div>
                        <div className={`image_div ${movePicture ? "moved" : ""}`}>
                            <div onClick={handlePicture} className={`img_arrow ${rotateArrow ? "rotaded" : ""}`}>&#10145;</div>
                            <img src={victor} alt="" />

                        </div>
                    </div>
                </div>
            </div>
            <div className="hero_banner">
                <p>Projects...</p>
            </div>
        </section>

    )
}
export default Hero;