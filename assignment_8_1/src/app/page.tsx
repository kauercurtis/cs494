'use client';

import NavBar from "@/components/navBar";
import { useAnimalsContext } from "@/context/animalsContext";
import AnimalCard from "@/components/animalCard";
import { useEffect } from "react";
export default function Home() {

  const { animals, featured } = useAnimalsContext();

  useEffect(()=>{
    console.log(animals)
  }, [animals])

  return (
      <main>
        <NavBar />
        {
          featured ?
          <AnimalCard animalDetail={featured} /> :
          <div>Loading Animals...</div>  

        }
      </main>

  );
}
