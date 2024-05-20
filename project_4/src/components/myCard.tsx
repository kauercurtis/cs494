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
                  <Card sx={{ height: 'fit-content', width: 'fit-content', display: 'flex', flexDirection: 'row'}}>
                    <CardMedia
                        sx={{ width: 200, height: 151, p: 2 }}
                        image={ album.url }
                        title="album_image"
                    />
                    <CardContent>
                        <Typography gutterBottom varient="h5" componenent="div">

                            { album.album }
                            
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Artist: {album.artist}
                        </Typography>
                    </CardContent>
                  </Card>  
            )}
            
        </Container>
    );

}