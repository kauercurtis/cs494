import { Button, 
    TextField, 
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem, 
    SelectChangeEvent, 
    Container,
    Box
} from "@mui/material";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { PokemonDetail } from '../types/PokemonDetail';

import { Tag } from '../app/tags';

export default function MyCard(props: {albumDetails: Tag[]}){

    console.log(props.albumDetails);

    return(
        <Container>
            
            {
                props.albumDetails.map((album) => 
                    <Card sx={{ display: 'flex', width: 'fit-content'}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: 'fit-content' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                { album.album }
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Artist: { album.artist }
                            </Typography>
                            </CardContent>
                            </Box> 
                            <CardMedia
                                component="img"
                                sx={{ width: '151' }}
                                image={ album.url }
                            />
                    </Card>
            )}
            
        </Container>
    );

}