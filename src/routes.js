const express = require('express');

const BabyMonitorController = require('./controllers/BabyMonitorController');

const routes = express.Router();

// Rotas Baby Monitor
routes.get('/ServerRequest/CryReport', BabyMonitorController.index);
routes.post('/ServerRequest/DeleteCryById', BabyMonitorController.deleteById);

module.exports = routes;