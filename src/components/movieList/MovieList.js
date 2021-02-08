import React from 'react';

class MovieList extends React.Component{


    onClickButton = (event) =>{
       let key = event.target.getAttribute('data-key');
       this.props.onMovieClick(key);
    }
     renderMovie = (movies) =>{
         if(movies === 'Movie Not Found'){
             return <h1>Movie Not Found</h1>
         }
         const moviesElement =  movies.map((movie) =>{
            return <img data-key = {movie.imdbID} onClick = {this.onClickButton} key = {movie.imdbID}  data-toggle="modal" data-target="#movieModal" className="col-lg-3 col-md-4 col-sm-12 mt-3" src={movie.Poster} />
        });
        return moviesElement;

     }

    render(){
        return (
            <div className="row">
                 {this.renderMovie(this.props.movies)}
                
            </div>
        );
    }
}

export default MovieList;