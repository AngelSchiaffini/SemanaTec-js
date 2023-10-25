const Sequelize = require('sequelize');

const Persona = (sequelize)=>{
    sequelize.define('persona',{
        idPersona:{
            type: Sequelize.STRING,
            autoIncrement: true,
            primarykey: true,
            allowNull: false
        },
        nombre:Sequelize.STRING
    })
}
module.exports = Persona