'use client';

import { TableContainer, Table } from "@mui/material";

import MyTableHead from "./myTableHead";
import MyTableBody from "./myTableBody";

export default function MyTable(props: {headers: string[], data: {title: string, 
    release_year: number,
    director: string,
    genre: string[],
    starring_actors: string[],
    rotten_tomatoes_score: number}[]}){
    
    return (
        <TableContainer>
            <Table>
                <MyTableHead headers={props.headers}/>
                <MyTableBody data={props.data} />
            </Table>
        </TableContainer>

    )

}