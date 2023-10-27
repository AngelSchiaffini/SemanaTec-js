const express = require('express');
const router = express.Router();
const proyectoController = require("../controllers/proyecto");

//Rutas de mi controller
router.post('/agregarProyecto', proyectoController.postAgregarProyecto);
router.get('/consultarProyectos', proyectoController.getConsultarProyecto);

module.exports = router;