//Como utilizar la herramienta ORM Sequelize

const Sequelize = require('sequelize');
const ProyectoPersona = require('../models/proyectoPersona');
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

function applyRelations(sequelize){
    console.log(sequelize.models);
    const Proyecto = sequelize.models.proyecto;
    const Persona = sequelize.models.persona;
    const ProyectoPersona = sequelize.modelsproyectopersona;

//Un prouecto puede estar muchas personas
Proyecto.belongsToMany(Persona, {through: ProyectoPersona});
//Una persona puede dar participar en muchos proyectos
Persona.belongsToMany(Proyecto, {through: ProyectoPersona});

}

module.exports = {applyRelations};
