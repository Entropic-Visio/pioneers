const { userConnection } = require('./db.js');

async function getAllUsers() {
    // SQL query to select all cities from the 'city' table
    const sql = "SELECT * FROM `users`";
    try {
        // Execute the SQL query asynchronously
        const [rows, fields] = await userConnection.query(sql);

        // Get the number of cities returned
        console.log(`/users: ${rows.length} rows`);

        // Return the reterived rows
        return rows;
    } catch (error) {
        // Handle errors which occur during database query execution
        console.error(error);

        // Render 500.pug if an error occurs
        return null
    }
};

module.exports = { getAllUsers };