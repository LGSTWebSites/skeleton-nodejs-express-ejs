let connect = function (){
  if (global.connection){
    return global.connection.connect();
  }
  const {Pool} = requise("pg");
  const pool  = new Pool({
    connectionString: "postgres://dlkzmyyg:Q24EORd9Wzde-ph4rKdtfSzcEYmYpGGW@kesavan.db.elephantsql.com/dlkzmyyg"
  });

  global.connection = pool;
  return pool.connect();
}

module.exports = {connect}