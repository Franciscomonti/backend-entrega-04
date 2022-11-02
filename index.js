const express = require('express');                        // llamo a express module
const rutaProductos = require('./routes/routes_prod');     // solicito/importo el archivo donde estan las rutas

const port = 8080;                                         //puerto en el cual quiero crear 8080
const app = express();
const server = app.listen(port, () => {
    console.log(`corriendo en el servidor http://localhost:${port}`);    
});                                                        //creo el server en el puerto asignado

app.use(express.json());
app.use(express.urlencoded({ extended: true }));           //para poder manejar los JSON
app.use(express.static(__dirname + '/public'));            //carpeta publica statica

app.use('/api', rutaProductos)                             //creo un route para no asignar api/ a todas las rutas