const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// ----------- IMPORT ROUTES ----------- //
const homeRoute = require('./routes/home.route.js'); 
const aboutRoute = require('./routes/about.route.js');
const contactRoute = require('./routes/contact.route.js');
const registerRoute = require('./routes/register.route.js');
const loginRoute = require('./routes/login.route.js');
const citiesRoute = require('./routes/cities.route.js');


const app = express();
const port = 3000;

// ----------- SETUP ----------- //
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

// ----------- ROUTES ----------- //
app.use('/', homeRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/cities', citiesRoute);


// ----------- RUN ----------- //
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});