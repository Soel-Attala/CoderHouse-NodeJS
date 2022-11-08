const fs = require('fs')
class Container {
    constructor(path,products) {
        this.nameFile = path
        this.products = products
    }

    async save(title, price, thumbnail) {

        const producto = {
            title: title,
            price: price,
            thumbnail: thumbnail,
            id: this.products[this.products.length-1].id+1
        }
       this.products.push(producto);
        try {
            await fs.promises.writeFile('./Productos.txt', JSON.stringify(this.products, null, 2))
        } catch (error) {
            console.log(error)
        }
    }


    async getByID(id) {
        const busqueda = await this.products.filter((p) => p.id == id);
        if (busqueda.length !== 0) {
            console.log(busqueda)
        } else {
            console.log('Null')
        }
    }


    async getAll() {
        try {
            const contenido = await fs.promises.readFile('./Productos.txt', 'utf-8')
            console.log(contenido)

        } catch(error) {
            console.log('Error al leer el archivo')
        }
    }


    async deleteById(id) {

        const busqueda = this.products.filter((p) => p.id !== id);
        

        await fs.writeFile('./Productos.txt', JSON.stringify(busqueda, null, 2), error => {
              if (error) {
                throw new Error('No pude borrarlo')
              }

            console.log('Datos eliminados con exito')
        })
    }


    async deleteAll() {
        try {
            await fs.promises.writeFile('./Productos.txt', '')
            console.log('Datos eliminados con exito')
        } catch(error) {
            console.log('No se pudo eliminar los datos')
        }
    }
}


let archivo = {
    products: [
        {
            title: 'Escuadra',
            price: 123.45,
            thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
            id: 1
        },
        {
            title: 'Calculadora',
            price: 234.56,
            thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
            id: 2
        },
        {
            title: 'Globo Terraqueo',
            price: 345.67,
            thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
            id: 3
        }
    ]

}
const Container1 = new Container('', archivo.products)

Container1.save('Compas', 125, 'www.libreriafax.com');
Container1.getByID(3);
Container1.getAll();
//Container1.deleteById(1);
//Container1.deleteAll();
