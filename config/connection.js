import { createPool } from "mysql2/promise";


// dados para conexão com banco de dados serverless
const host = 'k3cizowdet74.aws-sa-east-1-1.psdb.cloud';
const username = Buffer.from('ZGttbXkzdjZ6dzZq', 'base64').toString('ascii');
const password = Buffer.from('cHNjYWxlX3B3XzMyYlFkYVI2NWdWalg2QUJzampzUUZkVk92anhnN2JZajJONXc5bnNMSjQ=', 'base64').toString('ascii');

const pool = createPool({
	host: host,
	user: username,
	password: password,
	port: 3306,
	database: 'commercedb',
	ssl: {}
})

export { pool }
