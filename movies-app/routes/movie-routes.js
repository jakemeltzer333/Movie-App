const express = require('express');
const movies = express.Router();
const movieController = require('../controllers/movies-controller');
const authHelpers = require('../services/auth/auth-helpers');

movies.get('/',movieController.getAll);
movies.get('/:id',movieController.getById);
movies.post('/',movieController.addMovie);
movies.post('/fav/:id',movieController.favMovie);
movies.put('/:id',movieController.editMovie);
movies.delete('/:id', movieController.deleteMovie);

module.exports= movies;