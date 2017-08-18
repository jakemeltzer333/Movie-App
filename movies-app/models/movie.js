const db = require('../db/config');

const Movie = {
    findAll: ()=>{
        return db.query('SELECT * FROM movies')
    },
    findById: (id)=>{
        return db.oneOrNone(`SELECT * FROM movies
    WHERE id = $1 `,[id]);
    },
    create: (movie)=>{
        return db.one(
            `
            INSERT INTO movies
            (title,description, genre)
            VALUES
            ($1,$2,$3)
            RETURNING *
            `,[movie.title, movie.desc,movie.genre]);
    }
}

module.exports = Movie;