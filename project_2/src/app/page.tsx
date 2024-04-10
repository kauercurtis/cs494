import pokemon from '../assets/data/gen_1_pokedex.json'; 

function header(){
  return(
    <h1>Generation 1 Pokedex</h1>
  );
}

function tableHeader(){
  return(
    <table>
      <thead>
        <tr>
          <th>Number</th>
          <th>Pic</th>
          <th>Name</th>
          <th>Types</th>
          <th>Abilities</th>
        </tr>
      </thead>
    </table>
  );
}

export function list(){
  const tableRows = pokemon.map(poke =>
    <tr>
      <td>{poke.number}</td>
      <td><img src= {poke.ThumbnailImage}></img></td>
      <td>{poke.name}</td>
      <td>{poke.type.join(', ')}</td>
      <td>{poke.abilities.join(', ')}</td>
    </tr>
  );
  return tableRows;
}


export default function Home() {
  return (
    <main>
      {header()}
      {tableHeader()}
      {list()}
    </main>
  );
}
