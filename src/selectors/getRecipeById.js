import recipes from "../components/data/recipes";


export default function getRecipeById( recetaId ) {

    const recetas = recipes;

    return recetas.find( receta => receta.id === recetaId );

}
