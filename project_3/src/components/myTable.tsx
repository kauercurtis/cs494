import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Button, Rating } from "@mui/material";
import { ChangeEvent } from 'react'

export default function MyTable(props: {entries: {task: string, urgency: number}[], deleteEntry: Function}){
    const hobbies: string[] = ["Hiking", "Gaming"];
    console.log(`My hobbies are ${hobbies[0]} and ${hobbies[1]}.`);
    console.log("My hobbies are " + hobbies[0] + " and " + hobbies[1] + ".");
    console.log(`My hobbies are ${hobbies.join(" and ")}.`);
    console.log(`My hobbies are ${hobbies}.`);
    props.entries.sort((a, b) => b.urgency - a.urgency);
    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Task
                        </TableCell>
                        <TableCell>
                            Urgency
                        </TableCell>
                        <TableCell>
                            Complete
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.entries.map((entry, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    {entry.task}
                                </TableCell>
                                <TableCell>
                                    <Rating value={entry.urgency} readOnly/>
                                </TableCell>
                                <TableCell>
                                    <Button value={index} onClick={()=>{props.deleteEntry(index)}}>
                                        complete
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