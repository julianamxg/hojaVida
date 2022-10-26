

const express = require('express')
const app = express()
const port = 3000
app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs')
app.set('views', __dirname + '/views')


/*app.get('/', (req, res) => {
    res.render('index',{titulo:"pagina home cargada"})
    res.render('index')
 
})*/

app.use('/juliana', require('./router/rutas'));

app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}/juliana`)
})