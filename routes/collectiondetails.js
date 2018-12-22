"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("collection_details")
      .join('collections', 'collections.id')
      .join('resources', 'resources.id')
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}