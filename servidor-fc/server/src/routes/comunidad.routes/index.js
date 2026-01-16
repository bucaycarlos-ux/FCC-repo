const express = require('express'); 

const provinciaRouter = require('./provincia.route');
const cantonRouter = require('./canton.route');
const parroquiaRouter = require('./parroquia.route');
const tipo_personaRouter = require('./tipo_persona.route');

const personaRouter = require('./persona.route');
const interaccionRouter = require('./interaccion.route');
const procesosRouter = require('./procesos.route');
const tipoprocesoRouter = require('./tipoproceso.route');
const normativaRouter = require('./normativa.route');
const tipo_normativaRouter = require('./tipo_normativa.route');



function setupComunidadRoutes(router) {
  
//--------- rutas de acceso para las funciones del controlador
//---------- enlazan o referencias desde el index las routes y controller
//-------router.use=funcion router para dirigir el trafico a traves de rutas web
//------- /provincia= http://localhost:5000/api/fcc/  llega a la ruta web222222222
  router.use('/provincia', provinciaRouter)
  router.use('/canton', cantonRouter)
  router.use('/parroquia', parroquiaRouter)
  router.use('/tipo_persona', tipo_personaRouter)
  router.use('/persona', personaRouter)
  router.use('/interaccion', interaccionRouter)
  router.use('/procesos', procesosRouter)
  router.use('/tipoproceso', tipoprocesoRouter)
  router.use('/normativa', normativaRouter)
  router.use('/tipo_normativa', tipo_normativaRouter)

  }

module.exports = setupComunidadRoutes;