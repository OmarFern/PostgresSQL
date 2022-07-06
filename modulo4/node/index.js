const express = require('express')
const conexion = require('./conexion')
const productoRouter = require('./routes/producto')

const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/productos', productoRouter)

app.listen(3000, ()=>{
    console.log('Aplicación corriendo en el puerto--------------> http://localhost:3000')
})