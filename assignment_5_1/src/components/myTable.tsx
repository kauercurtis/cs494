import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Button, Rating } from "@mui/material";
import { ChangeEvent } from 'react'

export default function MyTable(props: {entries: {name: string, language: string, comment: string, rating: number}[], deleteEntry: Function}){

    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Name
                        </TableCell>
                        <TableCell>
                            Language
                        </TableCell>
                        <TableCell>
                            Comment
                        </TableCell>
                        <TableCell>
                            Rating
                        </TableCell>
                        <TableCell>
                            Delete
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.entries.map((entry, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    {entry.name}
                                </TableCell>
                                <TableCell>
                                    {entry.language}
                                </TableCell>
                                <TableCell>
                                    {entry.comment}
                                </TableCell>
                                <TableCell>
                                    <Rating value={entry.rating} readOnly/>
                                </TableCell>
                                <TableCell>
                                    <Button value={index} onClick={()=>{props.deleteEntry(index)}}>
                                        delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }        
                </TableBody>
            </Table>
        </TableContainer>
    );

}