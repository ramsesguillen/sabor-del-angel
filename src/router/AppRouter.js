import React from 'react'
import {
        BrowserRouter as Router,
    Redirect,
        Route,
        Switch,
    } from "react-router-dom";

import { NavBar } from '../components/ui/NavBar';
import { AboutScreen } from '../components/aboutScreen/AboutScreen';
import { ContactUsScreen } from '../components/contactUsScreen/ContactUsScreen';
import { HomeScreen } from '../components/homeScreen/HomeScreen';
import { ProductScreen } from '../components/productScreen/ProductScreen';
import { Recipe } from '../components/recipesScreen/Recipe';
import { RecipesScreen } from '../components/recipesScreen/RecipesScreen';
import { SocialResponsabilitiesScreen } from '../components/socialResposabilitiesScreen/SocialResponsabilitiesScreen';

export const AppRouter = () => {
    const url = 'sabor-del-angel';
    return (
        <Router>
            <div>
                <NavBar />

                <Switch >
                    <Route exact path={`/${url}`} component={ HomeScreen }/>
                    <Route exact path={`/${url}/sobre-nosotros`} component={ AboutScreen }/>
                    <Route exact path={`/${url}/producto`} component={ ProductScreen }/>
                    <Route exact path={`/${url}/recetas`} component={ RecipesScreen }/>
                    <Route exact path={`/${url}/responsabilidad-social`} component={ SocialResponsabilitiesScreen }/>
                    <Route exact path={`/${url}/contacto`} component={ ContactUsScreen }/>
                    <Route exact path={`/${url}/receta/:recetaId`} component={ Recipe }/>

                    <Redirect to={`/${url}`} />
                </Switch>

            </div>
        </Router>
    );
}
