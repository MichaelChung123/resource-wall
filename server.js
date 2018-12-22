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

// Post page + inserting data to db
app.get("/post/1", (req, res) => {
  res.render("urls_post");
  
});

app.post("/post/1", (req, res) => {
  const userId = 1;     //request.params.id OR from auth
  const url = req.body.rurl;
  const title = req.body.rtitle;
  const description = req.body.rdescription;
  const topic = req.body.rtopic
  if (!url || !title || !description || !topic) {
    res.status(400).end();
  } else {
    knex('resources')
    .insert({
      user_id: userId,
      url: req.body.rurl,
      title: req.body.rtitle,
      description: req.body.rdescription,
      topic: req.body.rtopic
    })
    .then((result) => {
      res.redirect('/')
    })
  }  
})

app.get("/resourceid", (req, res) => {
  // const userId; // hard coded cookie
  
  res.render('urls_show_resources')
})



app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
