import app from './app';

//Funcion principal que se ejecuta apenas se levante la app.
const main = () => {
    app.listen(app.get('port'));
    console.log(`Server corriendo en el puerto`, app.get('port'));
}

main();