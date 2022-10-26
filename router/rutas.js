const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // console.log(__dirname)
    res.render("index")
})

router.get('/Educacion', (req, res)=>{
    res.render('educacion')
})


router.get('/Hobbies', (req, res)=>{
    res.render('hobbies')
})

router.get('/Contacto', (req, res)=>{
    res.render('contacto')
})
module.exports = router;