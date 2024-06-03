'use client';

import {  
    Container
 } from "@mui/material";

import { useUserContext } from "@/context/userContext"

const Profile = () => {

    const user = useUserContext();

    console.log(user);

    console.log(user?.displayName);

    return(

        <Container>
        <div style={{ borderStyle: "solid", padding: 20, margin: 5 }}>

            <h3>Name: {user?.displayName}</h3>

            <h3>email: {user?.email}</h3>

        </div>
        </Container>

    );

};

export default Profile;