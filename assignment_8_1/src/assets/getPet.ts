import { Animal } from '../types/animal';
// import useEffect from 'react';

export async function getCat(){
    const catImageResponse = await fetch("https://api.thecatapi.com/v1/images/search");
    const catImageJson = await catImageResponse.json();
    const catImageUrl = catImageJson[0].url;

    const nameResponse = await fetch("https://randomuser.me/api/");
    const nameResponseJson = await nameResponse.json();
    const catName = nameResponseJson.results[0].name.first;
    const catGender = nameResponseJson.results[0].gender;

    const newCat: Animal = {
        name: catName,
        image: catImageUrl,
        type: "cat",
        gender: catGender
    }

    return newCat;
}

export async function getDog(){
    const dogImageResponse = await fetch("https://dog.ceo/api/breeds/image/random");
    const dogImageJson = await dogImageResponse.json();
    const dogImageUrl = dogImageJson.message;

    const nameResponse = await fetch("https://randomuser.me/api/");
    const nameResponseJson = await nameResponse.json();
    const dogName = nameResponseJson.results[0].name.first;
    const dogGender = nameResponseJson.results[0].gender;

    const newDog: Animal = {
        name: dogName,
        image: dogImageUrl,
        type: "dog",
        gender: dogGender
    }

    return newDog;
}