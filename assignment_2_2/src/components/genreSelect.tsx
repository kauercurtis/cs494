'use client';

import { Container, Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useState } from 'react';

export default function GenreSelect(props: {genres: string[], setFilterGenre: Function}){
    return(
        
    <FormControl fullWidth>
        <InputLabel id="genre-select-label">Genre</InputLabel>
            <Select
                labelId="genre-select-label"
                id="genre-select"
                label="Genre"
                value={genre}
                onChange={handleChange}
        >
                {
                    props.genres.map((genre: string, i: number)=>(
                    <MenuItem key={i} value={genre}>{genre}</MenuItem>
                ))
                }
        </Select>
    </FormControl>
    
    );
}