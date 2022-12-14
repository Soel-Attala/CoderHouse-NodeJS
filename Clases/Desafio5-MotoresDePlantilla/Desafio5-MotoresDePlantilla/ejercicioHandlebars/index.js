const express = require('express')
const handlebars = require('express-handlebars')
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.engine('hbs',
    handlebars({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
        layoutDir: __dirname + '/views/layouts',
        partialDir: __dirname + '/views/partials'
    }))

app.set('view engine', 'hbs');
app.set('views', './views');


let products = []


app.get('/products/add', (req, res) => {
    res.render('formulario')
})

app.post("/products/add", (req, res) => {
    products.push(req.body);
    res.redirect("/products/add");
});

app.get("/products/list", (req, res) => {
    const productList = products.length > 0 ? true : false;
    res.render("list", { products, productList });
});



const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))
