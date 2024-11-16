'use client'
import { useState, useEffect } from "react";


function Page() {
    const [pokemons, setPokemon] = useState([])

    useEffect(() => {
        // fetch('https://dummyjson.com/products')
        //     .then(res => res.json())
        //     .then(data => setProducts(data.products));

        const fetchData = async () => {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon')
            const data = await res.json()

            setPokemon(data.results)
        }
        fetchData()

    }, [])


    return (
        <>      
             <h2 className="text-xl font-bold text-center">Ejemplo 4: CSR React</h2>
            <ul>
                {
                   pokemons.map(pokemon => (
                        <li className="py-20 text-center">
                            
                            <h1>{pokemon.name}</h1>
                            <b>{pokemon.url}:</b> {pokemon.created}

                            
                        </li>
                    ))

                }
            </ul>
        </>
    )
}

export default Page  
