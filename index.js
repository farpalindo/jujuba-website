const path = require(`path`);
const { Permissions } = require("discord.js");
const ejs = require("ejs");
const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))

app.get("/", function(req, res) {
  res.render('index.ejs')
})

app.listen(80, function(){ console.log('ok')})