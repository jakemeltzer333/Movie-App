const db = require('../db/config');

const Movie = {
    findAll: ()=>{
        return db.query('SELECT * FROM movies')
    }
}

module.exports = Movie;