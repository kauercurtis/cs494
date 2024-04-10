'use client';

import { Container, List, ListItem, 
          TableContainer, Table, TableHead, 
          TableBody, TableRow, TableCell 
        } from "@mui/material";

import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`] : {
    backgroundColor: "black", 
    color: "white",
    fontSize: 16, 
    textAlign: "center"
  },
  [`&.${tableCellClasses.body}`] : {
    fontSize: 14, 
    textAlign: "center"
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(even)":{
    backgroundColor: "#ccc"
  },
  "&:nth-of-type(odd)":{
    backgroundColor: "#ADD8E6"
  }
}));


export default function Home() {
  const columns: string [] = ["Game Title", "Developer", "Year", "Genre", "Platform"];
  
  const gameData: string[][] = [
    ["The Legend of Zelda: Breath of the Wild", "Nintendo", "2017", "Adventure", "Nintendo Switch"], 
    ["Super Metroid", "Nintendo", "1994", "Science-Fiction", "Super Nintendo Entertainment System"], 
    ["Portal 2", "Valve", "2011", "Puzzle", "PC, Playstation 3, Xbox 360"], 
    ["Tetris", "Alexey Pajitnov", "1984", "Puzzle", "Varying Platforms"], 
    ["Grand Theft Auto V", "Rockstar North", "2013", "Open World", "Varying Platforms"]
  ]

  function HeaderRow(){
    return(
      <StyledTableRow>
        <StyledTableCell>{columns[0]}</StyledTableCell>
        <StyledTableCell>{columns[1]}</StyledTableCell>
        <StyledTableCell>{columns[2]}</StyledTableCell>
        <StyledTableCell>{columns[3]}</StyledTableCell>
        <StyledTableCell>{columns[4]}</StyledTableCell>
      </StyledTableRow>
    );
  }

  function newRow(rowNumber: number){
    return(
      <StyledTableRow>
        <TableCell>{gameData[rowNumber][0]}</TableCell>
        <TableCell>{gameData[rowNumber][1]}</TableCell>
        <TableCell>{gameData[rowNumber][2]}</TableCell>
        <TableCell>{gameData[rowNumber][3]}</TableCell>
        <TableCell>{gameData[rowNumber][4]}</TableCell>
      </StyledTableRow>
    );
  }

  return (
    <main>
      <TableContainer>
        <Table>
          <TableHead>{HeaderRow()}</TableHead>
          <TableBody>
            {newRow(0)}
            {newRow(1)}
            {newRow(2)}
            {newRow(3)}
            {newRow(4)}
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  );
}
