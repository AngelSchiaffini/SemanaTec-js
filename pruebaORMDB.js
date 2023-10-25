//Como utilizar la herramienta ORM Sequelize

const Sequelize = require('sequelize')
//Configurar la conexion
// mysql -u -h -P 3306 -p
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

const Ejemplo = sequelize.define('ejemplo', {
    idTrabajo:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    descripcion: {
        type :Sequelize.STRING,
        allowNull: false
    }
})

const Ejemplo2 = sequelize.define('ejemplo2', {
    idTrabajo:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    descripcion: {
        type :Sequelize.STRING,
        allowNull: false
    }
})

//Cargar Modelos
const modelDefiners =[
    require('../models/persona'),
    require('../models/proyecto'),
    require('../models/proyectoPersona')
]

//Vincular el modelo con el objeto de conexion
for(const modelDefiners of modelDefiners){
    modelDefiners(sequelize);
}


//Prueba de conexion
sequelize.sync()
    .then(result=>{
        console.log("Conexion Exitosa");
    })
    .catch(error=>console.log(error));