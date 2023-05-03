var aleatorio = Math.floor(Math.random()*100)
console.log(aleatorio)

function pegartextodacaixa(){
   pegartexto =  parseInt(document.getElementById('idnumero').value)
    if (pegartexto == aleatorio) {
        window.alert("acertou")
        document.getElementById("resposta").innerHTML= "Acertou"
        document.getElementById("resposta").style.setProperty("background-color", "green")
    }   
    else if (pegartexto>aleatorio){
        document.getElementById("resposta").innerHTML= "Tente um número menor"
        document.getElementById("resposta").style.setProperty("background-color", "red")}

    else { 
        document.getElementById("resposta").innerHTML= "Tente um número maior"
        document.getElementById("resposta").style.setProperty("background-color", "red")
    }
}

function resp(){
    window.alert(aleatorio)
}