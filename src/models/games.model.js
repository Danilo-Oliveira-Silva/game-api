const fs = require('fs').promises;

const getAll = async () => {
    const data = await fs.readFile(`${__dirname}/../data/games.json`, 'utf-8');
    return JSON.parse(data);
};

module.exports = {
    getAll,
}