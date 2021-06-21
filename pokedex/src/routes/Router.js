import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import PokedexPage from "../pages/PokedexPage";
import ErrorPage from "../pages/ErrorPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";

const Router = (() => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                   <HomePage/> 
                </Route>
                <Route exact path="/pokedex">
                    <PokedexPage/>
                </Route>
                <Route exact path="/details/:id">
                    <DetailPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
})

export default Router;

