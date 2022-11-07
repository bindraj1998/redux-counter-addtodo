import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement_counter, increment_counter } from './action'
// import { increment_counter,decrement_counter } from './into/action';


const Counter = () => {
    const counter=useSelector((state)=>state.counter)
  // console.log(counter)
  const dispatch=useDispatch()
  return (
    <div>Counter



      <p>{counter}</p>
      <button onClick={()=>dispatch(increment_counter(1))}>add</button>
      <button onClick={()=>dispatch(decrement_counter(1))}>dec</button>
    </div>
  )
}

export default Counter