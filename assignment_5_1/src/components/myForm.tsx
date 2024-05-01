'use client';

import { TextField, Box, FormControl, InputLabel, Select, MenuItem, Button, Rating } from '@mui/material'
import { useState, ChangeEvent, useEffect } from 'react'

export default function MyForm(props: {addEntry: Function}){

    const languages: string[] = ["Python", "C", "JavaScript", "Ruby", "ProLog"];

    const [name, setName] = useState<string>("");
    const [language, setLanguage] = useState<string[]>(languages);
    const [comment, setComment] = useState<string>("");
    const [rating, setRating] = useState<number>(0);

    function handleNameChange(event: ChangeEvent<HTMLInputElement>){
        setName(event.target.value);
    }
    
    function handleLanguageChange(event: SelectChangeEvent){
        setLanguage(event.target.value);
    }

    function handleCommentChange(event: ChangeEvent<HTMLInputElement>){
        setComment(event.target.value);
    }

    function handleRatingChange(event: React.SyntheticEvent, value: number | null){
        setRating(value ?? 0);
    }

    useEffect(() => {
        console.log(name);
    }, [name, language, comment, rating]);

    function handleClick(event: React.MouseEvent<HTMLElement>){
        props.addEntry({
            name: name,
            language: language,
            comment: comment, 
            rating: rating
        });
        setName("");
        setLanguage("Python");
        setComment("");
        setRating(0);
    }

    return (
        <Box alignItems={"center"} display={"flex"}>
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
            </FormControl>
            <TextField
            multiline rows={5} id="comment-test" label="comments?" value={comment} onChange={handleCommentChange} />
            <Rating name="rate" defaultValue={0} value= {rating} onChange= {handleRatingChange}/>
            <Button variant= "contained" onClick={handleClick}>
                Submit
            </Button>
        </Box>

    )
}

/*
        <Box alignItems={"center"} display={"flex"}>
            <TextField
            id="name-text"
            label="Enter your Name"
            value={name}
            onChange={handleNameChange}
            />
        <FormControl fullWidth>
            <InputLabel id="language-label">
                Select a Language
            </InputLabel>
            <Select id="language-select" labelId='language-label' onChange={handleLanguageChange} value={language}>
                {
                    languages.map((language: string, i: number)=>(
                        <MenuItem value={language} key={i}>
                            {language}
                        </MenuItem>
                    ))
                }
            </Select>
            </FormControl>

                <TextField
                multiline
                rows={5}
                id="comment-text"
                label="Comments?"
                value={comment}
                onChange={handleCommentChange}
                />
            <Button  variant="contained" onClick={handleClick}>
                Submit
            </Button>
        </Box>
*/