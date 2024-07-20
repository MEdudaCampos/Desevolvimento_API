import coon from "../config/conn.js"

const tableLivros = /*sql*/ `
CREATE TABLE IF NOT EXISTS funcionarios(
    id VARCHAR(60) PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255)  NOT NULL,
    ano_publicacao YEAR(4) NOT NULL,
    preco DECIMAL NOT NULL,
    genero VARCHAR NOT NULL,
    disponibilidade BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
`

conn.query (tableLivros, (err, result, field)=>{
    if(err){
        console.error("Error ao criar a tabela"+err.stack)
        return
    }
    console.log(result)
    console.log(field)

    console.log("Tabela [Livros] criada com sucesso")
})