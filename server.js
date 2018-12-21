"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

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

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

function getUserByUsername (username) {
  return knex.select('*').from('users').where('username', username)
  .then((err, rows) => {
    if (err) {
      console.log("Error: ", err);
    }  
    else if (rows.len > 0) {
      return rows[0];
    } else {
      return undefined;
    }
  });
}

app.get("/login", (req, res) => {
res.render("login");
  /*
  let templateVars = {
    user: users[req.session.userid],
  }
  if (templateVars.user){
    res.redirect("/");
  } else{
    res.render("login");
  }
*/
});

//Create login
app.post('/login', (req, res) => {
  getUserByUsername(req.body.username)
  .then((user) => {
      if (req.body.password === user.password) {
          res.send("yeah you're cool");
      } else {
          res.status(404).send("I don't know what you're talking about");
      }
  });
  // if (req.body["username"] == "" || req.body["password"] == ""){
  //   res.status('400');
  //   res.send("Please provide a username and password to log in")
  // } else if (checkLogin(req)) {
  //   req.session.userid = grabId(req.body.username);
  //   res.redirect("/");
  // } else {
  //   res.send("Incorrect password or email entered.")
  // }
});