import React from 'react';
import {useParams} from "react-router-dom";
import {getMovieById} from "../../movie-database";
import style from "./style.css";

const Movie = () => {

    const {id} = useParams();
    const selectedMovie = getMovieById(id);

    return (
        <>
            <div className="container">
                <h1>{selectedMovie.title}</h1>
                <div className="movie">
                    <img src={selectedMovie.poster} alt={selectedMovie.title}/>
                    <h2>Plot</h2>
                    <p>{selectedMovie.storyline}</p>
                </div>
            </div>
        </>
    );
};

export default Movie;