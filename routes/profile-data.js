"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    const referer = req.headers.referer.split('/');
    console.log(req.headers);
    knex
      .select("*")
      .from("users")
      .where('username', referer[3])
      .then((user) => {
        knex
          .select("*")
          .from("collection_details")
          .join('resources', 'collection_details.resource_id', 'resources.id')
          .join('collections', 'collection_details.collection_id', 'collections.id')
          .where('collections.user_id', user[0].id)
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


