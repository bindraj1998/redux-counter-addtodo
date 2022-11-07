import React, { useState } from 'react'
import { addTodo } from './action'

const Input = ({addtodo}) => {
    const[text,settext]=useState("")


    const handleadd=()=>{
        const payload={
         status:false,
         title:text
        }
        addtodo(payload)
        settext("")
    }
  return (
    <div>Input

<input type="text" value={text} onChange={(e)=>settext(e.target.value)}/>
     <button onClick={handleadd}>add</button>


    </div>
  )
}

export default Input