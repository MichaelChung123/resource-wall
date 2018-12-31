"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    const referer = req.headers.referer.split('/');
    knex
      .select("*")
      .from("users")
      .where('username', referer[3])
      .then((user) => {
        const profileUser = user[0].id;
        knex
          .select("*")
          .from("collections")
          .where('collections.user_id', profileUser)
          .then((collections) => {
            user[0].collections = collections;
            knex
              .select("*")
              .from("resources")
              .where("user_id", user[0].id)
              .then((resources) => {
                user[0].resources = resources;
                res.json(user[0]);
              });
          });
      });
  });

  return router;

}


