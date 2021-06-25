import pkg from "pg";
const { Pool, Client } = pkg;
const connectionString =
  "postgres://gulnhjgq:eaCuzIiujSEaGGVnG5W216GRZZGimFa1@batyr.db.elephantsql.com/gulnhjgq";

const pool = new Pool
({
  connectionString,
})

export default pool;