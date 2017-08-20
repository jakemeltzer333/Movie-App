const db = require('../db/config');

const Movie = {
    findAll: ()=>{
        return db.query('SELECT * FROM movies')
    },
    findById: (id)=>{
        return db.oneOrNone(`SELECT * FROM movies
    WHERE id = $1 `,[id]);
    },
    create: (movie,id)=>{
        return db.one(
            `
            INSERT INTO movies
            (title,description, genre, user_id)
            VALUES
            ($1,$2,$3,$4)
            RETURNING *
            `,[movie.title, movie.desc,movie.genre, id]);
    },
    update: (movie)=>{
        return db.one(
            `
            UPDATE movies
            SET
            title= $1, description=$2, genre=$3
            WHERE id= $4
            RETURNING *
            `,[movie.title, movie.desc,movie.genre,movie.id]);
    },
    destroy: (id)=>{
        return db.one(`
        DELETE FROM movies
        WHERE id = $1
        RETURNING *
        `,[id]);
    }
}

module.exports = Movie;