import React, { use, useState } from 'react';
import RecipieCard from './RecipieCard.js';
import { useEffect } from "react";
import { apiFetch } from '../../services/api';
const recipies = {
    images:[
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
            "https://images.unsplash.com/photo-1572120360610-d971b9bfa8d5",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          
    ]
}

export default function Main() {
 
    const [isLoading, setIsLoading] = useState(false);
    const [recipies, setRecipies] = useState([]);

    const setRecipiesState = (recipies) => {
        setRecipies(recipies);
    }

    const setIsLoadingState = (state) =>{
        setIsLoading(state);
    }

    useEffect(() => {
        async function fetchRecipies(){
            // Here you would normally fetch data from an API

            setIsLoadingState(true);
            const fetchedRecipies = await apiFetch('/Recipe/all', {
                method : "GET"
            })
            .then(data => {
                setRecipiesState(data);
            })
            .catch(error => {
                console.error('Error fetching recipies:', error.message);   
            })
            .finally(()=>{
                setIsLoadingState(false);
            });
        };

        fetchRecipies();
    }, []);

    return (
    <div>

        {recipies.map((recipie, index) => (
            <RecipieCard key={index} image={recipie.images} />
        ))}
        
    </div>
  );
}
