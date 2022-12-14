// obtenga la siguiente información de dicho array
// A) Los nombres de los productos en un string separados por comas.
// B) El precio total
// C) El precio promedio
// D) El producto con menor precio
// E) El producto con mayor precio
// F) Con los datos de los puntos 1 al 5 crear un objeto y representarlo por consola


const productos = [
    { id: 1, nombre: 'Escuadra', precio: 323.45 },
    { id: 2, nombre: 'Calculadora', precio: 234.56 },
    { id: 3, nombre: 'Globo Terráqueo', precio: 45.67 },
    { id: 4, nombre: 'Paleta Pintura', precio: 456.78 },
    { id: 5, nombre: 'Reloj', precio: 67.89 },
    { id: 6, nombre: 'Agenda', precio: 78.90 }
]

function getNombres(productos) {
    const nombres = productos.map(producto => producto.nombre);
    return nombres.join(', ')
}

function getPrecioTotal(productos) {
    let total = 0;
    for (const producto of productos) {
        total += producto.precio;
    }
    total = parseFloat(total.toFixed(2))
    return total;
}

function getPrecioPromedio(productos) {
    return getPrecioTotal(productos) / productos.length;
}


// Resolver inicialmente este - ejemplo en clase
function getProductMinPrice(productos) {
    if (productos.length === 0) {
        throw new Error('no se puede calcular el mínimo de un arreglo vacio');
    }

    let min = productos[0].precio;
    let prod = productos[0];

    for (const producto of productos) {
        if (producto.precio < min) {
            min = producto.precio;
            prod = producto;
        }
    }
    return prod;
}

function getProductMaxPrice(productos) {
    if (productos.length === 0) {
        throw new Error('no se puede calcular el mínimo de un arreglo vacio');
    }

    let max = productos[0].precio;
    let prod = productos[0];

    for (const producto of productos) {
        if (producto.precio > max) {
            max = producto.precio;
            prod = producto;
        }
    }
    return prod;
}


const info = {
    nombres: getNombres(productos),
    productoPrecioMinimo: getProductMinPrice(productos),
    productoPrecioMaximo: getProductMaxPrice(productos),
    total: getPrecioTotal(productos),
    promedio: getPrecioPromedio(productos)
}

console.log(info);