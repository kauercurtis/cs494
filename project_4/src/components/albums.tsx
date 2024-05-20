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

import { Tag } from '../app/tags';

export default function MyCard(props: {albumDetails: Tag[]}){

    return(
        <Container>
            {
                props.albumDetails.map((album) => 
                <Card sx={{ maxWidth: 350, display: 'flex', flexDirection: 'row'}}>
                <CardMedia
                    sx={{ width: 151, p: 2 }}
                image={ album.url }
                title="album_image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    { album.album }
                    </Typography> 
                    <Typography variant="body2" color="text.secondary">
                    Artist: { album.artist }
                    </Typography>
                </CardContent>
                </Card>
            )}
        </Container>
    );

}