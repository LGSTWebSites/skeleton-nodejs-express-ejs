const db = require("../db")

class Autor{
  static async inserir(data){
      const connect = await db.connect(data);
    const sql = "insert into autores(nome, sobrenome, dataNascomento) values($1, $2, $3)";
    const values = [data.nome, data.sobrenome, data.dataNascomento]
    return await connect.query(sql,values)
  }
  static async selecionar(){
    const connect = await db.connect();
    return await connect.query("Select * from autores")
  }
  static async atualizar(){
      const connect = await db.connect();
    return await connect.query("Select * from autores")
    
  }
  static async deletar(){
      const connect = await db.connect();
    return await connect.query("Select * from autores")
  }
}

module.exports = Autor;