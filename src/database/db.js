const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto que irá fazer operações no banco de dados

const db = new sqlite3.Database("./src/database/database.db")


module.exports = db

//utilizar o objeto de banco de dados para nossas operações

/*db.serialize(() => {
    //utilizando SQL    
    //criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //inserir dados
    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);
`
    
    const values = [
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "Colectoria",
        "Guilherme Gembala, Jd America",
        "Numero 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos e Lâmpadas"
        
    ]

    function afterInserData(err){
        if(err) {
            return console.log(err)
        }
        console.log("Cadastrado ok")
        console.log(this)
    }
    
    db.run (query, values, afterInserData)


    //consultar dados
    db.all(`
        SELECT * FROM places`, function(err,rows){
            if(err){
                return console.log(err)
            }
            console.log("Esses são os registros: ")
            console.log(rows)
        })

    //deletar um dado
        db.run(`
            DELETE FROM places WHERE id = ?`, [1], function (err){
                if(err){
                    return console.log(err)
                }
                console.log("Registro deletado")
            })
    
})*/