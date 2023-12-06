import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    console.log('ghost render')
    
    return (
        <>
            <h1>The Current Number: {count}</h1>
            <button onClick={handleClick}>Increment</button>
        </>
    )
}
export default Counter