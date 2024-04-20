import { useState } from "react";

export default function Count()
{
    const [count, setCount] = useState(0)
    const [incrementBy, setIncrementBy] = useState(1)
    function handleClick() {
        setCount(count + incrementBy)
    }
    function decrement() {
        setCount(count - incrementBy)
    }
    function ConstIncrement() {
        setIncrementBy(incrementBy+1)
    }
    return (
        <div>
            <h1>Count value is: {count}</h1>
            <button onClick={handleClick}>Increment Count</button>
            <br />
            <button onClick={decrement}>Decrement Count</button>

            <h2>Value to Increment by: {incrementBy}</h2>
            <button onClick={ConstIncrement}>Click here</button>
        </div>
    )
}