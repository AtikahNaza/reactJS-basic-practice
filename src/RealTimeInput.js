import React, {useState} from 'react';

const RealTimeInput = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div>
            <h1>--Real Input Value Exercise--</h1>
            <form>
                <label>
                    Enter text:
                    <input type='text' value={inputValue} onChange={handleInputChange}/>
                </label>
            </form>
            <p>Real time input: {inputValue}</p>
        </div>
    )
}

export default RealTimeInput;