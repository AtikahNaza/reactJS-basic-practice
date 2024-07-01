import React, { useState } from "react";
import './ToggleSwitch.css'

const ToggleSwitch = () =>{
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(prevState => !prevState);
    }

    return(
        <div>
            <h1>--Toggle Switch Exercise--</h1>
            <div className="toggle-switch" onClick={handleToggle}>
                <div className={`switch ${isOn ? 'on': 'off'}`}>
                    <div className="toggle"/>
                </div>
            </div>
            <p>{isOn ? 'On': 'Off'}</p>
        </div>
        
    )
}

export default ToggleSwitch;