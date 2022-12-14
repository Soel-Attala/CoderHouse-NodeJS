const express = require('express')
const app = express();
const PORT = 8050

let personas = []

app.use(express.json)
app.use(express.urlencoded({ extended: true }))


app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('inicio', { personas })
})

app.post('/personas', (req, res) => {
    personas.push(req.body)

    res.redirect('/')
})




app.listen(PORT, () => {
    console.log(`servidor corriendo en ${PORT}`)
})