"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();
const cookieSession = require('cookie-session')


const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

app.use(cookieSession({
  name: 'session',
  keys: ['userid'],
}))

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");
const resourcesRoutes = require("./routes/resources");
const collectionsRoutes = require("./routes/collections");
const collectiondetailsRoutes = require("./routes/collectiondetails");


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));
app.use("/api/resources", resourcesRoutes(knex));
app.use("/api/collections", collectionsRoutes(knex));
app.use("/api/collectiondetails", collectiondetailsRoutes(knex));

// Home page
app.get("/", (req, res) => {
  let templateVars = {
    user: req.session.userid
  };
  res.render("index", templateVars);
});

app.get("/editprofile", (req,res) => {
  let templateVars = {
    user: req.session.userid
  };
  res.render("editprofile", templateVars);
})

app.post("/logout", (req, res) => {
  req.session = null;
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});


var promise1 = new Promise(function(resolve, reject) {
  resolve('Success!');
});


function checkUsername(username){
  return knex.select("id").from("users").where('username',username)
  .then(function (users){  
    if(users.length>0){
      return Promise.resolve(users[0].id);
    } else {
      return Promise.resolve(0)
    }
    console.log("its after knex query");
  });
}
//Create login
app.post('/', (req, res) => {
  let result = checkUsername(req.body.username);
  result.then((value)=>{
    if(value > 0){
      req.session.userid = value;
      res.redirect("/");
    } else{
      res.send("Incorrect login. Try again.");
    }
  })
});