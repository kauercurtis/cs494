'use client';

import MyForm from "../components/myForm"
import { useState, useEffect } from 'react';

export default function Home() {
  
  const [entries, setEntries] = useState<{name: string, language: string, comment: string}[]>([]);

  function addEntry(entry: {name: string, language: string, comment: string}){
    setEntries([...entries, entry]);
  }

  return (
    <main>
      <MyForm addEntry={addEntry} />
    </main>
  );
}
