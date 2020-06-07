const express = require ("express")

const server = express()

//pegar o database

const db = require("./database/db")

//configurar pasta publica
server.use(express.static("public"))

//template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
    })
        
//utilizando juncks para o frontend dinâmico
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Seu mktplace de coleta de resíduos"})
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {

    //pegar os dados do banco de dados
    //consultar dados
    db.all(`
        SELECT * FROM places`, function(err,rows){
            if(err){
                return console.log(err)
            }
            const total = rows.length
            //mostrar a page html com os dados do dataBase
            return res.render("search-results.html", { places:rows, total})
        })
})

//server up
server.listen(3000)
console.log('Server Up port 3000')
