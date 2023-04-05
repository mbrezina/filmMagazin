import React from 'react';
import {Link} from "react-router-dom";
import style from "./style.css";

const Menu = () => {

    return (
        <>
            <nav className="menu">

                <Link to="/reviews">Reviews</Link>
                <span> | </span>
                <Link to="/articles">Articles</Link>
                <span> | </span>
                <Link to="/movies">Films</Link>

            </nav>
        </>
    );
};

export default Menu;

