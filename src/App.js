import React from 'react';

function Food( {fav} ){
  console.log(fav)
return <h1>Food is {fav}</h1>
}

function App() {
  return (
  <div>
    Hello!
    <Food fav="kimchi" />
    <Food fav="ramen" />
    <Food fav="meat" />
    <Food fav="choco" />
    </div>
  )
}

export default App;
