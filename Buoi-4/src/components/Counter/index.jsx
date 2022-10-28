import React from "react";
import {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const clickIncreaseCount = () => {
        setCount(count + 1);
    }

    return (
        <div className="Counter">
            <div>{count}</div>
            <button onClick = {clickIncreaseCount}>Click Me</button>
        </div> 
    )
}

export default Counter;