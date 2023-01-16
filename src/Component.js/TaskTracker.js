import React, {useState} from 'react'

const TaskTracker = () => {
  const [count, setCount] = useState(4)
  const [age, setAge] = useState(20)
  
  const handleClick = () =>{
    setCount((preCount) =>preCount + 1)
  }
    const changeAge = ()=>{
      setAge((preAge) => preAge + 2)
    }
  return (
    <header>
         <h1>number {count} and my age is {age}</h1>
         <button onClick={handleClick}>clic</button>
         <button onClick={changeAge}>click</button>
    </header>
  )
}

export default TaskTracker