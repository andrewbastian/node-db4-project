const express = require('express');

const RecipesRouter = require('./recipes/recipesRouter.js');

const server = express();

server.use(express.json());
server.use('/api/cookbook', RecipesRouter);

module.exports = server;