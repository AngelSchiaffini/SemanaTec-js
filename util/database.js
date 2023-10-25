//Como utilizar la herramienta ORM Sequelize

const Sequelize = require('sequelize');
const {applyRelations} = require('./relations.js')
//Configurar la conexion
const sequelize = new Sequelize('semanatec', 'admin', '12345678aA',{
dialect: 'mysql',
host:'database-1.cxvvjooseu7q.us-east-1.rds.amazonaws.com',
define:{
    //Evitar que nos ponga createAt y updateAt
    timestamps: false,
    //Pluralizar
    freezeTableName: true
}
});

const modelDefiners = [
    require('../models/persona'),
    require('../models/proyecto'),
    require('../models/proyectoPersona')
]


for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}

//Construir las rlaciones
applyRelations(sequelize);


//Exportar el elemento de conexion
module.exports = sequelize;
