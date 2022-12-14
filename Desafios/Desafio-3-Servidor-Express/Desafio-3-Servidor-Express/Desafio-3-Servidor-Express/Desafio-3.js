const express = require('express')
const app = express()
const fs = require('fs')

const server = app.listen(8080, () => {
    console.log('servidor corriendo en el puerto', 8080)
})

server.on('error', error => {
    console.log('error en el servidor', error)
})

let productos

app.get('/productos', (req, res) => {
    res.send(productos)
})


app.get('/productoRandom', (req, res) => {

    const random = productos[Math.floor(Math.random() * productos.length)]
    res.send(random)
})

class Container {
    constructor(archivo) {
        this.fileName = archivo
    }
    getAll() {
        let resultado = fs.readFileSync(this.fileName)
        productos = JSON.parse(resultado)
    }
}


let contenedor = new Container('Productos.txt')

contenedor.getAll();
