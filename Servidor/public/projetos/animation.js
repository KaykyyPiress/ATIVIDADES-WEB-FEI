// Obter o elemento canvas
const canvas = document.getElementById("canvas");

// Obter o contexto de desenho 2D do canvas
const ctx = canvas.getContext("2d");

// Definir as dimensões do quadrado
const squareWidth = 50;
const squareHeight = 50;

// Definir a posição inicial do quadrado
let squareX = 125;
let squareY = 125;

// Definir a cor inicial do quadrado
let squareColor = "blue";

// Adicionar um ouvinte de evento para o movimento do cursor do mouse
canvas.addEventListener("mousemove", (event) => {
  // Obter a posição atual do cursor do mouse
  const mouseX = event.clientX - canvas.offsetLeft;
  const mouseY = event.clientY - canvas.offsetTop;

  // Calcular a posição do quadrado com base na posição do cursor do mouse
  const newSquareX = mouseX - (squareWidth / 2);
  const newSquareY = mouseY - (squareHeight / 2);

  // Verificar se o quadrado está dentro do quadrado de 300x300 pixels
  if (newSquareX >= 0 && newSquareY >= 0 && newSquareX + squareWidth <= 300 && newSquareY + squareHeight <= 300) {
    // Definir a nova posição do quadrado
    squareX = newSquareX;
    squareY = newSquareY;
  }
});

// Adicionar um ouvinte de evento para o clique no quadrado
canvas.addEventListener("click", () => {
  // Alterar a cor do quadrado
  squareColor = "red";
});

// Função para desenhar o quadrado
function drawSquare() {
  // Limpar o canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Desenhar o quadrado
  ctx.fillStyle = squareColor;
  ctx.fillRect(squareX, squareY, squareWidth, squareHeight);

  // Agendar a próxima renderização
  requestAnimationFrame(drawSquare);
}

// Iniciar a renderização
requestAnimationFrame(drawSquare);
