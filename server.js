
var express =  require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/logar", function(req, res){
    let usuario = req.body.usuario
    let senha = req.body.senha
    let usuarios = ["teste@teste.com", "teste1@teste.com", "teste2@teste.com"]
    


    if(usuarios.includes(usuario)){
            if( senha === "123"){
                res.end("Seja bem vindo " +usuario)
            }else{
                res.end("Senha Incorreta!")
            }
    } else{
        res.end("Usário não existe!")
    }
})

app.listen(3000);