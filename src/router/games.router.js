const { Router } = require('express');
const gamesController = require('../controllers/games.controller');
const gameRouter = Router();

gameRouter.get('/',gamesController.getAll);

module.exports = gameRouter;