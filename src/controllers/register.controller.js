const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');
const usersService = require('../services/users.service.js');

const GetRegisterView = (req, res) => {
    return res.render('register.view.pug');
};

const RegisterUser = async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        return res.render('register.view.pug', { emptyField: true });
    };

    if (password !== confirmPassword) {
        return res.render('register.view.pug', { passwordDontMatch: true });
    };

    const results = await usersService.searchUserFromDatabase(email);

    if (results === true) {
        return res.render('register.view.pug', { userAlreadyExists: true });
    }

    usersService.addUserToDatabase(username, email, password);
    res.render('login.view.pug', { isLoggedIn: false });
};

module.exports = { GetRegisterView, RegisterUser }