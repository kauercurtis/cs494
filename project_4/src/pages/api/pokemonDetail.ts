import { NextApiRequest, NextApiResponse } from "next"

import { PokemonDetail } from '../../types/PokemonDetail';

import { Tag } from '../../app/tags';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{albums: Tag[]}>
  ) {

    // const r = await fetch(req.query.url as string);
    const albumArray: Tag[] = [];
    const r = await fetch(`https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${req.query.url}&api_key=676645f75bf3affab317961c253214f9&format=json`);

    const jsonData = await r.json();


    for (let i = 0; i < jsonData.albums.album.length; i++){
      console.log(`ALBUM NAME ${jsonData.albums.album[i].name}`);
      // console.log(`ALBUM IMAGE ${jsonData.albums.album[i].image[].text}`);
      const album: Tag = {
        album: jsonData.albums.album[i].name as string,
        artist: jsonData.albums.album[i].artist.name as string,
        url: jsonData.albums.album[i].image[1]['#text'] as string
      }
      console.log(albumArray.length)
      albumArray.push(album as Tag)
    }

    res.status(200).json({ albums: albumArray })
  }    