import React from 'react';
import { Outlet } from 'react-router-dom'
import MovieList from "../MovieList";
import style from "./style.css";

const Movies = () => {

    return (
        <>
            <div className="movies">
                <h1>Movies</h1>
                <div className="movies-container">
                    <MovieList/>
                    <Outlet/>
                </div>
            </div>
        </>
    );
};

export default Movies;
