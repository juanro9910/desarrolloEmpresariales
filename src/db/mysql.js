import mysql from "mysql";

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Dosmil24*',
    database: 'desarrolloempresariales'
});
  
db.connect((err) => {
if (err) {
    console.error('Error al conectar a la base de datos: ', err);
} else {
    console.log('Conexión exitosa a la base de datos');
}
});  

export default db;
