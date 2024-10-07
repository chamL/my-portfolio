import React, { useRef, useState, useEffect } from 'react';

const blockSize = 25;
const row = 20;
const column = 20;

function SnakeGame() {
    const canvasRef = useRef(null);
    const [context, setContext] = useState(null);
    const [snakeX, setSnakeX] = useState(blockSize * 5);
    const [snakeY, setSnakeY] = useState(blockSize * 5);
    const [speedX, setSpeedX] = useState(0);
    const [speedY, setSpeedY] = useState(0);
    const [foodX, setFoodX] = useState(null);
    const [foodY, setFoodY] = useState(null);
    const [snakeBody, setSnakeBody] = useState([]); // Array for snake's body segments
    const [foodScore, setFoodScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const intervalIdRef = useRef(null);

    // Initialize canvas and game setup
    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.height = row * blockSize;
        canvas.width = column * blockSize;
        const ctx = canvas.getContext('2d');
        setContext(ctx);
        placeFood();
        startGame();
    }, []);

    const startGame = () => {
        setGameOver(false);
        setFoodScore(0);
        setSnakeX(blockSize * 5);
        setSnakeY(blockSize * 5);
        setSpeedX(0);
        setSpeedY(0);
        setSnakeBody([]); // Reset the snake's body
        document.addEventListener('keydown', changeDirection);
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = setInterval(update, 100); // Snake moves every 100ms
    };

    const placeFood = () => {
        const x = Math.floor(Math.random() * column) * blockSize;
        const y = Math.floor(Math.random() * row) * blockSize;
        setFoodX(x);
        setFoodY(y);
    };

    // Function to update the game (moves snake, checks collisions)
    const update = () => {
        if (gameOver) return;

        let newSnakeX = snakeX + speedX * blockSize;
        let newSnakeY = snakeY + speedY * blockSize;

        // Check if snake eats food
        if (newSnakeX === foodX && newSnakeY === foodY) {
            setSnakeBody((prevBody) => [[foodX, foodY], ...prevBody]);
            setFoodScore((prevScore) => prevScore + 10);
            placeFood();
        } else {
            // Move the snake's body
            moveSnake(newSnakeX, newSnakeY);
        }

        // Update the snake's head position
        setSnakeX(newSnakeX);
        setSnakeY(newSnakeY);

        draw(newSnakeX, newSnakeY);
        checkGameOver(newSnakeX, newSnakeY);
    };

    // Function to move the snake's body
    const moveSnake = (newSnakeX, newSnakeY) => {
        setSnakeBody((prevBody) => {
            if (prevBody.length === 0) return [];

            // Create a new array for the updated body
            const newBody = [...prevBody];

            // Move each part to the position of the previous one
            for (let i = newBody.length - 1; i > 0; i--) {
                newBody[i] = [...newBody[i - 1]];
            }

            // The first part of the body follows the head
            newBody[0] = [snakeX, snakeY];

            return newBody;
        });
    };

    const draw = (newSnakeX, newSnakeY) => {
        if (context) {
            context.clearRect(0, 0, column * blockSize, row * blockSize);
            context.fillStyle = 'red';
            context.fillRect(foodX, foodY, blockSize, blockSize);

            // Draw the snake's head
            context.fillStyle = 'lime';
            context.fillRect(newSnakeX, newSnakeY, blockSize, blockSize);

            // Draw the snake's body
            snakeBody.forEach(([x, y]) => {
                context.fillRect(x, y, blockSize, blockSize);
            });
        }
    };

    const checkGameOver = (newSnakeX, newSnakeY) => {
        if (
            newSnakeX < 0 ||
            newSnakeX >= column * blockSize ||
            newSnakeY < 0 ||
            newSnakeY >= row * blockSize
        ) {
            setGameOver(true);
            handleGameOver();
        }

        // Check if the snake collides with its own body
        for (let i = 0; i < snakeBody.length; i++) {
            if (newSnakeX === snakeBody[i][0] && newSnakeY === snakeBody[i][1]) {
                setGameOver(true);
                handleGameOver();
            }
        }
    };

    const handleGameOver = () => {
        clearInterval(intervalIdRef.current);
        setGameOver(true);
        document.removeEventListener('keydown', changeDirection);
    };

    const changeDirection = (e) => {
        if (e.code === 'ArrowUp' && speedY !== 1) {
            setSpeedX(0);
            setSpeedY(-1);
        } else if (e.code === 'ArrowDown' && speedY !== -1) {
            setSpeedX(0);
            setSpeedY(1);
        } else if (e.code === 'ArrowLeft' && speedX !== 1) {
            setSpeedX(-1);
            setSpeedY(0);
        } else if (e.code === 'ArrowRight' && speedX !== -1) {
            setSpeedX(1);
            setSpeedY(0);
        }
    };

    return (
        <div className="game_container">
            <p>Score: {foodScore}</p>
            <canvas ref={canvasRef}></canvas>
            {gameOver && <p id="gameOver_message">Game Over!</p>}
            <div className="snake_div_btn">
                <button onClick={startGame} id="start">Start</button>
                <button onClick={startGame} id="refresh">Refresh</button>
            </div>
        </div>
    );
}

export default SnakeGame;
