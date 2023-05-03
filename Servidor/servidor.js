c:var http = require("http");
var express = require("express");
var bodyParser = require("body-parser")

var app = express();
app.use("/",express.static("./public"));
app.set("view engine", "ejs")
app.set("views", "./views")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

var server = http.createServer(app);

app.get(["/", "/login"], function (req, resp){
    resp.render("login");
})


app.post("/cadastro", function (req,resp){
    login= req.body.login;
    senha= req.body.senha;
    resp.redirect("login.html")
})

app.post("/Login", function (requisicao,resp){
    login1 = requisicao.body.login;
    senha1 = requisicao.body.senha;
    if ((login1 === login) && (senha1 === senha)){
        resp.render("login_certo", {login1})
    }
    else{
        resp.render("login_errado", {login1})
    }
})


server.listen(80);
console.log("Servidor rodando. . .");

