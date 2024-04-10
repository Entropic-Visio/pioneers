const isUserLoggedIn = require('../middlewares/isUserLoggedIn.middleware.js');

const GetRegisterView = (req, res) => {
    return res.render('register.view.pug');
};

const RegisterUser = (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        return res.send('Bad Credentials');
    };

    if (password !== confirmPassword) {
        return res.send('Passwords Do Not Match');
    };

    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    res.send('Registration Successful');
};

module.exports = { GetRegisterView, RegisterUser }