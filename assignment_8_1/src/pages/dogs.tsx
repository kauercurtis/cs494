import NavBar from "@/components/navbar";
import { useState, useEffect }from "react";
import { getDog } from "@/assets/getPet"
import { Animal } from "@/types/animal"

export default function Dogs(){
    const [dog, setDog] = useState<Animal | null>(null);
    useEffect(()=>{
        getDog().then((res) => setDog(res));
    }, []);
    
    console.log(dog);

    return(
        <div>
            <NavBar/>
            <main>
                DOGS!!!!!!!!!!!!!
            </main>
        </div>
    );

}