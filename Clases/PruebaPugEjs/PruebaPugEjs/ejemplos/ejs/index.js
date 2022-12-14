const express = require('express')

const app = express();

app.set('views', './views')
app.set('view engine', 'ejs')

const pets = [
    { name: 'Samy', organization: 'DigitalOcean', year: '2011' },
    { name: 'Tux', organization: 'Linux', year: '1991' },
    { name: 'Moby', organization: 'Docker', year: '2013' }
]

const tagLine = 'El concepto de programacion sin una mascota no esta bueno'

app.get('/', (req, res) => {
    res.render('pages/index.ejs', { pets, tagLine })
})

app.get('/', (req, res) => {
    res.render('pages/about.ejs')
})





const PORT = 8060
app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${PORT}`)
})