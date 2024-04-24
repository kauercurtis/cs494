import {  TableHead } from "@mui/material";
import { StyledTableCell, StyledTableRow } from "./myStyledTable";


export default function MyTableHead(props: {headers: string[]}){

    return(
        <TableHead>
            <StyledTableRow>
            {          
                props.headers.map((header: string, i: number)=>(
                    <StyledTableCell key={i}>{header}</StyledTableCell>
                ))
            }
            </StyledTableRow>
        </TableHead>
    )
}