const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan')
const path = require('path');
const productRouter = express.Router();

const app = express();
const port = process.env.PORT;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine", "ejs");

productRouter.route("/").get((req,res) => {
    res.render("products", {
        products: [
            {productTitle: 'ซีพียู', productDescription: 'ซีพียูยี่ห้อ 1 ดีมาก', productPrice: 10000},
            {productTitle: 'ซีพียู 2', productDescription: 'ซีพียูยี่ห้อ 2 ดีมาก', productPrice: 11000},
            {productTitle: 'ซีพียู 3', productDescription: 'ซีพียูยี่ห้อ 3 ดีมาก', productPrice: 12000},
            {productTitle: 'ซีพียู 4', productDescription: 'ซีพียูยี่ห้อ 4 ดีมาก', productPrice: 13000},
        ],
    });
});
productRouter.route("/1").get((req,res) => {
    res.send("Hello Products1");
});

app.use('/products', productRouter)

app.get("/",(req, res) => {

    res.render('index');

})

app.get("/index.html",(req, res) => {

    res.render('index');

})

app.listen(port, () => {

    console.log("Listening on port " + chalk.green(port));

})