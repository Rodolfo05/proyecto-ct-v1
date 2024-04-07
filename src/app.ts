import express, {Application}  from 'express'
import morgan from 'morgan'
import productosRoutes from './routes/productos.routes'
import config from './config'

const app: Application = express();


let port; 


//Configuraciones
app.set('port', config.port);

//Middlewares: Funciones que procesan los datos antes que lleguen a las rutas
app.use(morgan('dev'));

//Rutas
app.use(productosRoutes);

export default app;