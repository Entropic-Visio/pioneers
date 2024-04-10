const GetRegisterView = (req, res) => {
    return res.render('register.view.pug');
};

const RegisterUser = (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    if (password !== confirmPassword) {
        return res.status(400).send('Passwords do not match');
    }

    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    res.send('Registration Successful');
};

module.exports = { GetRegisterView, RegisterUser }