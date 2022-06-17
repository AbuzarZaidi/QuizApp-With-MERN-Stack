
import React,{useState} from 'react'
import New from './New'
const cars = ["Saab", "Volvo", "BMW"];

const Library = () => {
  let count=0
  const [currVal,setCurrVal]=useState(cars[count]);
  
  const buttonHandler=()=>{
    count++;
    setCurrVal(cars[count])
  }
  return (
    <>
<h1>Hello world</h1>
<New val={currVal}/>
<button onClick={buttonHandler}>Click</button>

</>
  )
}

export default Library