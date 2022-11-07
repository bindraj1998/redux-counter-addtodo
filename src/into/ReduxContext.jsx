import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'
import { store } from './store'

export const ReduxContext=createContext()

export const Reduxprovider=({children})=>{
    // console.log(store)
    const {getState,dispatch}=store
    const[state,setstate]=useState(0)
    useEffect(()=>{
        const force=()=>setstate((pre)=>pre+1)
        let unsubscribe =store.subscribe(
            // ()=>{
            // console.log(Date.now(),getState())
            force
        // }

        )
        return ()=>{
            unsubscribe()
        }
    },[])

   const value={getState,dispatch}


   return  <ReduxContext.Provider value={value}>{children}</ReduxContext.Provider>
}