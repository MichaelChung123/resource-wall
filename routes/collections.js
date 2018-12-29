"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {  
    const username = req.headers.referer.split('/');
    knex('users')
      .select("*")
      .join('collections', 'user_id', 'users.id')
      .where('username', username[3])
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}