'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { Button, TextField, Box, FormControl, Typography } from '@mui/material';
import { Pokemon } from "@/types/pokemon";

import { dataset_dev } from 'svelte/internal';

export default function Home() {

  // useEffect(() => {
  //  console.log(pokemon)
 // })

  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  useEffect(() => {
    fetch("/api/pokemon")
    .then(response => response.json())
    .then(json => setPokemon(json.pokemon))
    .catch(error => console.error(error))
  });

  return (
    <main>
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            pokemon.map((data: Pokemon, index: number) =>(
              <tr key= {index}>
                <td>
                  { data.name }    
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    
    </main>
  );
}