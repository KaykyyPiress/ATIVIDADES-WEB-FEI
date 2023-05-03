const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Variáveis do jogo
const paddleWidth = 100;
const paddleHeight = 10;
const paddleSpeed = 5;
const ballRadius = 5;
const ballSpeed = 3;

let paddleX = canvas.width / 2 - paddleWidth / 2;
let ballX = canvas.width / 2;
let ballY = canvas.height - paddleHeight - ballRadius;
let ballDX = ballSpeed;
let ballDY = -ballSpeed;
let leftPressed = false;
let rightPressed = false;

// Função para desenhar a nave espacial
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.closePath();
}

// Função para desenhar a bola
function drawBall() {
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.closePath();
}

// Função para atualizar a posição da nave espacial
function updatePaddle() {
  if (leftPressed && paddleX > 0) {
    paddleX -= paddleSpeed;
  }
  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += paddleSpeed;
  }
}

// Função para atualizar a posição da bola
function updateBall() {
  ballX += ballDX;
  ballY += ballDY;

  // Colisão com as laterais da tela
  if (ballX - ballRadius < 0 || ballX + ballRadius > canvas.width) {
    ballDX = -ballDX;
  }

  // Colisão com o topo da tela
  if (ballY - ballRadius < 0) {
    ballDY = -ballDY;
  }

  // Colisão com a nave espacial
  if (ballY + ballRadius > canvas.height - paddleHeight &&
      ballX > paddleX && ballX < paddleX + paddleWidth) {
    ballDY = -ballDY;
  }

  // Verificar se a bola escapou
  if (ballY + ballRadius > canvas.height) {
    gameOver();
  }
}

// Função para desenhar o jogo
function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPaddle();
  drawBall();
}

// Função para encerrar o jogo
function gameOver() {
  alert('Game Over!');
  document.location.reload();
}

//
