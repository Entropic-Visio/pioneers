const { worldConnection } = require('./db.js');

async function getAllCities() {
    // SQL query to select all cities from the 'city' table
    const sql = "SELECT * FROM `city`";
    try {
        // Execute the SQL query asynchronously
        const [rows, fields] = await worldConnection.query(sql);

        // Get the number of cities returned
        console.log(`/cities: ${rows.length} rows`);

        // Return the reterived rows
        return rows;
    } catch (error) {
        // Handle errors which occur during database query execution
        console.error(error);

        // Render 500.pug if an error occurs
        return null
    }
};

module.exports = { getAllCities };