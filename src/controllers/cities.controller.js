const { getAllCities } = require('../services/cities.service.js');
const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');

const GetAllCities = async (req, res) => {
    try {
        const results = await getAllCities();
        return res.json(results);
    } catch (error) {
        console.error("Error Fetching Cities: ", error.message);
        return error
    }
}

module.exports = { GetAllCities }