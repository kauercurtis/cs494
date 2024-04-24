
import { promises as fs } from "fs";

import MyPage from '../components/myPage';

export default async function Home(){

  const fileData = await fs.readFile(process.cwd() + "/data/movie_data.json", "utf8");

  const jsonData: {title: string, 
                  release_year: number,
                  director: string,
                  genre: string[],
                  starring_actors: string[],
                  rotten_tomatoes_score: number}[] = JSON.parse(fileData)
  return (
    <main>
      <MyPage jsonData={jsonData}/>
    </main>
  );
}