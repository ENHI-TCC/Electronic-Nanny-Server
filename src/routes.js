const express = require('express');

const BabyMonitorController = require('./controllers/BabyMonitorController');

const routes = express.Router();

// Rotas Baby Monitor
routes.get('/ServerRequest/CryReport', BabyMonitorController.index);
routes.post('/ServerRequest/NewCry', BabyMonitorController.insertNewCry);
routes.post('/ServerRequest/DeleteCryById', BabyMonitorController.deleteById);
routes.delete('/ServerRequest/DeleteAll', BabyMonitorController.deleteAll);

module.exports = routes;