"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get("/", (req, res) => {
    knex
        .select("*")
        .from("resources")
        .join('users', 'resources.id', 'users.id')
        .then((results) => {
            res.json(results);
    });
    // knex
    //   .select("*")
    //   .from("resources")
    //   .then((results) => {
    //     res.json(results);
    // });
  });

  return router;
}
