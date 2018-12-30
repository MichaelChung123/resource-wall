"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {  
    knex('users')
      .select("*")
      .join('collections', 'user_id', 'users.id')
      .where('users.id', req.session.userid)
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}