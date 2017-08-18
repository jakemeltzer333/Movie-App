const db = require('../db/config');

const Movie = {
    findAll: ()=>{
        return db.query('SELECT * FROM movies')
    },
    findById: (id)=>{
        return db.one(`SELECT * FROM movies
    WHERE id = $1 `,[id]);
    }
}

module.exports = Movie;