"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    const referer = req.headers.referer.split('/');
    knex("likes")
    .where('resource_id', referer[3])
    .count('resource_id')
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}