const express = require ("express")

const server = express()

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
    return res.render("search-results.html")
})

//server up
server.listen(3000)
console.log('Server Up port 3000')
