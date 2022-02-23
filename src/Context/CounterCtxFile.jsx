import React, { createContext,useState } from 'react'
export const CounterCtx = createContext(0)
const CounterCtxProvider = (props)=>{
    const [counter,setCounter] = useState(0)
    const increaseCounter = ()=>setCounter(counter+1)
    const decreaseCounter = ()=>setCounter(counter-1)
    const value = {
        counter,
        increaseCounter,
        decreaseCounter
    };
    return <CounterCtx.Provider value={value}>
        {props.children}
    </CounterCtx.Provider>
}
export default CounterCtxProvider
