'use client';

import NavBar from "@/app/components/navbar"
import Profile from "@/app/components/profile"
import { useUserContext, UserContextProvider } from "@/context/userContext"

export default function Account(){

    const user = useUserContext();

    console.log(user);

    console.log(user?.displayName);

    return(
        <UserContextProvider>
            <main>
                <NavBar/>
                <Profile/>
            </main>
        </UserContextProvider>
    );

};

