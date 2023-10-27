const Sequelize= require('sequelize');
const {applyRelations} =require('./relations')
//Configurar la conexion
const sequelize = new Sequelize('semanatec','admin','Password',{
    dialect:'mysql',
    host:'database-1.c8zm2qfqovql.us-east-1.rds.amazonaws.com',
    define:{
        //Evitar que nos ponga createdAt y updateAt
        timestamps:false,
        //Pluralizar
        freezeTableName:true
    }
});

//Cargar modelos
const modelDefiners =[
    require('../models/persona'),
    require('../models/proyecto'),
    require('../models/proyectoPersona')    
];

//Vicular el modelo con el objeto de conexión
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}

//Construir las relaciones
applyRelations(sequelize);

//exportar el elemento de conexión
module.exports = sequelize;

