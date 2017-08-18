const express = require('express');
const movies = express.Router();
const movieController = require('../controllers/movies-controller');

movies.get('/',movieController.getAll);
movies.get('/:id',movieController.getById)

module.exports= movies;