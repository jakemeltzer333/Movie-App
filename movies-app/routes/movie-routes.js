const express = require('express');
const movies = express.Router();
const movieController = require('../controllers/movies-controller');

movies.get('/',movieController.getAll);
movies.get('/:id',movieController.getById);
movies.post('/', movieController.addMovie);
movies.put('/:id',movieController.editMovie);

module.exports= movies;