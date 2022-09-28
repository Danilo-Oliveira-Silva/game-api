const gamesModel = require('../models/games.model');

const getAll = async () => {
    const data = await gamesModel.getAll();
    return data;
}

module.exports = {
    getAll,
}