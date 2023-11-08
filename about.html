<!DOCTYPE html>
<html>

<head>
    <style>
        body {
            background-color: black;
            color: green;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }
        li {

            list-style: none;
        }
        a {
            color: red;
            font-size: 2vw;
        }
        a:hover {
            color: green;
        }

        canvas {
            border: 2px solid green;
        }

        #gameOverMessage {
            margin-bottom: 20px;
        }

        #playAgainButton {
            display: none;
        }

        #nextGameButton {
            display: none;
        }

        #autoPlayButton {
            margin-bottom: 10px;
        }

        #speedButton {
            margin-bottom: 10px;
        }

        nav {
            background-color: #53535380;
            text-align: center;
            transition: padding 0.3s, position 0, 3s;
        }

        nav ul {
            list-style-type: none;
            padding: 0.3%;
            font-size: 1vw;
        }

        nav li {
            display: inline;
            margin: 0 20px;
        }

        nav a {
            text-decoration: none;
            color: #ffffffba;
            font-weight: bold;
        }

        nav li:hover a {
            color: #ff4800a0;
            transition: color 0.7s ease;
        }
    </style>
</head>

<body>

    <li><a href="StHome.php">Home</a></li>

    <canvas id="gameCanvas" width="900" height="700"></canvas>
    <p id="gameOverMessage"></p>
    <button id="playAgainButton" onclick="resetGame()">Play Again</button>
    <button id="nextGameButton" onclick="startNextGame()" style="display: none;">Next Game</button>
    <button id="autoPlayButton" onclick="toggleAutoPlay()">Auto Play</button>
    <button id="speedButton" onclick="toggleSpeed()">Speed Up</button>

    <script>
        const canvas = document.getElementById('gameCanvas');
        const context = canvas.getContext('2d');
        const gameOverMessage = document.getElementById('gameOverMessage');
        const playAgainButton = document.getElementById('playAgainButton');
        const nextGameButton = document.getElementById('nextGameButton');
        const autoPlayButton = document.getElementById('autoPlayButton');
        const speedButton = document.getElementById('speedButton');

        const tableColor = '#3c3c3c';
        const puckColor = '#ff0000';
        const greenPuckColor = '#00ff00';
        const paddleColor = '#0000ff';

        const tableWidth = 900;
        const tableHeight = 700;

        const paddleWidth = 100;
        const paddleHeight = 10;

        let pucks = [];

        let puckX = tableWidth / 2;
        let puckY = tableHeight / 2;
        let puckSpeedX = 5;
        let puckSpeedY = 5;
        let gameStarted = false;

        let paddleX = tableWidth / 2 - paddleWidth / 2;
        let paddleY = tableHeight - 2 * paddleHeight;

        const brickWidth = 100;
        const brickHeight = 20;
        const bricks = [];

        let autoPlay = false;
        let speedUp = false;
        let maxSpeed = 15;
        let intervalId;

        canvas.addEventListener('mousemove', (event) => {
            if (!autoPlay) {
                paddleX = event.clientX - canvas.getBoundingClientRect().left - paddleWidth / 2;
            }
        });

        function toggleAutoPlay() {
            autoPlay = !autoPlay;
            if (autoPlay) {
                autoPlayButton.textContent = 'Manual Play';
                intervalId = setInterval(() => {
                    paddleX = puckX - paddleWidth / 2;
                    if (bricks.every((brick) => brick.broken)) {
                        startNextGame();
                        speedUp();
                    }
                }, 10);
            } else {
                autoPlayButton.textContent = 'Auto Play';
                clearInterval(intervalId);
            }
        }

        function toggleSpeed() {
            if (speedUp) {
                puckSpeedX = 5;
                puckSpeedY = 5;
                speedButton.textContent = 'Speed Up';
            } else {
                puckSpeedX = 15;
                puckSpeedY = 15;
                speedButton.textContent = 'Slow Down';
            }
            speedUp = !speedUp;
        }

        function generateBrickGrid(rows, columns) {
            const brickWidthWithPadding = 95;
            const brickHeightWithPadding = 20;
            const padding = 5;

            const totalGridWidth = columns * (brickWidthWithPadding + padding) - padding;
            const initialX = (tableWidth - totalGridWidth) / 2;
            const initialY = 5;

            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < columns; j++) {
                    const brickX = initialX + j * (brickWidthWithPadding + padding);
                    const brickY = initialY + i * (brickHeightWithPadding + padding);

                    // Randomly select color for the brick
                    let brickColor = "#808080";
                    const randomValue = Math.random();
                    if (randomValue < 0.5) {
                        brickColor = "#00ff00";
                    } else if (randomValue < 0.4) {
                        brickColor = "#ff0000";
                    }

                    bricks.push({
                        x: brickX,
                        y: brickY,
                        width: brickWidthWithPadding - padding,
                        height: brickHeightWithPadding - padding,
                        broken: false,
                        color: brickColor,
                    });
                }
            }
        }

        function resetBricks() {
            bricks.length = 0;
            generateBrickGrid(5, 9);
        }

        resetBricks();

        function draw() {
            context.fillStyle = tableColor;
            context.fillRect(0, 0, tableWidth, tableHeight);

            if (gameStarted) {
                puckX += puckSpeedX;
                puckY += puckSpeedY;

                pucks.forEach((puck) => {
                    puck.x += puck.speedX;
                    puck.y += puck.speedY;
                });
            }

            context.fillStyle = puckColor;
            context.beginPath();
            context.arc(puckX, puckY, 10, 0, 2 * Math.PI);
            context.fill();

            context.fillStyle = paddleColor;
            context.fillRect(paddleX, paddleY, paddleWidth, paddleHeight);

            bricks.forEach((brick) => {
                if (!brick.broken) {
                    context.fillStyle = brick.color;
                    context.fillRect(brick.x, brick.y, brick.width, brick.height);
                }
            });

            pucks.forEach((puck) => {
                context.fillStyle = greenPuckColor;
                context.beginPath();
                context.arc(puck.x, puck.y, 10, 0, 2 * Math.PI);
                context.fill();
            });

            if (puckY + 10 >= tableHeight) {
                gameOver();
            }

            if (puckY <= 0) {
                puckSpeedY = -puckSpeedY;
            }

            if (puckX <= 0 || puckX >= tableWidth) {
                puckSpeedX = -puckSpeedX;
            }

            if (
                puckY + 10 >= paddleY &&
                puckX >= paddleX &&
                puckX <= paddleX + paddleWidth
            ) {
                puckSpeedY = -puckSpeedY;
            }

            bricks.forEach((brick) => {
                if (!brick.broken) {
                    if (
                        puckY - 10 <= brick.y + brick.height &&
                        puckY - 10 >= brick.y &&
                        puckX >= brick.x &&
                        puckX <= brick.x + brick.width
                    ) {
                        puckSpeedY = -puckSpeedY;
                        if (brick.color === "#ff0000") {
                            brick.color = "#808080";
                        } else if (brick.color === "#00ff00") {
                            let newPuck = {
                                x: brick.x + brick.width / 2,
                                y: brick.y + brick.height + 10,
                                speedX: Math.random() * 6 - 3,
                                speedY: Math.random() * 6,
                            };
                            pucks.push(newPuck);
                            brick.broken = true;
                        } else {
                            brick.broken = true;
                        }

                        if (bricks.every((brick) => brick.broken)) {
                            gameStarted = false;
                            nextGameButton.style.display = 'block';
                        }
                    }
                }
            });

            pucks.forEach((puck) => {
                if (puck.y + 10 >= tableHeight) {
                    pucks = pucks.filter((p) => p !== puck);
                }

                if (puck.x <= 0 || puck.x >= tableWidth) {
                    puck.speedX = -puck.speedX;
                }

                if (
                    puck.y + 10 >= paddleY &&
                    puck.x >= paddleX &&
                    puck.x <= paddleX + paddleWidth
                ) {
                    puck.speedY = -puck.speedY;
                }

                bricks.forEach((brick) => {
                    if (!brick.broken) {
                        if (
                            puck.y - 10 <= brick.y + brick.height &&
                            puck.y - 10 >= brick.y &&
                            puck.x >= brick.x &&
                            puck.x <= brick.x + brick.width
                        ) {
                            puck.speedY = -puck.speedY;
                            if (brick.color === "#ff0000") {
                                brick.color = "#808080";
                            } else if (brick.color === "#00ff00") {
                                let newPuck = {
                                    x: brick.x + brick.width / 2,
                                    y: brick.y + brick.height + 10,
                                    speedX: Math.random() * 6 - 3,
                                    speedY: Math.random() * 6,
                                };
                                pucks.push(newPuck);
                                brick.broken = true;
                            } else {
                                brick.broken = true;
                            }

                            if (bricks.every((brick) => brick.broken)) {
                                gameStarted = false;
                                nextGameButton.style.display = 'block';
                            }
                        }
                    }
                });
            });

            requestAnimationFrame(draw);
        }

        function gameOver() {
            context.clearRect(0, 0, tableWidth, tableHeight);
            gameOverMessage.textContent = 'Game Over';
            playAgainButton.style.display = 'block';
        }

        function startNextGame() {
            bricks.length = 0;
            generateBrickGrid(5, 9);
            gameOverMessage.textContent = '';
            playAgainButton.style.display = 'none';
            nextGameButton.style.display = 'none';
            puckX = tableWidth / 2;
            puckY = tableHeight / 2;
            puckSpeedX = 5;
            puckSpeedY = 5;
            pucks = [];
            gameStarted = true;
        }

        function resetGame() {
            bricks.length = 0;
            generateBrickGrid(5, 9);
            gameOverMessage.textContent = '';
            playAgainButton.style.display = 'none';
            nextGameButton.style.display = 'none';
            puckX = tableWidth / 2;
            puckY = tableHeight / 2;
            puckSpeedX = 5;
            puckSpeedY = 5;
            pucks = [];
            gameStarted = false;
        }

        canvas.addEventListener('click', function () {
            if (!gameStarted) {
                gameStarted = true;
            }
        });

        draw();
    </script>
</body>

</html>
