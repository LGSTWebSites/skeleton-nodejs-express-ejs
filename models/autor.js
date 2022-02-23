const db = require("../db")

class Autor{
  static async = await select(){
    const connect = await db.connect();
    return connect.query("select * from autores");
  } 
} 



module.export = Autor;