const express = require('express');
const bodyParser = require('body-parser');
const gameRouter = require('./router/games.router');

const app = express();
app.use(bodyParser.json());

app.use('/games', gameRouter);

app.get('/', (_request, response) => {
    response.status(200).json({ message: 'Game API is alive '});
});

module.exports = app;