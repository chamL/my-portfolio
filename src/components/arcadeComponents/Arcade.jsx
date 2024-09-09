import React, { useState } from "react";
import logo from "../../assets/image/rasta.png"
import arcadeGameImage from '../../assets/image/arcade-game.png';
import backgroundImageCoin from "../../assets/image/background_three.jpeg";
import backgroundImageOne from "../../assets/image/background.jpeg";
import backgroundImageTwo from "../../assets/image/background_two.jpeg";
import backgroundImageFour from "../../assets/image/background_four.jpeg";
import backgroundImageFive from "../../assets/image/background_five.jpeg";
import snakeImage from '../../assets/image/snake.png';
import bowlingAlleyImage from '../../assets/image/bowling-alley.png';
import profileImage from '../../assets/image/profile.png';




function Arcade() {



    const [expandedBoxes, setExspandedBoxes] = useState({});

    const handleGameInfo = (index) => {

        setExspandedBoxes((prevState) => ({
            [index]: !prevState[index]
        }))

    }
    const games = [
        { name: "Tetris", img: backgroundImageFive },
        { name: "Poker", img: backgroundImageOne },
        { name: "Mario", img: backgroundImageCoin },
        { name: "PacMan", img: backgroundImageTwo },
        { name: "Chess", img: backgroundImageFour },
        { name: "Ludo", img: backgroundImageFive },
        { name: "Black Jack", img: backgroundImageFour },
        { name: "Space Wars", img: backgroundImageCoin },
    ];

    // OLD CODE UNDER


    const [moveGameInfo, setMoveGameInfo] = useState(false);
    const [rotateArcadeArrow, setRotateArcadeArrow] = useState(false);

    const handleGameInfos = () => {
        setMoveGameInfo((prevState) => !prevState);
        setRotateArcadeArrow((prevState) => !prevState);
    };





    return (
        <body>
            <header className="arcade_header">
                <div>
                    <a href="/">
                        <img src={logo} alt="My Logo" />
                    </a>
                </div>
                <div className="arcade_header_center">
                    <img src={arcadeGameImage} alt="Sota Gaming Logo" />
                    <p>Sota Gaming</p>
                </div>
                <button className="arcade_burger">III</button>
            </header>

            <section className='arcade_hero'>
                <div className="arcade_hero_left">
                    <div className="hot_games_container">
                        <p className="arcade_h1">HOT GAMES</p>
                        <div className="hot_games_slider">
                            <a href="/snake">
                                <div className="hot_games_box">
                                    <img src={backgroundImageCoin} alt="Whack A Coin" />
                                    <p className="coin_game_p">Whack A Coin</p>
                                </div>
                            </a>
                            <a href="/">
                                <div className="hot_games_box">
                                    <img src={snakeImage} alt="Snake" />
                                    <p className="snake_game_p">Snake</p>
                                </div>
                            </a>
                            <a href="/ArcadeFrame">
                                <div className="hot_games_box">
                                    <img src={backgroundImageCoin} alt="Whack A Coin" />
                                    <p className="coin_game_p">Whack A Coin</p>
                                </div>
                            </a>
                            <a href="/ArcadeFrame.js">
                                <div className="hot_games_box">
                                    <img src={backgroundImageCoin} alt="Whack A Coin" />
                                    <p className="coin_game_p">Whack A Coin</p>
                                </div>
                            </a>
                            <a href="/">
                                <div className="hot_games_box">
                                    <img src={snakeImage} alt="Snake" />
                                    <p className="snake_game_p">Snake</p>
                                </div>
                            </a>
                            <a href="/ArcadeFrame">
                                <div className="hot_games_box">
                                    <img src={backgroundImageCoin} alt="Whack A Coin" />
                                    <p className="coin_game_p">Whack A Coin</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>



                <div className="arcade_hero_right">
                    <div className="gameMode">
                        <p className="gameMode_title">Select Mode</p>
                        <div>
                            <button className="offline">Offline</button>
                            <button className="online">Online</button>
                            <p className="gameMode_p">
                                Choose your preferred mode of play. You can enjoy offline games without an internet connection or explore online games that require one.
                            </p>


                        </div>
                    </div>
                </div>

                <div className="arcade_hero_bottom">

                    <div className="arcade_category">
                        <p>Category</p>
                        <div className="arcade_category_div">
                            <button>Arcade</button>
                            <button>Card</button>
                            <button>Strategy</button>
                            <button>Multiplayer</button>
                            <button>Puzzle</button>
                            <button>Board</button>
                        </div>
                    </div>

                </div>
            </section>

            <section className='games_div'>
                <div className="games_div_top">
                    <p className='games_div_h1'>All the games here</p>
                </div>

                <div className='games_layout'>
                    {games.map((game, index) => (
                        <div key={index} className='game_box'>
                            <div className="game_box_top">
                                <img src={game.img} alt={`image of ${game.name}`} />
                                <p className='game_name'> {game.name} </p>
                            </div>

                            <div className={`game_info ${expandedBoxes[index] ? "moved" : ""}`}>
                                <p>her er det kort info om spillet</p>
                                <span> &#9733;&#9733;&#9733;&#9733;&#9733; </span>
                                <button
                                    onClick={() => handleGameInfo(index)} // Toggle this specific game's info
                                    className={`game_arrow ${expandedBoxes[index] ? "rotaded" : ""}`}
                                >
                                    <p>&#8964;</p>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="arcade_footer">
                <div className="arcade_footer_left">
                    <img src={bowlingAlleyImage} alt="Bowling Alley Logo" />
                </div>
                <div className="arcade_footer_center">
                    <button className="header_btn">Arcade</button>
                    <button className="header_btn">Card</button>
                    <button className="header_btn">Vintage</button>
                    <button className="header_btn">Strategy</button>
                </div>
                <div className="arcade_footer_right">
                    <button>
                        <img src={profileImage} alt="Profile" />
                    </button>
                </div>
            </footer>
        </body>
    );
}

export default Arcade;
