import {TableContainer } from "@mui/material";

import MyTable from '../components/myTable';

import { promises as fs } from "fs";

export default async function Home() {

  const fileData = await fs.readFile(process.cwd() + "/data/star_data.json", "utf8") 

  const jsonData: {name: string,
                    distance_from_earth_ly: number,
                    size: string, 
                    mass: string, 
                    temperature: string, 
                    type: string 
                    } = JSON.parse(fileData);

  const headers: string[] = ["name", "distance from earth ly", "size", "mass", "temperature", "type"];
  
  // TODO Convert the data to objects instead.
  // {title: string, year: string, director: string, genre: string[], score: string}
  // const data: string[][] = [
  //   ["The Dark Knight", "2008", "Christopher Nolan", "Action, Crime, Drama", "94%"],
  //   ["The Shawshank Redemption", "1994", "Frank Darabont", "Drama", "98%"],
  //   ["Inception", "2010", "Christopher Nolan", "Action, Adventure, Sci-Fi", "91%"],
  //   ["Pulp Fiction", "1994", "Quentin Tarantino", "Crime, Drama", "96%"],
  //   ["Forrest Gump", "1994", "Robert Zemeckis", "Drama, Romance", "95%"]
  // ];

  // const data: {name: string, distance_from_earth_ly: string, size: string, mass: string[], temperature: string, type: string}[] = [];

  // let foo: string = "";

  // jsonData.forEach(data.push({name: foo.name, distance_from_earth_ly: foo.distance_from_earth_ly, size: foo.size, mass: foo.mass, temperature: foo.temperature, type: foo.type}));

  // data.push({title: "The Dark Knight", year: "2008", director: "Christopher Nolan", genre: ["Action", "Crime", "Drama"], score: "94%"});

  
  return (
    <main>
      <TableContainer>
        <MyTable headers={headers} data={jsonData} />
      </TableContainer>
    </main>
  );
}