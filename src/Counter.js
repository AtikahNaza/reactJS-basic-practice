import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () =>{
        if(count !== 0){
            setCount(count - 1);
        }
    }

    return (
        <div>
            <h1>--Counter Exercise--</h1>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter;