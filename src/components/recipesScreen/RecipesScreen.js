import React from 'react'
import { Footer } from '../ui/Footer'
import { Schedule } from '../ui/Schedule'
import { RecipeList } from './RecipeList'

import recipes from '../data/recipes';

export const RecipesScreen = () => {
    const recetas = recipes;
    return (
        <main className="mt-4">
            <h2 className="text-center mt-4">Recetas para t<span className="texto-primario">ú</span> cocina</h2>
            <RecipeList recipes={ recetas }/>
            <Schedule />
            <Footer />
        </main>
    )
}
