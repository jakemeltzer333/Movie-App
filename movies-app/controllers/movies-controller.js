const Movie = require('../models/movie');

const movieController = {
    getAll:(req,res)=>{
        Movie.findAll().then(data=>{
            res.json(data);
        });
    },
    getById: (req,res)=>{
        Movie.findById(req.params.id).then(data=>{
            res.json(data);
        });
    },
    addMovie: (req,res)=>{
        console.log(req.body.title)
        console.log(req.body.description)
        console.log(req.body.genre)
        Movie.create({
            title:req.body.title,
            desc: req.body.description,
            genre: req.body.genre
        }).then(data=>{
            res.json(data);
        }).catch(err=>{
            res.status(500).json(err);
        })
    }

}
module.exports = movieController;