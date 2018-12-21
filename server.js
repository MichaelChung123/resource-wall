"use strict";

require('dotenv').config();

const PORT          = process.env.PORT || 8080;
const ENV           = process.env.ENV || "development";
const express       = require("express");
const bodyParser    = require("body-parser");
const sass          = require("node-sass-middleware");
const app           = express();
const cookieSession = require('cookie-session');


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

//Check user's info (col) based on info we have (info)
//Example info = username (from logging in), we need id (col = id)
function grabUserId (username) {
  for (let key in users) {
    const user = users[key];
    if (user.username === username) {
      return user.id;
    }
  }
}

f

function getCollectionId (collectionname, userid) {
  for (let key in collections) {
    const collection = collections[key];
    if (collection.name === collectionname && collection.user_id === userid){
      return collection.id;
    }
  }
}

function postsInCollection (collectionId) {
  let result = {}; 
  for (let posts in collection_details) {
    if (collection_details[posts].id === collectionId) {
      let temp = {

      }
    }
  }


  // let resultObject = {};
  // for (let url in urlDatabase) {
  //   if (urlDatabase[url].userid === id) {
  //     let temp = {
  //       shortURL: url,
  //       longURL: urlDatabase[url].longurl
  //     }
  //     resultObject[url] = temp;
  //   }
  // }
  // return resultObject;
}

//Creating collection page
app.get("/createcollection", (req, res) => {
  res.render("createcollection")
});

//Create collection
app.post("/createcollection", (req, res) => {
  const collectionname = req.body.collectionname;
  const userid = 1;
  console.log("we are hitting this");
  console.log(userid);
  console.log(collectionname);
  knex('collections')
  .insert({
      user_id: userid,
      name: collectionname
  })
  .then((result)=>{
    console.log("we are done");
    res.redirect(`/`);

  })
})

//Get specific collection
app.get("/:username/:collectionname", (req, res) => {
  let templateVars = {

  }
  res.render("collection");
})