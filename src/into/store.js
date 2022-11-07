import {DECREMENT_COUNTER,INCREMENT_COUNTER} from "./actionType"

import {createStore } from "redux"
import { reducer } from "./reducer"
import { increment_counter } from "./action"

export const store=createStore(reducer)
console.log(store.getState())
store.dispatch(increment_counter(5))
console.log(store.getState())

