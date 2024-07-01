import React, { useState } from 'react';
import './App.css';
import Hello from './Hello';
import Counter from './Counter';
import RealTimeInput from './RealTimeInput'
import ItemList from './ItemList';
import ToggleSwitch from './ToggleSwitch';

function App() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4'])
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () =>{
    if (newItem.trim()){
      setItems([...items, newItem]);
      setNewItem('');
    }
  };
  
  return (
    <div className="App">
      <header className="App-header">
       <h1>Hello React!</h1>
       <Hello />
       <Counter />
       <RealTimeInput />

        <div>
            <h1>--List Exercise--</h1>
              <input 
                  type="text"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  placeholder='Add a new Item'
              />
              <button onClick={handleAddItem}>Add Item</button>
              <ItemList items={items} />
        </div>

        <ToggleSwitch />
       
      </header>
    </div>
  );
}

export default App;
