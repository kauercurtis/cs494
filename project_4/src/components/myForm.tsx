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

export default function MyForm(props: {genres: string[], setSelectedGenreUrl: Function}){

  const [selectedGenre, setSelectedGenre] = useState<string>(props.genres[0]);

  useEffect(() => {
    if (props.genres.length > 0){
      setSelectedGenre(props.genres[0]);
    }
    
  },[props.genres]);

  return(
    <FormControl fullWidth>
        <InputLabel id="genre-select-label">Genre</InputLabel>
        <Select
          labelId="genre-select-label"
          id="genre-select"
          value={selectedGenre}
          label="genre"
          onChange={(event: SelectChangeEvent, child: any)=>{
            setSelectedGenre(event.target.value);
            props.setSelectedGenreUrl(props.genres[child.props["data-id"]]);
          }}
        > 
        {props.genres.map((data: string, i: number)=>(
          <MenuItem key={i} data-id={i} value={data}>{data}</MenuItem>
        ))}
          
        </Select>
      </FormControl>
  );
}