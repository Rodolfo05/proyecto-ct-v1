import sql from 'mssql';
import config from '../config'

//Configuracion de base de datos
const dbSettings = {
    user: config.dbUser, 
    password: config.dbPass, 
    server: config.dbServer, 
    database: config.dbDatabase,
    port: 1433,
    dialect: 'mssql',
    dialectOptions:{
        instanceName: 'SQLEXPRESS'
    },
    options:{
        encrypt: true,
        trustServerCertificate: true,
    }
}

//Funcion de conexion a la BD
export const getConnection = async () => {
// try {
     const pool = await sql.connect(dbSettings);
     return pool;
    // const result = await pool.request().query('SELECT 1');
    // console.log(result);



// } catch (error) {
//     console.log(error)
// }
}

// getConnection();