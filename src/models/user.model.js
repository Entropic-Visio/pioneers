const userServices = require('../services/user.services.js');

class User {
    constructor(id, username, email, userType) {
        this.id = parseInt(id);
        this.username = username;
        this.email = email;
        this.userType = userType; 
    }
}

module.exports = User;