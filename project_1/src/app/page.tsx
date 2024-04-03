function header(){
  return <h2>Salutations!</h2>;
}

function introduction(){
  return (<p>Hello, my name is Curtis Kauer. I am a current student at Oregon State University and majoring in Computer Science.
            The classes I am currently taking are intro to artifical intelligence parallel programming, operating systems 2, and advanced web development.
            In my freetime I enjoy hacking on projects, fishing, cooking, playing with my cat, and video games.
          </p>
  );
}

function favoriteList(){
  return (
    <div>
      <h3>My Go Tos For Background Noise</h3>
      <ul>
        <li>Hell's Kitchen</li>
        <li>Kitchen Nightmares</li>
        <li>Video Game OSTs</li>
        <li>Interrogation Dissections</li>
        <li>Stream VODs</li>
      </ul>
    </div>
  );
}

function website(){
  return (
    <div>
      <h3>An interesting website:</h3>
      <a href="https://beesbeesbeesbees.com/"><div>BEES!</div></a>
    </div>
  );
}

export default function Home(){
  return (
    <main>
      {header()}
      {introduction()}
      {favoriteList()}
      {website()}
    </main>
  );
}