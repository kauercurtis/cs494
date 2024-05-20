import NavBar from "@/components/navbar";

import {useState, useEffect} from 'react';

import {Animal} from "@/types/animal"

import { getCat } from '@/assets/getPet'

export default function Home(){

    const[cat, setCat] = useState<Animal | null>(null);
    useEffect(() => {
        getCat().then((res) => setCat(res));

    }, []);

    console.log(cat);

    return(
        <div>
            <NavBar/>
            <main>
                CATS!!!!!!!!!!!!!
            </main>
        </div>
    );

}