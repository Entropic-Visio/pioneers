const GetLoginView = (req, res) => {
    return res.render('login.view.pug');
};

const GetUserInformation = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    console.log('Email:', email)
    console.log('Password:', password)

    res.send('Form Submitted Successfully');
};

module.exports = { GetLoginView, GetUserInformation };