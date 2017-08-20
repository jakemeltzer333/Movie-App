import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';

class Profile extends Component {
    constructor(){
        super();
        this.state={
            favorites: null
        }
    }
    
    componentDidMount() {
        axios.get('/movies/fav/all').then(res=>{
            this.setState({
                favorites:res.data.data
            },()=>{
                console.log(this.state.favorites);
            });
        }).catch(err=>{
            console.log(err);
        })
    }
    render(){
        return (
        <div>
            <h2>Favorites List</h2>
            {this.state.favorites ? this.state.favorites.map(movie =><Movie key={movie.id} movie={movie}/>) : <h2>...Loading</h2> } 
        </div>)
    }
}

export default Profile;