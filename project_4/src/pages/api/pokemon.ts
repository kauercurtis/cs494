import { NextApiRequest, NextApiResponse } from "next"

// import { Pokemon } from '../../types/Pokemon';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{genres: string[]}>
  ) {

    const genreArray: string[] = [];
    const r = await fetch("https://ws.audioscrobbler.com/2.0/?method=tag.getTopTags&api_key=676645f75bf3affab317961c253214f9&format=json");
    
    
    const jsonData = await r.json();
    console.log(jsonData);
    for (let i = 0; i < jsonData.toptags.tag.length; i++){
      console.log(jsonData.toptags.tag[i].name);
      genreArray.push(jsonData.toptags.tag[i].name as string);
    }


    res.status(200).json({ genres: genreArray })
  }    