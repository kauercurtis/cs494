'use client';

import NavBar from "@/components/navBar"

import AnimalCard from "@/components/animalCardFavorite";

import { useAnimalsContext } from "@/context/animalsContext";

import { Animal } from "@/types/animal"

export default function Dogs(){
    const { getFavorites } = useAnimalsContext();

    return (
        
        <div>
            <NavBar />
            <main>
                {
                getFavorites().map((animal: Animal, i: number)=>(
                    <AnimalCard key={i} animalDetail={animal} />
                ))
                 }
            </main>
        </div>

    )
}