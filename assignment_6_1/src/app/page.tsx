'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { Button, TextField, Box, FormControl, Typography } from '@mui/material';

export default function Home() {

  const [count, setCount] = useState
  (0);

  function handleCountChange(event: ChangeEvent<HTMLInputElement>){
    setCount(Number(event.target.value));
}

  const [message, setmessage] = useState<string[]>([]);
  function handleClick(){
    fetch(`/api/facts?count=${count}`)
    .then(response => response.json())
    .then(json => setmessage(json.rFacts))
    .catch(error => console.error(error))
  }

  return (
    <main>
      <TextField
        id="counter" 
        label="enter count" 
        value={count} 
        onChange={handleCountChange} type="number"/>
      <Button variant="contained" onClick={handleClick}>Get Random Fact</Button>
      <div>
        {
          message.map((fact, i) => (
            <Typography variant="h4" key={i}>
              {fact}
            </Typography>
          ))
        }
      </div>
      <TextField
        id="counter" 
        label="enter count" 
        value={count} 
        onChange={handleCountChange} type="number"/>

      
    </main>
  );
}
