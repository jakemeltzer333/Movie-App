import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

import Login from './components/Login';
import Register from './components/Register';

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

      this.setPage = this.setPage.bind(this);
      this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
      this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
   }

 setPage(page) {
  console.log('click');
   this.setState({
    currentPage: page,
   })
 }

 decideWhichPage() {
  switch(this.state.currentPage) {
    case 'home':
     return <Home />;
     break;
     default:
     break;
   }
 }

 handleLoginSubmit(e, username, password){
   e.preventDefault();
   axios.
 }


  render() {
    return (
      <div className="App">
       <Header setPage={this.setPage} />
        {this.decideWhichPage()}
       <Footer />
      </div>
    );
  }
}

export default App;
