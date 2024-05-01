import { Container, Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useState, ChangeEvent } from 'react';

export default function LanguageSelect(props: {languages: string[]}){
    
    return(
        
    <FormControl fullWidth>
        <InputLabel id="language-select-label">Programming Languages</InputLabel>
            <Select
                labelId="language-select-label"
                id="language-select"
                label="Language"
                // value={ language } 
                // onChange={ handleLanguageChange }
        >
                {
                    props.languages.map((language: string)=>(
                    <MenuItem key={language} value={language}>{language}</MenuItem>
                ))
                }
        </Select>
    </FormControl>
    
    );
}