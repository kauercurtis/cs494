'use client';

import NavBar from "@/app/components/navbar"
import Home from "@/app/components/home"
import { UserContextProvider } from "@/context/userContext"

export default function main() {
  return (
    <UserContextProvider> 
      <main>
        <NavBar/>
        <Home/>
      </main>
    </UserContextProvider>   
  );
}
