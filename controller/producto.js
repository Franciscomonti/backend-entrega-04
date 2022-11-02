class Producto {
    constructor(titulo, precio, thumbnail){

    this.titulo = titulo;
    this.precio = precio;
    this.thumbnail = thumbnail;
    }

    static productos = [{titulo: 'caca', precio: 2 , thumbnail: "Url caca", id: 1}];
}

module.exports = Producto; 