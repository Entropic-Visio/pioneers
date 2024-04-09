const express = require('express');
const path = require('path');

const homeRoute = require('./routes/home.route.js'); 
const aboutRoute = require('./routes/about.route.js');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", homeRoute);
app.use("/about", aboutRoute);

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
