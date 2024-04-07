
import {getConnection} from '../database/connection'

export const getProductos = async (req, res) => {
    
    const pool = await getConnection();
    const result = await pool.request().query("SP_GET_TODOS_PRODUCTOS");
    console.log(result)

}