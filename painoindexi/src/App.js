import './App.css';
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [index, setIndex] = useState('')

  function laske(e) {
    e.preventDefault()
    const tulos = weight/(height*height)
    setIndex(tulos)
  }

  return (
    <div>
      <h3>Calculating body mass index</h3>
      <form onSubmit={laske}>
      <div>
        <label>Height</label>
        <input value={height} onChange={e =>setHeight(e.target.value)}></input>
      </div>
      <div>
        <label>Weight</label>
        <input value={weight} onChange={e =>setWeight(e.target.value)}></input>
      </div>
      <div>
        <label>Painoindexi</label>
        <output>{index.toFixed(2)}</output>
      </div>
      <button>Laske</button>
      </form>
    </div>
  );
}

export default App;
