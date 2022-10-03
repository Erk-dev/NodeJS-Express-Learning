const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan')
const path = require('path');

const app = express();
const port = process.env.PORT;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine", "ejs");

app.get("/",(req, res) => {

    res.render('index',{username: 'Erk', customers: ["phong","panot","phumphua"]});

})

app.listen(port, () => {

    console.log("Listening on port " + chalk.green(port));

})