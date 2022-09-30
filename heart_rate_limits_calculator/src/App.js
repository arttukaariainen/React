import { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState('')
  const [upper, setUpper] = useState('')
  const [lower, setLower] = useState('')

  function laske(e) {
    e.preventDefault()
    const upper = (220 - age)*0.85
    const lower = (220 - age)*0.65
    setLower(lower)
    setUpper(upper)
  }
  return (
    <div id="content">
      <h3>Heart rate limits calculator</h3>
      <form onSubmit={laske}>
        <div>
          <label>Age</label>
          <input value={age} onChange={e => setAge(e.target.value)}></input>
        </div>
        <div>
          <label>Heart rate limits</label>
          <output>{lower}-{upper}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
