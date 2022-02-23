import React from 'react'
import { CounterCtx } from '../Context/CounterCtxFile'
export default function Counter() {
  return <CounterCtx.Consumer>
      {
          (value)=>{
              console.log(value.counter)
            return <div>
                <h1>The counter is : {value.counter}</h1>
                <button className='btn btn-primary' onClick={value.increaseCounter}>+</button>
                <button className='btn btn-primary' onClick={value.decreaseCounter}>-</button>
            </div>
          }
      }
  </CounterCtx.Consumer>
}
