import { useState, useEffect } from 'react';

import { Button, 
      TextField, 
      Typography,
      FormControl,
      InputLabel,
      Select,
      MenuItem, 
      SelectChangeEvent, 
      Container
 } from "@mui/material";

import { Pokemon } from '../types/Pokemon';
import { PokemonDetail } from '../types/PokemonDetail';

export default function MyForm(props: {pokemon: Pokemon[], setSelectedPokemonUrl: Function}){

  const [selectedPokemon, setSelectedPokemon] = useState<string>(props.pokemon[0].name);

  useEffect(() => {
    if (props.pokemon.length > 0){
      setSelectedPokemon(props.pokemon[0].name);
    }
    
  },[props.pokemon]);

  return(
    <FormControl fullWidth>
        <InputLabel id="pokemon-select-label">Pokemon</InputLabel>
        <Select
          labelId="pokemon-select-label"
          id="pokemon-select"
          value={selectedPokemon}
          label="Pokemon"
          onChange={(event: SelectChangeEvent, child: any)=>{
            setSelectedPokemon(event.target.value);
            props.setSelectedPokemonUrl(props.pokemon[child.props["data-id"]].url);
          }}
        > 
        {props.pokemon.map((data: Pokemon, i: number)=>(
          <MenuItem key={i} data-id={i} value={data.name}>{data.name}</MenuItem>
        ))}
          
        </Select>
      </FormControl>
  );
}