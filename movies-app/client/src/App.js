import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
   constructor() {
      super()
        this.state = {
          auth: false,
          user: null,
          currentPage: 'home',
          currentMovieId: null,
          movieData: null,
      }
   }


  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
