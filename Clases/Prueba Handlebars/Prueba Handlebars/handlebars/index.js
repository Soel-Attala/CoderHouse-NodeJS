const express = require('express')
const handlebars = require('express-handlebars')


const app = express();

//definimos motor de plantillas hbs
app.engine('hbs',
    handlebars({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
        layoutDir: __dirname + '/views/layouts',
        partialDir: __dirname + '/views/partials'
    }))


app.set('view engine', 'hbs')
app.set('views', './views')

fakeApi = () => [
    { name: 'Katatina', lane: 'midlaner' },
    { name: 'Jayce', lane: 'toplaner' },
    { name: 'Azir', lane: 'midlaner' },
    { name: 'prueba', lane: 'support' }
]


app.get('/', (req, res) => {
    res.render('main', { suggestedChamps: fakeApi(), listExist: true })
})


app.listen(8070, () => {
    console.log('server funcionando correctamente')
})

