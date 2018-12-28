"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    const referer = req.headers.referer.split('/');
    knex('ratings')
      .avg("rating")
      .where('resource_id', referer[3])
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}