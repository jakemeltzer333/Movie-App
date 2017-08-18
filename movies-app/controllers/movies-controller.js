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
        Movie.create({
            title:req.body.title,
            desc: req.body.desc,
            genre: req.body.genre
        }).then(data=>{
            res.json(data);
        }).catch(err=>{
            res.status(500).json(err);
        })
    },
    editMovie : (req,res)=>{
        Movie.update({
            id: req.params.id,
            title:req.body.title,
            desc: req.body.desc,
            genre: req.body.genre
        }).then(data=>{
            res.json(data);
        }).catch(err=>{
            res.status(500).json(err);
        })
    },
    deleteMovie: (req,res)=>{
        Movie.destroy(req.params.id).then(data=>{
            res.json(data);
        }).catch(err=>{
            res.status(500).json(err);
        });
    }

}
module.exports = movieController;