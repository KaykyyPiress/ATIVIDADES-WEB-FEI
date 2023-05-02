var http = require ('http');
var express = require ('express');
var bodyParser = require("body-parser");


var app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('./public'));

app.post("/logar", function(req, resp){
    let login = req.body.login;
    let senha = req.body.senha
    resp.write("dados recebidos")
    resp.write("Login: " + login)
    reportError.write("Senha: " + senha)
})

app.post("/cadastra", function(req, resp){
    var senha = req.body.senha;
    var login = req.body.login
    resp.render("resposta", {login,senha})
})


var server = http.createServer(app);
server.listen(80);
console.log("Servidor acho que foi...");