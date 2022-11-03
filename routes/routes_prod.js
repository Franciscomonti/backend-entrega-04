
//llamo a router
const { Router } = require('express');
const Producto = require('../controller/producto.js'); 
const router = new Router()

//muestra todos los productos
router.get('/productos', (req, res) => {
    res.send(Producto.productos);
});

router.get('/productos/:id', (req, res) => {
    let productoId = Number(req.params.id);
    let productSelected = Producto.productos.find(item  => item.id === productoId)

    if(productSelected){
    res.send(productSelected)
    }else{
        res.status(404).send({error: 'Id de producto incorrecto'});
    }
})

//toma los datos desde el html le asigana un id y los carga con el metodo construtcor y los muestra
router.post('/productos', (req, res) => {
    let { titulo, precio, thumbnail } = req.body;

    const producto = { titulo, precio, thumbnail };

    producto.id = generarId()

    Producto.productos.push(producto);

    res.send(Producto.productos);
});

function generarId(){

    if(Producto.productos.length === 0){
        let id = 1
        return id
    }

    let id = Producto.productos.map((produc)=> produc.id)

    return Math.max(...id) + 1
}

router.put('/productos/:id', (req, res) => {
    let { titulo, precio, thumbnail } = req.body;

    let index = Producto.productos.findIndex(producto => producto.id === Number(req.params.id));
    
    let id = Number(req.params.id);

    if (index >= 0) {
        Producto.productos[index] = { titulo, precio, thumbnail, id };
        res.send(Producto.productos[index]);
    } else {
        res.status(404).send({ error: 'Producto no encontrado' });
    }
});

router.delete('/productos/:id', (req, res) => {

    let index = Producto.productos.findIndex(producto => producto.id === Number(req.params.id));

    if (index >= 0 ) {
        Producto.productos.splice(index, 1);
        res.send({ message: 'Producto eliminado' });
    } else {
        res.status(404).send({ error: 'Producto no encontrado' });
    }
})


//exporto router
module.exports = router;

