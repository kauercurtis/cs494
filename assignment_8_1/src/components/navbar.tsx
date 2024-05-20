'use client';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { useRouter } from 'next/navigation';

export default function NavBar(){

    const router = useRouter();

    const sections: string[] = ["Home", "Dogs", "Cats", "Favorites"];

    const handleSectionClick = (section: string) => {
        if(section == "Home"){
            router.push("/");
        }
        else if(section == "Dogs"){
            router.push("/dogs");
        }
        else if(section == "Cats"){
            router.push("/cats");
        }
        else if(section == "Favorites"){
            router.push("/favorites");
        }
    };

    return(
        <AppBar position="static">
            <Container>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex' , md: 'flex' } }}>
            {sections.map((section) => (
                
             
                <Typography>
                    <Button key={section}
                    onClick={()=>handleSectionClick(section)}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                       { section }
                    </Button>
                </Typography>
               
            ))}
            </Box>
            </Container>
        </AppBar>
        //<header>My NavBar</header>
    );

}