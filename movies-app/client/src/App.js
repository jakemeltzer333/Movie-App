import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import MoviesList from './components/MoviesList';

import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';


class App extends Component {
   constructor() {
      super()
        this.state = {
          auth: false,
          user: null,
          currentPage: 'home',
          currentMovieId: null,
          movieData: null,
          fbUserId: null
      }
        
}

componentDidMount() {
  console.log(localStorage.user_key)
  this.setState({
    fbUserId: localStorage.user_key
  })
  axios.get('/movies')
   .then(res => {
     console.log(res)
    this.setState({
     movieData: res.data.data,
    });
   }).catch(err => console.log(err));
}

 setPage = (page) => {
   this.setState({
    currentPage: page,
   })
 }

 decideWhichPage = () => {
  switch(this.state.currentPage) {
    case 'home':
      return <Home />;
    case 'login':
      if (!this.state.auth) {
        return <Login handleLoginSubmit={this.handleLoginSubmit} />;
      } else return <Home />;
    case 'register':
      if (!this.state.auth) {
        return <Register handleRegisterSubmit={this.handleRegisterSubmit} />;
      } else return <Home />;
    case 'movies':
        return (<MoviesList
          auth={this.state.auth}
          fav= {this.favoriteMovie}
          movieData={this.state.movieData}
          handleMovieSubmit={this.handleMovieSubmit}
          handleMovieEditSubmit={this.handleMovieEditSubmit}
          selectEditedMovie={this.selectEditedMovie}
          currentMovieId={this.state.currentMovieId}  />)
    case 'user':
        return(<Profile />)
     default:
     break;
   }
 }

 handleLoginSubmit = (e, username, password) => {
   e.preventDefault();
   axios.post('/auth/login', {
     username,
     password
   }).then(res=>{
     this.setState({
       auth: res.data.auth,
       user: res.data.user,
       currentPage: 'home'
     })
   }).catch(err=>console.log(err))
 }

 handleRegisterSubmit = (e, username, password, email) => {
   e.preventDefault();
   axios.post('/auth/register', {
     username,
     password,
     email
   }).then(res=>{
     this.setState({
       auth: res.data.auth,
       user: res.data.user,
       currentPage: 'home'
     })
   }).catch(err=>console.log(err))
 }

 logOut = () => {
    axios.get('/auth/logout')
      .then(res=>{
        console.log(res)
        this.setState({
          auth: false,
          currentPage: 'home'
        })
      }).catch(err=>console.log(err))
 }

 handleMovieSubmit = (e, title, description, genre) => {
  e.preventDefault();
   axios.post('/movies/', {
    title,
    description,
    genre
   }).then(res => {
    this.resetMovies();
   }).catch(err => console.log(err));
 }

 handleMovieEditSubmit = (e, title, description, genre) => {
  e.preventDefault();
  axios.put(`/movies/${this.state.currentMovieId}`, {
    title,
    description,
    genre,
  }).then(res => {
    this.resetMovies();
  }).catch(err => console.log(err));
 }

 selectEditedMovie = (id) => {
  this.setState({
    currentMovieId:id,
  })
 }

 favoriteMovie = (movie)=>{
   console.log('I like this movie');
   console.log(movie);
   axios.post(`/movies/fav/${movie.id}`)
 }

 resetMovies = () => {
  axios.get('/movies')
   .then(res => {
    this.setState({
      movieData: res.data.data,
      currentMovieId: null,
    })
   }).catch(err => console.log(err));
 }

  render() {
    return (
      <div className="App">
       <Header setPage={this.setPage} logOut={this.logOut}/>
        {this.decideWhichPage()}
       <Footer />
      </div>
    );
  }
}

export default App;









