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
import barbie from "./images/barbie.jpg"


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

                <h2>New Film about Barbie</h2>

                <img src={barbie} alt="Barbie"/>

                <p>After a whole assortment of Barbies (and the actors who’ll play them) were announced earlier
                    today,
                    a full-length trailer has landed for Barbie. Directed by Greta Gerwig (her follow-up to 2019’s
                    Little Women) and co-written by Gerwig and Noah Baumbach (partners and frequent collaborators,
                    most recently on Baumbach’s White Noise), the film will hit theaters this summer.</p>

                <p>Margot Robbie stars as the titular Mattel toy icon, with Ryan Gosling embodying her long-term
                    boyfriend, Ken. While Robbie and Gosling appear as the Barbie and Ken blueprints, an ensemble
                    cast will portray several different iterations of Barbie—like a mermaid (Dua Lipa), Nobel Prize
                    winner (Emma Mackey), lawyer (Sally Rooney) and doctor (Hari Nef)—as well as many Kens,
                    who don’t boast various job titles or fantastical characteristics. The huge cast also includes
                    Will Ferrell, Simu Liu, America Ferrera, Ariana Greenblatt, Ncuti Gatwa, Alexandra Shipp,
                    Michael Cera, Issa Rae, Kingsley Ben-Adir, Rhea Perlman and Kate McKinnon.</p>

                <p>Barbie will open theatrically on July 21 (make it an Oppenheimer double feature) via Warner
                    Bros.</p>


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
            element:
                <App/>,
            errorElement:
                <ErrorPage/>,
            children:
                [
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
    ])
;

createRoot(
    document.querySelector('#app'),
).render(
    <RouterProvider router={router}/>
);
