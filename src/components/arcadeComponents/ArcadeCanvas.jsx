import React, { useRef } from 'react';


import './arcadeCanvas.css'

function ArcadeCanvas() {

    const canvasRef = useRef(null);
    const gameOverMessageRef = useRef(null);
    return (
        <div className="game_container">
            <p>Score <span id="score">0</span></p>


            <canvas id="board" ref={canvasRef} width={500} height={500}><div></div></canvas>


            <div className="div_btn">

            </div>

            <p id="game-over-message" className="game-over-message" ref={gameOverMessageRef}>Game Over</p>
        </div>
    )

}





export default ArcadeCanvas;