"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    const referer = req.headers.referer.split('/');
    knex
      .select("*")
      .from("users")
      .where("username", referer[3])
      .then((results) => {
        res.json(results);
    });
  });

  return router;

}


