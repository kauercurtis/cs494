'use client';

import { TextField, Box, FormControl, InputLabel, Select, MenuItem, Button, Rating } from '@mui/material'
import { useState, ChangeEvent, useEffect } from 'react'

export default function MyForm(props: {addEntry: Function}){

    const [task, setTask] = useState<string>("");
    const [urgency, setUrgency] = useState<number>(0);

    function handleTaskChange(event: ChangeEvent<HTMLInputElement>){
        setTask(event.target.value);
    }

    function handleUrgencyChange(event: React.SyntheticEvent, value: number | null){
        setUrgency(value ?? 0);
    }

    useEffect(() => {
        console.log(task);
    }, [task, urgency]);

    function handleClick(event: React.MouseEvent<HTMLElement>){
        props.addEntry({
            task: task,
            urgency: urgency
        });
        setTask("");
        setUrgency(0);
    }

    return (
        <Box alignItems={"center"} display={"flex"} justifyContent={"space-around"}>
            <TextField sx={{width: 500}} 
            id="name-text" 
            label="enter task" 
            value={task} 
            onChange={handleTaskChange}/>
            
            <Box alignItems={"center"} display={"flex"} flexDirection={"column"}>
                <h2>Urgency</h2>
                <Rating name="urgency" defaultValue={0} value= {urgency} onChange= {handleUrgencyChange}/>
            </Box>

            <Button variant= "contained" onClick={handleClick}>
                Submit
            </Button>

        </Box>

    )
}
