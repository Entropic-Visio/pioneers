const userService = require('../services/users.service.js');

const GetLoginView = (req, res) => {
    return res.render('login.view.pug');
};

const GetUserInformation = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(email === "" && password === "") {
            return res.render('login.view.pug', { empty_email: true, empty_password: true });
        }
    
        if(email === "") {
            return res.render('login.view.pug', { empty_email: true });
        }
    
        if(password === "") {
            return res.render('login.view.pug', { empty_password: true });
        }
        
        const results = await userService.getUserFromDatabase(email, password);

        if(results === null) {
            return res.render('login.view.pug', { userNotFound: true });
        }

        return res.send('Form Submitted Successfully');
    
    } catch {
        console.error('Error');
    }
};

module.exports = { GetLoginView, GetUserInformation };