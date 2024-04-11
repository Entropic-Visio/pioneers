const userService = require('../services/users.service.js');
const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');

const GetLoginView = (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);
    return res.render('login.view.pug', { isLoggedIn });
};

const LoginUser = async (req, res) => {
    try {

        if (!req.body.email || !req.body.password) {
            return res.render('login.view.pug', { empty_email: !req.body.email, empty_password: !req.body.password });
        }

        const { email, password } = req.body;

        const user = await userService.verifyUser(email, password);

        if (!user) {
            return res.render('login.view.pug', { userNotFound: true });
        }

        req.session.isLoggedIn = true;
        req.session.user = user;
        const isLoggedIn = isUserLoggedIn(req);
        return res.render('dashboard.view.pug', { isLoggedIn });
    } catch {
        console.error('Error');
    }
};

module.exports = { GetLoginView, LoginUser };