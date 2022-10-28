class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        return `El nombre completo es: ${this.nombre} ${this.apellido}`
    }


    addMascota(nombreMascota) {
      this.mascotas.push(nombreMascota)
    }
    
    countMascotas() {
        return `La cantidad de mascotas es: ${this.mascotas.length}`
    }
    
    addBook(nombre, autor) { 
        const libro = {
            nombre: nombre,
            autor: autor
        }
        this.libros.push(libro)
    }

    getBookNames() {
        const book =[]
            this.libros.map((libro) => {
            book.push(libro.nombre)
        })
        return book
    }
}




let persona1 = {
    nombre: "Soel",
    apellido: "Attala",
    libros: [
    {
        nombre: "Eragon",
        autor: "Cristopher Paolini",
    },
    ],

    mascotas: ["Roco", "Coquito"],
}

let persona = new Usuario(persona1.nombre, persona1.apellido, persona1.libros, persona1.mascotas)

console.log(persona.getFullName())

persona.addMascota("Lulu")
persona.addMascota("Candy")
console.log(persona.mascotas)

console.log(persona.countMascotas())

persona.addBook("Las Cronicas de Narnia","CS Lewis")
console.log(persona.libros)

console.log(persona.getBookNames())