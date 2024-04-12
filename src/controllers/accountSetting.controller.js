const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');

const GetAccountSettingView = (req, res) => {
    const isLoggedIn = isUserLoggedIn(req);
    return res.render('accountSetting.view.pug', { isLoggedIn, user: req.session.user });
}

module.exports = { GetAccountSettingView }