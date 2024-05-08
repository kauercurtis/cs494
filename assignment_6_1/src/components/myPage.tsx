'use client';

import MyTable from '../components/myTable';
import MyFilters from '../components/myFilters';
import { Pokemon } from "@/types/pokemon";
import { Container } from "@mui/material";
import { useState } from 'react';
import { useEffect } from 'react';


export default function MyPage(props : {jsonData: Pokemon[]}){

    const headers: string[] = ["Name", "Abilities", "Weight", "Id", "Height", "Weakness", "Image", "Type"];
  
    const genres: string[] = new Array<string>;

    const [filterGenre, setFilterGenre] = useState('');
    const [filterData, setFilteredData] = useState(props.jsonData);
    const [scoreByScore, setSortByScore] = useState(true);

    genres.push('');

    for (let i = 0; i < props.jsonData.length; i++){
        for (let j = 0; j < props.jsonData[i].genre.length; j++){
            if (!genres.includes(props.jsonData[i].genre[j])){
                genres.push(props.jsonData[i].genre[j]);
            }
        }
    }

    useEffect(()=>{
        // TODO: setFilteredData based on filterGenre
        if(filterGenre.length < 1)
        {
            setFilteredData(props.jsonData);
        }
        else
        {
            setFilteredData(props.jsonData.filter((movie) => movie.genre.includes(filterGenre)));    
        }

        const tmpArray = filterData;
        if(scoreByScore){
            setFilteredData(tmpArray.toSorted((objB, objA) => objA.rotten_tomatoes_score - objB.rotten_tomatoes_score));    
        }
        else{
            setFilteredData(tmpArray.toSorted((objA, objB) => objA.rotten_tomatoes_score - objB.rotten_tomatoes_score));
        }

    }, [filterGenre, scoreByScore]);

    return (
        <Container>
            <MyFilters genres={genres} setFilterGenre={setFilterGenre} setSortByScore={setSortByScore}/>
            <MyTable headers={headers} data={filterData} />
        </Container>

    )
}