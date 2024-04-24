'use client';

import { Container, Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useState } from 'react';

export default function MyFilters(props: {genres: string[], setFilterGenre: Function, setSortByScore: Function}){

    // const sortByScore = ["High to Low", "Low to High"];

    const [genre, setGenre] = useState<string>(props.genres[0]);
    const [sortByScore, setSortByScore] = useState("High to Low");

    function handleChange(event: SelectChangeEvent){
        setGenre(event.target.value as string);
        props.setFilterGenre(event.target.value as string);
    }

    function handleSortChange(event: SelectChangeEvent){
        setSortByScore(event.target.value);
        if(event.target.value == "High to Low"){
            props.setSortByScore(true);
        }
        else{
            props.setSortByScore(false);
        }
    }



    return(
        <Container>
            <Box sx={{ minWidth: 120 }}>
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
                
                <FormControl fullWidth>
                    <InputLabel id="sort-by-select-label">Sort By Score</InputLabel>
                    <Select
                    labelId="sort-by-select-label"
                    id="score-select"
                    label="Sort By Score"
                    value={sortByScore}
                    onChange={handleSortChange}
        >
                        <MenuItem value="Low to High">Low to High</MenuItem>
                        <MenuItem value="High to Low">High to Low</MenuItem>   
                    </Select>
                </FormControl>
            </Box>
        </Container>
    )
}