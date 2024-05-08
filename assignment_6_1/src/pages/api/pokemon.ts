import { NextApiRequest, NextApiResponse } from "next"

import { Pokemon } from "../../types/pokemon";

export default async function handleRequest(
    req: NextApiRequest,
    res: NextApiResponse<{pokemon: Pokemon[]}>
){
    const pokemonArray: Pokemon[] = [];
    const r = await fetch("https://pokeapi.co/api/v2/pokemon");
    const jsonData = await r.json();
    console.log(jsonData);

    for (let index = 0; index < jsonData.results.length; index++){
        pokemonArray.push(jsonData.results[index] as Pokemon);
    }
    console.log(pokemonArray);
    console.log("Hello world");
    res.status(200).json({pokemon: pokemonArray})

}