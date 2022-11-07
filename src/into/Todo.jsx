import React, { useContext } from 'react'
import { useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { addTodo } from './action'
import Input from './Input'
import { ReduxContext } from './ReduxContext'

const Todo = () => {
// const {dispatch,getState}=useContext(ReduxContext)
// const {todo}=getState()
// const todo=useSelector((state)=>state.todo)

// const isloading=useSelector((state)=>state.isloading)
// const iserror=useSelector((state)=>state.iserror)
const {data:todo,isloading,iserror}=useSelector((state)=>state.todo)
console.log(todo)
const dispatch=useDispatch()
const[text,settext]=useState("")
// const handleadd=()=>{
//    const payload={
//     id:todo.length+1,
//     title:text
//    }
//    const todoaction=addTodo(payload)
//      dispatch(todoaction)
// }
const addtodo=(payload)=>{
  console.log(payload)
  dispatch(addTodo(payload))
}


console.log(Date.now(),"renderd")
  return (
    <div>Todo

     {/* <input type="text" value={text} onChange={(e)=>settext(e.target.value)}/> */}
     {/* <button onClick={handleadd}>add</button> */}
      <Input addtodo={addtodo}/> 
     {todo.map((el)=>(
       <div>{el.title}</div>
     ))}
    </div>
  )
}

export default Todo