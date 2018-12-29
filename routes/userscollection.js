"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    const referer = req.headers.referer.split('/');
    const collectionName = referer[4].split("%20").join(' ');
    console.log("Collection name:", collectionName);
    knex
      .select("*")
      .from("collection_details")
      .join('resources', 'collection_details.resource_id', 'resources.id')
      .join('collections', 'collection_details.collection_id', 'collections.id')
      .join('users', 'collections.user_id', 'users.id')
      .where('collections.name', collectionName)
      .where('users.username', referer[3])
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}