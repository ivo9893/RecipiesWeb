import React, { use, useState } from 'react';
import RecipeCard from '../../components/RecipeCard/RecipeCard.js';
import { useEffect } from "react";
import { apiFetch } from '../../services/api.js';


export default function Main() {
 
    const [isLoading, setIsLoading] = useState(false);
    const [recipes, setRecipes] = useState( { images : ["https://images.unsplash.com/photo-1560518883-ce09059eeffa",
            "https://images.unsplash.com/photo-1572120360610-d971b9bfa8d5",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb"] } );

    const setRecipesState = (recipes) => {
        setRecipes(recipes);
    }

    const setIsLoadingState = (state) =>{
        setIsLoading(state);
    }

    useEffect(() => {
        async function fetchRecipes(){
            // Here you would normally fetch data from an API

            setIsLoadingState(true);
            const fetchedRecipes = await apiFetch('/Recipe/all', {
                method : "GET"
            })
            .then(data => {
                //setRecipesState(data);
            })
            .catch(error => {
                console.error('Error fetching recipes:', error.message);   
            })
            .finally(()=>{
                setIsLoadingState(false);
            });
        };

        fetchRecipes();
    }, []);

    return (
    <div>
        <RecipeCard images={recipes.images} />    
    </div>
  );
}
