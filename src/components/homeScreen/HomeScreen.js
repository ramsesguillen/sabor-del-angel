
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { CarouselUI } from '../ui/CarouselUI';
import { About } from '../aboutScreen/About';
import { Footer } from '../ui/Footer';
import { Schedule } from '../ui/Schedule';
import { ProductPresentation } from '../productScreen/ProductPresentation';
import { Empresa } from '../socialResposabilitiesScreen/Empresa';
import { RecipeList } from '../recipesScreen/RecipeList';
import recipes from '../data/recipes';
import { Mapa } from '../contactUsScreen/Mapa';
import { NavLink } from 'react-router-dom';


export const HomeScreen = () => {

    const recetas = recipes.filter( (recipe, index ) => (index % 2 !== 1) && recipe );

    const url = 'sabor-del-angel';
    return (
        <div>
            <CarouselUI />
            <main className="mt-4">
                <About />
                <ProductPresentation precio={true}/>
                <Empresa/>
                <h2 className="text-center mt-4">Recetas para t<span className="texto-primario">ú</span> cocina</h2>
                <RecipeList recipes={ recetas }/>
                <h2 className="text-center mt-4 mb-3">Encuentranos aqu<span className="texto-primario">í</span></h2>
                <Mapa />
                <div className="d-flex justify-content-center mt-2">
                    <NavLink
                        activeClassName="active"
                        className="btn btn-success"
                        exact
                        to={`/${url}/contacto`}
                    >
                        Contactanos
                    </NavLink>
                </div>
                <Schedule />
            </main>
            <Footer />
        </div>
    )
}
