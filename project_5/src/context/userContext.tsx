import {

    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect

} from "react"

import { auth } from "../app/firebase";

import {

    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    User

} from "firebase/auth";

const UserContext = createContext<{user: User | null} | undefined>(undefined);

export function UserContextProvider({ children }: {children: ReactNode} ){

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => setUser(user));
        return unsubscribe;
    }, []);

    return (

        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>

    );

}

export const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
};

export const logOut = () => {

    signOut(auth);

}

export function useUserContext(){
    
    const context = useContext(UserContext);

    return context?.user;

}   