const Sequelize = require('sequelize');

const Proyecto = (sequelize)=>{
    sequelize.define('proyecto',{
        idProyecto:{
            type: Sequelize.STRING,
            autoIncrement: true,
            primarykey: true,
            allowNull: false
        },
        nombre:Sequelize.STRING,
        descripction:Sequelize.STRING
    })
}
module.exports = Proyecto
