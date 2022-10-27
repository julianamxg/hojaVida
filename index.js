const express = require('express')
const app = express()
const port = 3002
app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs')
app.set('views', __dirname + '/views')


app.use('/juliana', require('./router/rutas'));

app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}/juliana`)
})