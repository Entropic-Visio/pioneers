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

async function getUserFromDatabase(email, password) {
    const sql = "SELECT * FROM `users` WHERE Email = ? and Password = ?";
    try {
        const [rows, fields] = await userConnection.query(sql, [email, password]);

        if (rows.length === 0) {
            return null;
        }
        console.log(rows[0]);
        return rows[0];

    } catch (error) {
        console.error('Error Retrieving User from Database:', error);
        return null;
    }
}

module.exports = { getAllUsers, getUserFromDatabase };