
'use client';
import {
    AppBar, 
    Box, 
    Toolbar,  
    Container,
    Button, 
 } from "@mui/material";

 import { useRouter } from 'next/navigation';
 import Link from 'next/link';
 
 import {useUserContext, googleSignIn, logOut, UserContextProvider } from "@/context/userContext";

 import { useState } from "react";

import Login from "@/app/components/login";

export default function NavBar(){

    const router = useRouter();
    //const sections: string[] = ["Home", "Dogs", "Cats", "Favorites"];
    const links = [
        {name: "Home", url: "/"},
        {name: "Login", url: "/dogs"},
    ];
    // Before changing to Link:
    // <Button onClick={()=>{handleSectionClick(section)}}>{section}</Button>

    // const handleSectionClick = (section: string) => {
    //     if (section == "Home"){
    //         router.push("/");
    //     }
    //     else if (section == "Dogs"){
    //         router.push("/dogs");
    //     }
    //     else if (section == "Cats"){
    //         router.push("/cats");
    //     }
    //     else if (section == "Favorites"){
    //         router.push("/favorites");
    //     }
    // };
    
    return (
        <UserContextProvider>
        <header>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
                        <Link href={"/"} passHref>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {"Home"}
                            </Button>
                        </Link>
                    </Box>
                    <Login/>
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
        </UserContextProvider>
    )
}