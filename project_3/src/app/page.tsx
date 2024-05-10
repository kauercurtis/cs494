'use client';

import MyForm from "../components/myForm"
import MyTable from "../components/myTable"
import { useState, useEffect } from 'react';

export default function Home() {
  
  const [entries, setEntries] = useState<{task: string, urgency: number}[]>([]);

  function addEntry(entry: {task: string, urgency: number}){
    setEntries([...entries, entry]);
    entries.sort((a, b) => a.urgency - b.urgency);
    console.log(...entries);
  }

  function deleteEntry(index: number){
    const newEntries = entries.filter((element, ind) => ind != index); 
    setEntries(newEntries);
    
  }

  return (
    <main>
      <h1>My Task Manager</h1>
      <MyForm addEntry={addEntry} />
      <MyTable entries={entries} deleteEntry={deleteEntry}></MyTable>
    </main>
  );
}
