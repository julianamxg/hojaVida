/*
const http=require('http');

const host = 'localhost';
const port = 8000;

const requestLister=function(req,res){
    res.writeHead(200);
    Response.apply("Mi primer servidor");
};

const server=http.createServer(requestLister);
server.listen(port,host,()=>{
    console.log("Se creo :p");
})

const op=require('./ejercicio1.js');
 op.sumar(4,8)
 op.restar(6,8)
 op.multiplicar(2,4)
 op.dividir(6,2)

const http=require('http');
function handleServer(req,res){
    res.write('<h1>Respuesta del usuario</h1>')
    res.end()
}

const server=http.createServer(handleServer).listen(3001);*/

const express = require('express')
const app = express()
const port = 3000
app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs')
app.set('views', __dirname + '/views')


app.get('/', (req, res) => {
    /*res.render('index',{titulo:"pagina home cargada"})*/
    res.render('index')
 
})

app.get('/Educacion', (req, res)=>{
    res.render('educacion')
})


app.get('/Hobbies', (req, res)=>{
    res.render('hobbies')
})

app.get('/Contacto', (req, res)=>{
    res.render('contacto')
})

app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})