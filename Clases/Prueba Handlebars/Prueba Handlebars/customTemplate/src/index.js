const express = require('express')
const { promises: fs } = require('fs')
const app = express();

//hacemos config del engine
app.engine('ntl', async (filePath, options, callback) => {
    try {
        const content = await fs.readFile(filePath);
        const rendered = content.toString().replace('#title#', '' + options.title + '')
            .replace('#message#', '' + options.message + '');
        return callback(null, rendered);
    } catch (error) {
        return callback(new Error(error));
    }
});

app.set('views', './views')
app.set('views engine', 'ntl')

app.get('/', (req, res) => {
    const datos = {
        title: 'custom template',
        message: 'custom template message'
    }

    res.render('index.ntl', datos)
})






app.listen(8090, () => {
    console.log('servidor funcionando correctamente')
})