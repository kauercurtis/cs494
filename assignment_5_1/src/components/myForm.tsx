'use client';

import { TextField, Box, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'
import { useState, ChangeEvent, useEffect } from 'react'

export default function MyForm(props: {addEntry: Function}){

    const languages: string[] = ["Python", "C", "JavaScrip", "Ruby", "ProLog"];

    const [name, setName] = useState<string>("");
    const [language, setLanguage] = useState<string[]>(languages);
    const [comment, setComment] = useState<string>("");

    function handleNameChange(event: ChangeEvent<HTMLInputElement>){
        setName(event.target.value);
    }
    
    function handleLanguageChange(event: SelectChangeEvent){
        setLanguage(event.target.value);
    }

    function handleCommentChange(event: ChangeEvent<HTMLInputElement>){
        setComment(event.target.value);
    }

    useEffect(() => {
        console.log(name);
    }, [name, language, comment]);

    function handleClick(event: React.MouseEvent<HTMLElement>){
        props.addEntry({
            name: name,
            language: language,
            comment: comment
        });
    }

    return (
        <Box>
            <TextField sx={{width: 1000}} 
            id="name-text" 
            label="enter name" 
            value={name} 
            onChange={handleNameChange}/>
            <FormControl fullWidth>
                <InputLabel id="language-label">
                    Select a Language
                </InputLabel>
                <Select id="language-label" labelId="language-label" value= {language} onChange= {handleLanguageChange}>
                    {
                        languages.map((language: string, index: number) => (
                            <MenuItem value= {language} key={index}>
                                {language}
                            </MenuItem>
                        ))
                    }
                </Select>
            <Button variant= "contained" onClick={handleClick}>
                Submit
            </Button>
            </FormControl>    
        </Box>

    )
}

