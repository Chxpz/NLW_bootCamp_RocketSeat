const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto que irá fazer operações no banco de dados

const db = new sqlite3.Database("./src/database/database.db")

//utilizar o objeto de banco de dados para nossas operações

db.serialize(() => {
    //utilizando SQL    
    //criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT
        );
    `)



    //inserir dados

    //consultar dados

    //deletar um dado
})