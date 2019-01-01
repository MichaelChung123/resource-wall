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
const indexDataRoutes = require("./routes/index-data");
const userscollectionRoutes = require("./routes/userscollection");
const commentsRoutes = require("./routes/comments");
const resourcePage = require("./routes/resources-page");
const likes = require("./routes/likes");
const rates = require("./routes/ratings");
const editProfileRoutes = require("./routes/editprofile");
const profileRoutes = require("./routes/profile");
const searchtopicRoutes = require("./routes/searchtopic");
const userheaderRoutes = require("./routes/userheader");
const profileLikesRoutes = require("./routes/profilelikes");

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
app.use("/api/index-data", indexDataRoutes(knex));
app.use("/api/userscollection", userscollectionRoutes(knex));
app.use("/api/comments", commentsRoutes(knex));
app.use("/api/resources-page", resourcePage(knex));
app.use("/api/likes", likes(knex));
app.use("/api/ratings", rates(knex));
app.use("/api/editprofile", editProfileRoutes(knex));
app.use("/api/profile", profileRoutes(knex));
app.use("/api/searchtopic", searchtopicRoutes(knex));
app.use("/api/userheader", userheaderRoutes(knex));
app.use("/api/profilelikes", profileLikesRoutes(knex));


function checkUsername(userid){
  return knex.select("username").from("users").where('id', userid)
  .then(function (users){  
    if(users.length>0){
      return Promise.resolve(users[0].username);
    } else {
      return Promise.resolve(0)
    }
  });
};


// Home page
app.get("/", (req, res) => {
  if (req.session.userid) {
    let result = checkUsername(req.session.userid);
    result.then((username) => {
      let templateVars = {
        user: req.session.userid,
        username: username,
      };
      res.render("index", templateVars);
    })
  } else {
    let templateVars = {
      user: req.session.userid,
    };
    res.render("index", templateVars);
  }
});

//Log out
app.post("/logout", (req, res) => {
  req.session = null;
  res.redirect("/");
});

//Get page to edit profile info
app.get("/:username/profile", (req, res) => {
  if (req.session.userid) {
    let result = checkUsername(req.session.userid);
    result.then((username) => {
      let templateVars = {
        user: req.session.userid,
        username: username
      };
    res.render("userpage", templateVars);
    })
  } else {
    let templateVars = {
      user: req.session.userid,
    };
    res.render("userpage", templateVars);
  }
})

app.get("/:username/editprofile", (req,res) => {
  let result = checkUserId(req.params.username);
  result.then((value)=>{
    if(value === req.session.userid){
      let templateVars = {
        user: req.session.userid,
        username: req.params.username
      };
      res.render("editprofile", templateVars);
    } else{
      res.send("This is not your profile.");
    }
  });
});

//Update profile information in database
app.post("/editprofile", (req,res) => {
  knex('users')
  .where('id', req.session.userid)
  .update({
    name: req.body.updatename,
    username: req.body.updateusername,
    password: req.body.updatepassword,
    photo: req.body.updatephoto
  })
  .then((result) => {
    res.redirect(`/${req.body.updateusername}/profile`)
  });
});

//Get page to create a collection
app.get("/createcollection", (req, res) => {
  if (req.session.userid) {
    let result = checkUsername(req.session.userid);
    result.then((username) => {
      let templateVars = {
        user: req.session.userid,
        username: username
      };
      res.render("createcollection", templateVars)
    })
  } else {
    let templateVars = {
      user: req.session.userid
    }
    res.render("createcollection", templateVars);
  }
});

//Create collection
app.post("/createcollection", (req, res) => {
  let result = checkUsername(req.session.userid);
  result.then((username) => {
      const collectionname = req.body.collectionname;
    knex('collections')
    .insert({
        user_id: req.session.userid,
        name: req.body.collectionname
    })
    .then((result)=>{
      res.redirect(`/${username}/${collectionname}`);
    });
  })
});

app.get("/topic", (req, res) => {
  if (req.session.userid) {
    let result = checkUsername(req.session.userid);
    result.then((username) =>{
      let templateVars = {
        user: req.session.userid,
        username: username,
      };
      res.render("topic", templateVars);
    })
  } else {
    let templateVars = {
      user: req.session.userid,
      req: req
    };
    res.render("topic", templateVars)
  };
});


// Get username's collection page
app.get("/:username/:collectionname", (req, res) => {
  if (req.session.userid) {
    let result = checkUsername(req.session.userid);
    result.then((username) => {
      let templateVars = {
        user: req.session.userid,
        username: username,
        usercollection: req.params.username
      };
      res.render("usercollection", templateVars);
    })
  } else {
    let templateVars = {
      user: req.session.userid,
      usercollection: req.params.username
    }
    res.render("usercollection", templateVars);
  }
});

// Post page + inserting resource into collections
app.get("/post", (req, res) => {
  if (req.session.userid) {
    let result = checkUsername(req.session.userid);
    result.then((username) => {
      let templateVars = {
        user: req.session.userid,
        username: username
      };
      res.render("urls_post", templateVars)
    })
  } else {
    res.send("Please log in to post a resource");
  }
})

app.post("/:username/post/resource", (req, res) => {
  const userId = req.session.userid; 
  const {rurl, rtitle, rdescription, rtopic, dropdown} = req.body;
  const collectionId = knex('collections').select('id').where('name', dropdown);

  if (!rurl || !rtitle || !rdescription || !rtopic) {
    res.status(400).send("Please fill in all the fields");
  } else {
    knex('resources')
    .insert({
      user_id: userId,
      url: rurl,
      title: rtitle,
      description: rdescription,
      topic: rtopic
    })
    .returning('id')
    .then((r) => {
      return knex('collection_details')
      .insert({
        resource_id: r[0],
        collection_id: collectionId
      })
    })
    .then(() => {
      res.redirect('/')
    })
  }  
});

// resource details page
app.get("/:resourceid", (req, res) => {
  if (req.session.userid) {
    let result = checkUsername(req.session.userid);
    result.then((username) =>{
      let templateVars = {
        user: req.session.userid,
        username: username,
        resId: req.params.resourceid,
      };
      res.render("urls_show_resources", templateVars);
    })
  } else {
    let templateVars = {
      user: req.session.userid,
      resId: req.params.resourceid
    }
    res.render('urls_show_resources', templateVars);
  } 
})

app.post("/:resourceid/comments", (req, res) => {
  const userId = req.session.userid;
  const com = req.body.rcomment;
  const resourceid = req.params.resourceid;
    knex('comments')
    .insert({
      user_id: userId,
      resource_id: resourceid,
      comment: com,
      time_stamp: '2019-07-01'
    })
    .then(() => {
      res.redirect('/' + resourceid);
    });
});

app.post("/:resourceid/like", (req, res) => {
  const userId = req.session.userid;
  const resourceid = req.params.resourceid;
  knex('likes')
  .insert({
    user_id: userId,
    resource_id: resourceid,
    time_stamp: '2019-07-01'
  })
  .then(function() {
    res.redirect('/' + resourceid);
  })
})


// POST on RATING
app.post("/:resourceid/rate", (req, res) => {
  const userId = req.session.userid;
  const resourceid = req.params.resourceid;
  const rate = req.body.rating;

  knex('ratings')
  .insert({
    user_id: userId,
    resource_id: resourceid,
    time_stamp: '2019-07-01',
    rating: rate
  })
  .then(() => {
    res.redirect('/' + resourceid);
  })
});


// Edit page
app.get("/:resourceid/edit/post", (req, res) => {
  const result = checkUsername(req.session.userid);
  result.then((username) => {
    let templateVars = {
      user: req.session.userid,
      username: username,
      resId: req.params.resourceid
    }
    const userId = req.session.userid;
    const resourceid = req.params.resourceid;
    knex('resources')
    .select('*') 
    .where('resources.id', resourceid)
    .then((resourceResult) => {
      console.log("This is my id: ", resourceResult[0]);
      if (resourceResult[0].user_id === userId) {
        res.render("urls_edit", templateVars);
      } else {
        res.send("This is not your post");
      }
      // let found = r.find((e) => {
      //   if (e.id == undefined) {
      //     return undefined;
      //   } else {
      //     return e.id == resourceid
      //   }  
      // })
      //   if (found == undefined) {
      //     res.send(`this is not your post`);
      //   } else if (found.id == resourceid) {          
      //       res.render("urls_edit", templateVars);
      //   }
    });
  });
});

app.post("/:resourceid/edit/post", (req, res) => {
  const {etitle, eURL, etopic, edescription} = req.body;
  const selectCollection = req.body.dropdown;
  const resourceId = req.params.resourceid;
  const collectionId = knex('collections').select('id').where('name', selectCollection)
  knex('resources')
  .where('resources.id', resourceId)
  .update({
    title: etitle,
    url: eURL,
    topic: etopic,
    description: edescription
  })
  .then(() => {
    return knex('collection_details')
    .update({
      resource_id: resourceId,
      collection_id: collectionId
    })
  })
  .then(() => {
    res.redirect('/' + resourceId);
  })

})

app.post("/:resourceid/edit/delete", (req, res) => {
  const resourceid = req.params.resourceid;
  let comments = knex('comments').where('resource_id', resourceid)
  .delete()
  let ratings = knex('ratings').where('resource_id', resourceid)
  .delete()
  let likes = knex('likes').where('resource_id', resourceid)
  .delete()
  let collection = knex('collection_details').where('resource_id', resourceid)
  .delete()
  Promise.all([comments, ratings, likes, collection])
  .then(() => {
    return knex('resources').where('id', resourceid).delete()
  })
  .then(() => {
    res.redirect('/')
  });
});

var promise1 = new Promise(function(resolve, reject) {
  resolve('Success!');
});

function checkUserId(username){
  return knex.select("id").from("users").where('username',username)
  .then((users) => {
    if(users.length>0) {
      return Promise.resolve(users[0].id);
    } else {
      return Promise.resolve(0)
    }
  });
}

//Create login
app.post('/', (req, res) => {
  let result = checkUserId(req.body.username);
  result.then((value)=>{
    if(value > 0){
      req.session.userid = value;
      res.redirect("/");
    } else{
      res.send("Incorrect login. Try again.");
    }
  })
});


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});