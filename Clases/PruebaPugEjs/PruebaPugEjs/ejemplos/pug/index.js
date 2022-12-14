const express = require('express')

const app = express();
const PORT = 8090

app.set('views', './views')
app.set('views engine', '.pug')

app.get('/hello', (req, res) => {
    res.render('hello.pug', { msn: 'Hello pug !!' })
})













app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
})