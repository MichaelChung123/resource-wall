"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("collection_details")
      .join('resources', 'collection_details.resource_id', 'resources.id')
      .join('collections', 'collection_details.collection_id', 'collections.id')
      .join('users', 'collection_details.id', 'users.id')
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}