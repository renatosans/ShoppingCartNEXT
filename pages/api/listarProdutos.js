
import mysql from "mysql2";

// configura os parametros de conexão
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'p@ssw0rd',
    database: 'portal_aluno'
});

export default function handler(req, res) {
    mysqlConnection.connect(
        err => {
            if (!err) {
                console.log("DB connection succeeded!");
            } else {
                console.log("DB connection failed!\n Error: " + JSON.stringify(err, undefined, 2));
            }
        }
    );
    
    mysqlConnection.query('SELECT * FROM professor', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log("Error: " + JSON.stringify(err, undefined, 2));
        }
    })
}
