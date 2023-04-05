import {createBrowserRouter, Link, RouterProvider, Outlet, useParams} from 'react-router-dom'
import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
import ErrorPage from "./components/ErrorPage";
import Menu from "./components/Menu";
import Movies from "./components/Movies";
import Movie from "./components/Movie";
import MovieList from "./components/MovieList";
import Articles from "./components/Articles";
import Home from "./components/Home";
import Reviews from "./components/Reviews";

const App = () => {
    return (
        <div className="container">
            <header>
                <div className="logo"/>
                <h1>Movie magazine</h1>
            </header>
            <main>
                <Menu/>
                <Outlet/>
            </main>
            <footer>
                <p>Czechitas, React</p>
            </footer>
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/articles',
                element: <Articles/>
            },
            {
                path: '/reviews',
                element: <Reviews/>
            },
            {
                path: '/movies',
                element: <Movies/>,
                children: [
                    {
                        path: '/movies/:id',
                        element: <Movie/>
                    }
                ]
            }
        ],
    }
]);

createRoot(
    document.querySelector('#app'),
).render(
    <RouterProvider router={router}/>
);
