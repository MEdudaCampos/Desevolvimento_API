    import { request, response } from 'express';
    import conn from '../config/conn.js'
    import { v4 as uuidv4 } from 'uuid';

        export const getLivros =  (request, response)=>{
            const sql = /*sql*/`SELECT * FROM livros `;
            conn.query(sql,(err,data)=>{
                if(err){
                    response.status(500).json({message:"Erro ao buscar livros"})
                    return
                }
                const livros = data 
                response.status(200).json(livros); 
            });
        }
        export const cadastrarLivro = (request, response)=>{
            const {titulo, autor, ano_publicacao, genero, preco, disponibilidade} = request.body;  
            // validades
            if(!titulo){
            response.status(400).json({message:"O titulo é obrigatorio"})
            return
            }
            if(!autor){
            response.status(400).json({message:"O autot é obrigatorio"})
            return
            }
            if(!ano_publicacao){
            response.status(400).json({message:"O ano publicação é obrigatório"})
            return
            }if(!genero){
            response.status(400).json({message:"O genero é obrigatório"})
            return
            }
            if(!preco){
            response.status(400).json({message:"O preço é obrigatório"})
            return
            }
    
        // cadastrar um livro -> antes preciso saber se esse livro existe 
        const checkSql = /*sql*/  `SELECT * FROM livros WHERE titulo ="${titulo}" AND
            autor = "${autor}" AND 
            ano_publicacao = "${ano_publicacao}"`
        conn.query(checkSql, (err, data)=>{
            if(err){
            response.status(500).json({message:"Erro ao casdastar livros"})
            return console.log(err); 
            }
            
            if(data.length > 0){
            response.status(409).json({message: "Livro já existe na livraria"}); 
            return console.log(err); 
            }
    
            const id = uuidv4()
            const disponibilidade = 1
        
        // inserir dados
            const insertSql = /*sql*/ `INSERT INTO livros 
            (id, titulo, autor, ano_publicacao, genero, preco, disponibilidade)
            VALUES ("${id}","${titulo}","${autor}","${ano_publicacao}","${genero}","${preco}","${disponibilidade}")` 
        
        conn.query(insertSql, (err)=>{
            if(err){
                response.status(500).json({message:"Erro ao cadastrar livro"}); 
            }
            response.status(201).json({message:"Livro cadastrado"})
        })
        }); 
        
        
        }
        export const getClientes = (request, response)=>{ 
            const {nome, email} = request.body;  
            // validades
            if(nome){
            response.status(400).json({message:"O titulo é obrigatorio"})
            return
            }
            if(!email){
            response.status(400).json({message:"O autot é obrigatorio"})
            return
            }
            
        
        // cadastrar um cliene-> antes preciso saber se esse livro existe 
            const checkSql = /*sql*/  `SELECT * FROM livros WHERE titulo ="${titulo}" AND
                autor = "${autor}" AND 
                ano_publicacao = "${ano_publicacao}"`
            conn.query(checkSql, (err, data)=>{
                if(err){
                response.status(500).json({message:"Erro ao casdastar livros"})
                return console.log(err); 
                }
                
                if(data.length > 0){
                response.status(409).json({message: "Livro já existe na livraria"}); 
                return console.log(err); 
                }
            
                const id = uuidv4()
                const disponibilidade = 1
            
                // inserir dados
                const insertSql = /*sql*/ `INSERT INTO livros 
                (id, titulo, autor, ano_publicacao, genero, preco, disponibilidade)
                VALUES ("${id}","${titulo}","${autor}","${ano_publicacao}","${genero}","${preco}","${disponibilidade}")` 
            
            conn.query(insertSql, (err)=>{
                if(err){
                    response.status(500).json({message:"Erro ao cadastrar livro"}); 
                }
                response.status(201).json({message:"Livro cadastrado"})
            })
            }); 
            
            }