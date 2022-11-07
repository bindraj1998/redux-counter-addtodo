
 import { increment_counter,decrement_counter } from "./action"
// import { DECREMENT_COUNTER,INCREMENT_COUNTER } from "./actionType"
const initstate={counter:0,todo:{data:[],isloading:false,error:false}}

export const reducer=(state=initstate,action)=>{


    switch(action.type){
        case "INCREMENT_COUNTER":{
            return {...state,counter:state.counter+action.payload}
        }
        case "DECREMENT_COUNTER" :{
            return {...state,counter:state.counter-action.payload}
        }
        case "addtodo":{
            return{...state,todo:{...state.todo,data:[...state.todo.data,action.payload]}}
        }
        default: return state
    }

   
}

let a=reducer(undefined, increment_counter(5))
console.log(a)
const b=reducer(a,decrement_counter(1))
console.log(b)
const c=reducer(b,increment_counter(1))
console.log(c)
