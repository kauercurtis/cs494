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
 
 import {useUserContext, googleSignIn, logOut} from "@/context/userContext";

const Login = () => {
    const user = useUserContext();

    console.log(user);

    function handleLogout(){
        logOut();
    }
    
    function handleGoogleLogin(){
        googleSignIn();
    }

    return(
    <div>

    {user ? (
            <Container sx={{display: 'flex', flexDirection: 'row'}}> 
            <Link href={"/profile"} passHref>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {"Profile"}
                            </Button>
                        </Link>
            {
                user.photoURL?
                <img src={user.photoURL} alt="profile picture" width={70} height={70}></img> :
                <div></div>        
            }             
            <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleLogout}>
                Log Out
            </Button>
            </Container>
            ) : (
            <div>
                <p>
                    <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleGoogleLogin}>Login</Button>
                </p>
            </div>
            )
    }

    </div>
    );
};

export default Login;