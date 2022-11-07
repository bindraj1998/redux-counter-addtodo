// import {DECREMENT_COUNTER,INCREMENT_COUNTER} from "./actionType"



 export const increment_counter=(value)=>{
    return {type:"INCREMENT_COUNTER",payload:value}
}


export const decrement_counter=(value)=>{
    return {type:"DECREMENT_COUNTER",payload:value}
}

export const addTodo=(payload)=>{
    return {type:"addtodo",payload:payload}
}

export const gettodorequest=({page})=>{
    return {type:"gettodorequest"}
}

export const gettodosuccess=(payload)=>{
    return {type:"gettodosuccess",payload}
}
export const gettodofailure=(error)=>{
    return {type:"gettodofailure",payload:error}
}


