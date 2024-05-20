import { NextApiRequest, NextApiResponse } from "next"
import { Tag } from "../../app/tags"

export default async function handler( 
        req: NextApiRequest,
        res: NextApiResponse<{albums: Tag[]}>
    ){

    const albumArray: Tag[] = [];
    const r = await fetch(`https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${req}&api_key=676645f75bf3affab317961c253214f9&format=json`);
    
    
    const jsonData = await r.json();
    for (let i = 0; i < jsonData.results.length; i++){
      albumArray.push(jsonData.results[i] as Tag);
    }


    res.status(200).json({ albums: albumArray })
  } 