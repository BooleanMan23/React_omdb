import React from 'react';
import Navbar from './navbar/Navbar';
import NavItem from './navbar/NavItem';
import FormInput from './navbar/FormInput';
import MovieList from './movieList/MovieList';
import Modal from './Modal';
import Table from './Table';
import axios from 'axios';


class App extends React.Component{
    state = { movies :[], modalMovie: '' };
    onSearchSubmit  =  async (keyword) =>{
           const response = await axios.get('http://www.omdbapi.com/', {
            params:{
                s : keyword,
                apikey : '89ceba30'
            } 
        }).then(response =>{
            if(response.data.Response !== 'True'){
               return 'Movie Not Found'
            }else{
                return response.data.Search;  
            }
        }).catch(err => {
           return err
        })
        this.setState({movies: response});
    }
    onMovieClick =  async (movieID) =>{
        const response = await axios.get('http://www.omdbapi.com/', {
            params:{
                i : movieID,
                apikey : '89ceba30'
            } 
        }).then(response =>{
            return response.data;
        }).catch(err =>{
           return err;
        })
        this.setState({modalMovie: response});
    }
    render(){
        return (
            <div>
                 <Navbar title = "OMDB Practice">
                     <NavItem link = "popular" linkName = "Popular"/>
                     <NavItem link = "latest" linkName = "Latest"/>
                     <NavItem link = "highest_rated" linkName = "Highest Rated"/>
                     <FormInput placeHolder = "Search Movie" buttonText = "Search" onSubmit={this.onSearchSubmit}></FormInput>
                 </Navbar>
                 <div className="container">
                    <MovieList movies ={this.state.movies} onMovieClick = {this.onMovieClick}  />
                    <Modal title = "Movie Detail">
                        <Table  movie = {this.state.modalMovie}/>
                    </Modal>
                 </div>  
            </div>
        );
    }
}

export default App;