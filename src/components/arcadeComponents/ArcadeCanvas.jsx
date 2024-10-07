import React, { useRef } from 'react';
import Snake from '../arcadeComponents/gameLogic/Snake';


import './arcadeCanvas.css'

function ArcadeCanvas() {

    const canvasRef = useRef(null);
    const gameOverMessageRef = useRef(null);
    return (
        <div className="game_container">

            <div id="board" ref={canvasRef} width={500} height={500}>
                <Snake />
            </div>

        </div>
    )

}





export default ArcadeCanvas;