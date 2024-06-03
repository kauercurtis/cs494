'use client';

import {  
    Container
 } from "@mui/material";

import { useUserContext } from "@/context/userContext"

const Home = () => {

    const user = useUserContext();

    console.log(user);

    console.log(user?.displayName);

    return(

        <Container>
            {
                user?
                <h3>Welcome {user?.displayName}</h3>           
                :
                <h3>Welcome, Please Login</h3>
            }
        </Container>

    );

};

export default Home;