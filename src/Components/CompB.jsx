import React from 'react'
import { useContext } from 'react'
import { CounterCtx } from '../Context/CounterCtxFile'
export default function CompB() {
    const {counter} = useContext(CounterCtx)
      return <h1>Component B sees counter as {counter}</h1>
}
