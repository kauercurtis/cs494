'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

import { Animal } from '@/types/animal';

import { getAnimals } from '@/assets/getPet';

import { db } from '../app/firebase'

import { getDoc, setDoc, doc } from 'firebase/firestore';

interface animalContextProps {
    animals: Animal[],
    cats: Animal[],
    dogs: Animal[],
    getFavorites: Function,
    featured: Animal | null
}

const AnimalsContext = createContext<animalContextProps>({
    animals: [],
    dogs: [],
    cats: [],
    getFavorites: ()=>{},
    featured: null

})

export function AnimalsContextProvider({children}: {children: ReactNode}){
    const [animals, setAnimals] = useState<Animal[]>([]);
    const [cats, setCats] = useState<Animal[]>([]);
    const [dogs, setDogs] = useState<Animal[]>([]);
    const [featured, setFeatured] = useState<Animal | null>(null);

    const catCount = 5;
    const dogCount = 5;
    
    useEffect(()=>{
        console.log(animals);
        if (animals){
            setCats(getCats());
            setDogs(getDogs());
        }

        if (!featured && animals){
            setFeatured(animals[getRandomInt(animals.length)]);
        }
        if(animals){
            writeAnimals(animals);
        }
    },[animals])

    useEffect(()=>{
        if (animals && animals.length == 0){
            initAnimals();
        }
    },[])

    async function initAnimals(){
        const animals = await readAnimals();
        if(animals.length == 0){
            getAnimals(catCount, dogCount).then((res)=>setAnimals(res));    
        }
        else{
            setAnimals(animals);
        }
    }

    function getDogs(){
        console.log(animals);
        return animals.filter((animal: Animal)=>animal.type == "dog");
    }

    function getCats(){
        return animals.filter((animal)=>animal.type == "cat");
    }
    
    function getFavorites(){
        return animals.filter((animal)=>animal.favorited);
    }

    function writeAnimals(animals: Animal[]){
        for (let i = 0; i < animals.length; i++){
            setDoc(doc(db, "animals", i.toString()), animals[i]);
        }
    }

    async function readAnimals(){
        let exists = true;
        let counter = 0;
        const animals = [];
        
        while(exists){
            const docRef = doc(db, "animals", counter.toString());
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                
                animals.push(docSnap.data() as Animal);
                
                counter++;
            }
            else{
                exists = false;
            }
        }

        return animals;
    }

    return (
        <AnimalsContext.Provider value={{animals: animals, cats: cats, dogs: dogs, getFavorites: getFavorites, featured: featured}}>
            {children}
        </AnimalsContext.Provider>
    )
}

export function useAnimalsContext(){
    return useContext(AnimalsContext);
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }