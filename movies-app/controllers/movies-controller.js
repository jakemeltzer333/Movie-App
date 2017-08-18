const Movie = require('../models/movie');

const movieController = {
    getAll:(req,res)=>{
        Movie.findAll().then(data=>{
            res.json(data);
        });
    }

}
module.exports = movieController;