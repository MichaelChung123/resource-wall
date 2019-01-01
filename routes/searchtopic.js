"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    const referer = req.headers.referer.split('=');
    const topics = referer[1].split('+').join(' ');
    knex
      .select("*")
      .from('resources')
      .join('users', 'resources.user_id', 'users.id')
      .where('topic', 'like', `%${topics}%`)
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}