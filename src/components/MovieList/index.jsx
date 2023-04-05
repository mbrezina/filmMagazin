import React from 'react';
import {getAllMovies} from "../../movie-database";
import {Link} from "react-router-dom";
import style from "./style.css";

const MovieList = () => {

    const allMovies = getAllMovies();

    return (
        <>
            <div className="movie-list">
                {
                    allMovies.map(oneMovie => (
                        <Link to={`/movies/${oneMovie.id}`} >{oneMovie.title} </Link>
                    ))
                }
            </div>
        </>
    );
};

export default MovieList;