<<<<<<< HEAD
import { useEffect } from 'react';
=======
import { useEffect, useState } from 'react';
>>>>>>> ef7334e92e805ef078890eef54b530880e6a80a0
import './App.css';
import Item from './Item';

function App() {
<<<<<<< HEAD
  const [items, setItems] = useState([]);
=======
  const [items,setItems] = useState([]);
>>>>>>> ef7334e92e805ef078890eef54b530880e6a80a0

  useEffect(() => {
    const shoppingList = Array();
    shoppingList.push(new Item('Coffee',1));
    shoppingList.push(new Item('Cookies',5));
<<<<<<< HEAD
    shoppingList.push(new Item('Milk',2))
    setItems(shoppingList);
  }, [])
  return (
    <div style={{margin:'30px'}}>
=======
    shoppingList.push(new Item('Milk',2));
    setItems(shoppingList);
  },[])

  return (
    <div style={{margin: '30px'}}>
>>>>>>> ef7334e92e805ef078890eef54b530880e6a80a0
      <h3>Shopping list</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
<<<<<<< HEAD
          {items.map(item =>(
=======
          {items.map(item => (
>>>>>>> ef7334e92e805ef078890eef54b530880e6a80a0
            <tr key={item}>
              <td>{item.name}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
