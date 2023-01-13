import React, {useState} from 'react'

const TaskTracker = () => {
  const [count, setCount] = useState(4)
  const handleClick = () =>{
    setCount((preCount) =>preCount + 1)
  }
    const age = 34
  return (
    <header>
         <h1>number {count} and my age is {age}</h1>
         <button onClick={handleClick}>clic</button>
    </header>
  )
}

export default TaskTracker