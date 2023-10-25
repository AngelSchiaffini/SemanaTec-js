//importar bibliotecas

const express = require("express");
const app = express();
//Trae el objeto require
const sequelize = require('./util/database.js')
//middleware
app.use(express.json());

//Mala practica
app.get('/test', (request, response)=>{
    console.log("Esto no se debe de hacer pero funciona");
    response.send('<h1>Servidor Funcionando</h1>');
})

//levantar el server y escuchar peticiones
sequelize.sync()
    .then(result=>{
        app.listen(8080, ()=>{
            console.log("Sevidor escuchando 👍")
    })
    .catch(error=>console.log(error))
});