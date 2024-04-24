import { TableBody } from "@mui/material";
import MyBodyRow from './myBodyRow';

export default function MyTableBody(props: {data:  {title: string, 
    release_year: number,
    director: string,
    genre: string[],
    starring_actors: string[],
    rotten_tomatoes_score: number}[]}){
    // TODO: This component doesn't actually use the data. It's just passing it to the child components... oh well, someone else can fix it.
   
    return(
        <TableBody>
            {
                props.data.map((data:  {title: string, 
                    release_year: number,
                    director: string,
                    genre: string[],
                    starring_actors: string[],
                    rotten_tomatoes_score: number}, i: number)=>(
                    <MyBodyRow key={i} data={data}/>
                ))
            }
        </TableBody>
    )
}