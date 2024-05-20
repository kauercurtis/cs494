import { useState, useEffect } from 'react';

import {
      FormControl,
      InputLabel,
      Select,
      MenuItem, 
      SelectChangeEvent, 
      Container
 } from "@mui/material";

 import { Pokemon } from '../types/Pokemon';
 import { PokemonDetail } from '../types/PokemonDetail';
 
import { Genre } from '../app/genre'

 export default function MyForm(props: {genres: Genre[], setSelectedGenreUrl: Function}){
 
   const [selectedGenre, setSelectedGenre] = useState<string>(props.genres[0].name);
 
   useEffect(() => {
     if (props.genres.length > 0){
       setSelectedGenre(props.genres[0].name);
     }
     
   },[props.genres]);
   
   console.log(props.genres);

   return(
     <FormControl fullWidth>
         <InputLabel id="genre-select-label">Genre</InputLabel>
         <Select
           labelId="genre-select-label"
           id="genre-select"
           value={selectedGenre}
           label="Genre"
           onChange={(event: SelectChangeEvent, child: any)=>{
             setSelectedGenre(event.target.value);
             props.setSelectedGenreUrl(props.genres[child.props["data-id"]].name);
           }}
         > 
         {props.genres.map((data: Genre, i: number)=>(
           <MenuItem key={i} data-id={i} value={data.name}>{data.name}</MenuItem>
         ))}
           
         </Select>
       </FormControl>
   );
 }