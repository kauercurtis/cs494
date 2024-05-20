'use client';

import { useState, useEffect } from 'react';

import MyForm from '../components/myForm';
import MyCard from '../components/myCard';

import { Tag } from '../app/tags';
// import { PokemonDetail } from '../types/PokemonDetail';

export default function Home() {


  const [genres, setGenres] = useState<string[]>([]);
  const [selectedGenreUrl, setSelectedGenreUrl] = useState<string>("");
  const [albumDetails, setAlbumDetails] = useState<Tag[] | null >(null);

  useEffect(() => {
    console.log(albumDetails);
    
  }, [albumDetails]);

  useEffect(() => {
    console.log(selectedGenreUrl);
    if (selectedGenreUrl.length > 0){
      fetch(`/api/getAlbumsFromTag?url=${selectedGenreUrl}`)
      .then(response => response.json())
      .then(json => setAlbumDetails(json.albums))
      .catch(error => console.error(error));
    }
    console.log(albumDetails);
  }, [selectedGenreUrl]);

  useEffect(()=>{
    fetch('/api/getTags')
    .then(response => response.json())
    .then(json => setGenres(json.genres))
    .catch(error => console.error(error));
  }, []);

  return (
    <main>
      {
        genres.length > 0 ? 
        <MyForm genres={genres} setSelectedGenreUrl={setSelectedGenreUrl}></MyForm> 
        :
          <div/>
      }

      {
        albumDetails ? 
        <MyCard albumDetails={albumDetails}/>
        :
          <div/>
      }
  </main>
  );
}
