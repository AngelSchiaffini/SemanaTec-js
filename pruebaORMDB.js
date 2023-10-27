//Como utilizar la herramienta ORM Sequelize
const Sequelize= require('sequelize');
//Configurar la conexion
//mysql -u admin -h -P 3306 -p
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

const Ejemplo = sequelize.define('ejemplo',{
    idTrabajo:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    descripcion:{
        type: Sequelize.STRING,
        allowNull:true
    }
});

const Ejemplo2 = sequelize.define('ejemplo2',{
    idTrabajo:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    descripcion:{
        type: Sequelize.STRING,
        allowNull:true
    }
});

//Prueba de conexion
sequelize.sync()
    .then(result=>{
        console.log("Conexión exitosa");
    })
    .catch(error=>console.log(error));
