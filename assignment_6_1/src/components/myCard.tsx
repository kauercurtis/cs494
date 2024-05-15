import { Button, 
    TextField, 
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem, 
    SelectChangeEvent, 
    Container
} from "@mui/material";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { PokemonDetail } from '../types/PokemonDetail';

export default function MyCard(props: {pokemonDetail: PokemonDetail}){
    console.log(props.pokemonDetail);
    return(
        <Container>
            <Card sx={{ maxWidth: 350, display: 'flex', flexDirection: 'row'}}>
            <CardMedia
                sx={{ width: 151, p: 2 }}
                image={ props.pokemonDetail.image }
                title="poke_image"
                />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                { props.pokemonDetail.name }
                </Typography> 
                <Typography variant="body2" color="text.secondary">
                height: { props.pokemonDetail.height }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                weight: { props.pokemonDetail.weight }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                abilites: { props.pokemonDetail.abilities }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                types: { props.pokemonDetail.types }
                </Typography>
            </CardContent>
            </Card>
        </Container>
    );

}