const express = require('express');
const path = require('path');

const homeRoute = require('./routes/home.route.js'); 
const aboutRoute = require('./routes/about.route.js');
const contactRoute = require('./routes/contact.route.js');
const signUpRoute = require('./routes/signup.route.js');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", homeRoute);
app.use("/about", aboutRoute);
app.use("/contact", contactRoute);
app.use("/signup", signUpRoute);

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});