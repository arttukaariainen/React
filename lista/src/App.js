import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const names = ['Arttu', 'Jouni', 'Jake'];
    setItems(names);
    console.log(items);
  }, [])

  return (
    <div style={{margin: "30px"}}>
      <h3>Names</h3>
      <ul>
        {items.map(item => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
