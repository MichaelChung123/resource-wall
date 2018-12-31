"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("resources")
      .join('users', 'resources.user_id', 'users.id')
      .then((results) => {
        res.json(results);
      });
  });

  return router;
}
