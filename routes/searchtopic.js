"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    const referer = req.headers.referer.split('=');
    knex
      .select("*")
      .from('resources')
      .join('users', 'resources.user_id', 'users.id')
      .where('topic', 'like', `%${referer[1]}%`)
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}