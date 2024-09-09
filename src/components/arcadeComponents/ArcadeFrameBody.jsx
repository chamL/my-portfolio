import React, { useRef } from 'react';





function ArcadeFrameBody(

) {
    const canvasRef = useRef(null);
    const scoreListRef = useRef(null);
    const gameOverMessageRef = useRef(null);
    return (

        <main>
            <div className="game_container">
                <p>Score <span id="score">0</span></p>
                <canvas id="board" ref={canvasRef}></canvas>
                <div className="div_btn">

                </div>
            </div>
            <div className="leaderboard">
                <p>Score List </p>
                <div className="scroll-container">
                    <ol id="score_list" ref={scoreListRef}></ol>
                </div>
            </div>
            <p id="game-over-message" className="game-over-message" ref={gameOverMessageRef}>Game Over</p>
        </main>
    );
}

export default ArcadeFrameBody;
