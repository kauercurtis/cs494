
import { Container, List, ListItem, TableContainer } from "@mui/material";

import MyTable from "./components/myTable";

//To Do: Encapuslate the data into its own file. JSON file comes to mind. 

export default function Home() {
  const columns: string [] = ["Game Title", "Developer", "Year", "Genre", "Platform"];
  
  const gameData: string[][] = [
    ["The Legend of Zelda: Breath of the Wild", "Nintendo", "2017", "Adventure", "Nintendo Switch"], 
    ["Super Metroid", "Nintendo", "1994", "Science-Fiction", "Super Nintendo Entertainment System"], 
    ["Portal 2", "Valve", "2011", "Puzzle", "PC, Playstation 3, Xbox 360"], 
    ["Tetris", "Alexey Pajitnov", "1984", "Puzzle", "Varying Platforms"], 
    ["Grand Theft Auto V", "Rockstar North", "2013", "Open World", "Varying Platforms"]
  ];
    
  return (
      <main>
        <TableContainer>
          <MyTable columns={columns} gameData={gameData}/>
        </TableContainer>
      </main>
    );
  }

