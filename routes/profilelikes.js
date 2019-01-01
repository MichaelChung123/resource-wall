"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    const referer = req.headers.referer.split('/');
    knex
      .select("*")
      .from("users")
      .where('username', referer[3])
      .then((user) => {
        const profileUser = user[0].id;
        knex
        .select("*")
        .from("likes")
        .where('likes.user_id', profileUser)
        .join("resources", 'likes.resource_id', 'resources.id')
        .then((results) => {
            res.json(results);
        });
      });
  });

  return router;

}