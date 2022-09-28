const gamesService = require('../services/games.service');

const getAll = async (_req, res) => {
    const data = await gamesService.getAll();
    return res.status(200).json(data);
}

module.exports = {
    getAll,
}