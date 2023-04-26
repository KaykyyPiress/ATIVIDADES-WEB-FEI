var canvas = document.getElementById("fundo")
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext ("2d")

function quadrado (cor, x, y, largura, altura){
    ctx.fillStyle = cor
    ctx.fillRect(x, y, largura, altura)
}

function linhas (cor, w, z, x, y){
    ctx.strokeStyle = cor
    ctx.beginPath()
    ctx.moveTo(w,z)
    ctx.lineTo(x,y)
    ctx.stroke()
}

function circulo(corl, corp, x, y, raio, cangulo, fangulo){
    ctx.beginPath()
    ctx.strokeStyle = corl
    ctx.fillStyle = corp
    ctx.arc(x, y, raio, cangulo*Math.PI, fangulo*Math.PI)
    ctx.fill()
    ctx.stroke()
}

function circulosem(corl, x, y, raio, cangulo, fangulo){
    ctx.beginPath()
    ctx.strokeStyle = corl
    ctx.arc(x, y, raio, cangulo*Math.PI, fangulo*Math.PI)
    ctx.stroke()
}


function texto(cor, fonte, texto, x, y){
    ctx.fillStyle = cor
    ctx.font = fonte
    ctx.fillText(texto, x, y)
}

quadrado("blue", 0, 0, 50, 50)
quadrado("red", 250, 0, 50, 50)
quadrado("yellow", 0, 270, 30, 30)
quadrado("yellow", 30, 270, 30, 30)
quadrado("yellow", 0, 240, 30, 30)
quadrado("black", canvas.width - 60, 270, 30, 30) /*lado esquerdo*/
quadrado("black", canvas.width - 30, 270, 30, 30) /*canto*/
quadrado("black", canvas.width - 30, 240, 30, 30) /*cima*/
quadrado ("red", 110, 150, 40, 40)
quadrado ("aqua", 0, 150, 30, 30)
quadrado ("aqua", 0, 120, 30, 30)
quadrado ("aqua", 270, 135, 30, 30)


linhas ("blue", 0, 0, 150, 150)
linhas("red", canvas.width - 150, 150, 300, 0)
linhas("green", 0, 150, 300, 150)
linhas("green", 150, 300, 150, 150 )
linhas ("black", 0,300,0,0)
linhas ("black", 300,0,0,0)
linhas ("black", 300,0,0,0)
linhas ("black", 300,300,300,0)
linhas ("black", 300,300,0,300)


circulo("blue", "aqua", 150, 110, 17, 0, 2)
circulo("green", "yellow", canvas.height - 75, canvas.height - 75, 17, 0, 2)
circulo("green", "yellow", 75, 225, 17, 0, 2)
circulo("green", "aqua", 150, 299.1, 40, 3, 0)


circulosem("green", 150, 150, 65, 3, 0)     /*centro*/
circulosem("green", 135, 150, 70, 1, 1.3)  /*lado esquerdo*/
circulosem("green", 165, 150, 70, 1.7, 2) /*lado direito*/

circulosem("green", 140, 300, 70, 1, 1.55) 
circulosem("green", 150, 300, 55, 1.50, 2)



texto("black", "20px arial", "Canvas", 118, 60)


