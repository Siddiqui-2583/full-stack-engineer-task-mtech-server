// import { Pool, Client } from 'pg';
import pkg from "pg";
const { Pool, Client } = pkg;
const connectionString='postgres://ueuussfr:KKHc_vSfnNsM_qsKkjla3BUxaFQeQs0l@kandula.db.elephantsql.com:5432/ueuussfr';
const pool = new Pool
({
  connectionString,
})

export default pool;