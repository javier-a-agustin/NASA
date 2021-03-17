import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Exo } from './components/Exo';
import Home from './components/Home';
import { Mars } from './components/Mars';

export const AppRouter = () => {
    return (
        <div>
                

        <Router>
        


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/mars">Mars</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/exo">Exo</Link>
                </li>
            </ul>
        </div>
        </nav>
            <div>
                
                <Switch>
                <Route path="/exo">
                    <Exo />
                </Route>
                <Route path="/mars">
                    <Mars />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
                </Switch>
            </div>
            </Router>
        </div>

    )
}
