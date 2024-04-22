'use client';
import pokemon from '../assets/data/gen_1_pokedex.json';

import { 
  TableContainer, Table, TableHead, 
  TableBody, TableRow, TableCell, 
  Box,
  tableRowClasses,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`] : {
    backgroundColor: "#808080",
    textAlign: "center",
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`] : {
    backgroundColor: "#D3D3D3", 
    textAlign: "center",
    height: "75px",
    borderBottom: "3px solid black"  
  }
}));

const StyledTableRow = styled(TableRow)(() => ({

}));

export default function Home() {
  
  function header(){
    return(
      <h1>Generation 1 Pokedex</h1>
    );
  }

  function tableHeader(){
    return(
      <StyledTableRow>
        <StyledTableCell>Number</StyledTableCell>
        <StyledTableCell>Pic</StyledTableCell>
        <StyledTableCell>Name</StyledTableCell>
        <StyledTableCell>Types</StyledTableCell>
        <StyledTableCell>Abilities</StyledTableCell>
      </StyledTableRow>
    );
  }

  function tableRows(){
    const tableRows = pokemon.map(poke =>

      <StyledTableRow>
        <StyledTableCell>{poke.number}</StyledTableCell>
        <StyledTableCell><img src={poke.ThumbnailImage}/></StyledTableCell>
        <StyledTableCell>{poke.name}</StyledTableCell>
        <StyledTableCell>{poke.type.join(', ')}</StyledTableCell>
        <StyledTableCell>{poke.abilities.join(', ')}</StyledTableCell>
      </StyledTableRow>
    );
    return tableRows;
  }
  
  return(
    <main>
      {header()}
      <TableContainer>
        <Table>
          <TableHead>{tableHeader()}</TableHead>
          <TableBody>{tableRows()}</TableBody>
        </Table>
      </TableContainer>
    </main>
  );
}
