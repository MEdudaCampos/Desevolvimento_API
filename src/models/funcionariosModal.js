import coon from "../config/conn.js"

const tableFuncionarios = /*sql*/ `
CREATE TABLE IF NOT EXISTS funcionarios(
    id VARCHAR(60) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cargo VARCHAR(255)  NOT NULL,
    data_contratacao DATE NOT NULL,
    salario DECIMAL NOT NULL,
    email VARCHAR NOT NULL,
    disponibilidade BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
`

conn.query (tableFuncionarios, (err, result, field)=>{
    if(err){
        console.error("Error ao criar a tabela"+err.stack)
        return
    }
    console.log(result)
    console.log(field)

    console.log("Tabela [funcionarios] criada com sucesso")
})