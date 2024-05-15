'use client';

import { useState, useEffect } from 'react';

import MyForm from '../components/myForm';
import MyCard from '../components/myCard';

import { Pokemon } from '../types/Pokemon';
import { PokemonDetail } from '../types/PokemonDetail';

export default function Home() {


  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [selectedPokemonUrl, setSelectedPokemonUrl] = useState<string>("");
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetail | null >(null);

  useEffect(() => {
    console.log(pokemonDetail);
    
  }, [pokemonDetail]);

  useEffect(() => {
    console.log(selectedPokemonUrl);
    if (selectedPokemonUrl.length > 0){
      fetch(`/api/pokemonDetail?url=${selectedPokemonUrl}`)
      .then(response => response.json())
      .then(json => setPokemonDetail(json.pokemon))
      .catch(error => console.error(error));
    }
  }, [selectedPokemonUrl]);


  useEffect(()=>{
    fetch('/api/pokemon')
    .then(response => response.json())
    .then(json => setPokemon(json.pokemon))
    .catch(error => console.error(error));
  }, []);

  return (
    <main>
      {
        pokemon.length > 0 ? 
        <MyForm pokemon={pokemon} setSelectedPokemonUrl={setSelectedPokemonUrl}></MyForm> 
        :
          <div/>
      }

     {
        pokemonDetail ? 
        <MyCard pokemonDetail={pokemonDetail}/>
        :
          <div/>
      }
  </main>
  );
}
