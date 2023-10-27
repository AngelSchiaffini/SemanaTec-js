//Importar bibliotecas
const express = require("express"); 
const app = express();
const personaRoutes = require('./routes/persona')
const proyectoRoutes = require('./routes/proyecto')
//Trae el objeto de conexion
const sequelize = require('./util/database')

//middleware
app.use(express.json());
app.use('/persona', personaRoutes);
app.use('/proyecto', proyectoRoutes);

// //Mala práctica
// app.get('/test',(request,response)=>{
//     console.log("Esto no se debe de hacer pero funciona");
//     response.send('<h1>Servidor funcionado</h1>');
// })

//levantar el server y escuchar peticiones
sequelize.sync(/*{force:true}*/) /*Borra toda las tablas de la base de datos*/
    .then(result=>{
        app.listen(8080,()=>{
            console.log("Servidor escuchando 👍 🥇")
        })
    })
    .catch(error=>console.log(error));

