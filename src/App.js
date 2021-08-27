import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('https://murmuring-woodland-61536.herokuapp.com/toys')
    .then(res => res.json())
    .then(setToys)
  },[])

  return (
    <div className="App">
      {
        toys.map(toy => <img width={100} key={toy.id} src={toy.image} />)
      }
    </div>
  );
}

export default App;
