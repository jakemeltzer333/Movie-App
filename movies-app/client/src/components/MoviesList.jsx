import React, { Component } from 'react';

import Movie from './Movie';
import MovieAddForm from './MovieAddForm';
import MovieEditForm from './MovieEditForm';

class MoviesList extends Component{
  MovieAddForm=()=>{
    if(this.props.auth){
      return(<MovieAddForm handleMovieSubmit={this.props.handleMovieSubmit} />)
    } else {
      return <h1>Log In to Add a Movie </h1>
    }
  }
  render(){
    return (
      <div className="movies-list">
        {this.MovieAddForm()}
        {this.props.movieData.map(movie => {
          if (this.props.currentMovieId === movie.id) {
            return <MovieEditForm key={movie.id} movie={movie} handleMovieEditSubmit={this.props.handleMovieEditSubmit} auth={this.props.auth} />
          } else return <Movie movie={movie} fav={this.props.fav} selectEditedMovie={this.props.selectEditedMovie} key={movie.id} auth={this.props.auth}/>
        })}
      </div>
    )
  }
}

export default MoviesList;
