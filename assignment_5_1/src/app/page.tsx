'use client';

import MyForm from "../components/myForm"
import MyTable from "../components/myTable"
import { useState, useEffect } from 'react';

export default function Home() {
  
  const [entries, setEntries] = useState<{name: string, language: string, comment: string, rating: number}[]>([]);

  function addEntry(entry: {name: string, language: string, comment: string, rating: number}){
    setEntries([...entries, entry]);
  }

  function deleteEntry(index: number){
    // figure out how to delete from array by index number
    // .filiter()?
    const newEntries = entries.filter((element, ind) => ind != index); 
    setEntries(newEntries);
    
  }

  return (
    <main>
      <MyForm addEntry={addEntry} />
      <MyTable entries={entries} deleteEntry={deleteEntry}></MyTable>
    </main>
  );
}
