const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

// ----------- IMPORT ROUTES ----------- //
const homeRoute = require('./routes/home.route.js'); 
const aboutRoute = require('./routes/about.route.js');
const contactRoute = require('./routes/contact.route.js');
const registerRoute = require('./routes/register.route.js');
const loginRoute = require('./routes/login.route.js');
const logoutRoute = require('./routes/logout.route.js');
const dashboardRoute = require('./routes/dashboard.route.js');
const citiesRoute = require('./routes/cities.route.js');

// ----------- IMPORT MIDDLE WARE ----------- //
const isLoggedIn = require('./middlewares/isLoggedIn.middleware.js');

const app = express();
const port = 3000;

// ----------- SETUP ----------- //
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
     }
}));

// ----------- ROUTES ----------- //
app.use('/', homeRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/logout', logoutRoute);
app.use('/cities', citiesRoute);
app.use('/dashboard', isLoggedIn, dashboardRoute);// ----------- RUN ----------- //
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});