var http = require('http');
var express = require('express');
var bodyParser = require("body-parser")

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.set("view engine", "ejs")
app.set("views", "./views")

app.get("/teste",function (req, resp){
    console.log("Recebeu request");
    resp.write("<h1> Resposta do /teste </h1>");
    resp.end();

});

app.post("/cadastro",function (req, resp) {
    let nome = req.body.nome;
    let login = req.body.login;
    resp.write("<h1> Dados Recebidos</h1>");
    resp.write(" Nome: "+ nome );
    resp.write(" Login: "+ login );
    resp.end();

});

app.post("/login", function (req, resp){
   var login = req.body.login;
   var senha = req.body.senha;
   resp.render("resposta", {login, senha})
});


app.get("/", function (req, resp){
   resp.render("login")
});

var server = http.createServer(app);
server.listen(80);
console.log("servidor rodando...");