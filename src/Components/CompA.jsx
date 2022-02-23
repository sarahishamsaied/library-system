import React from 'react'
import { useContext } from 'react'
import { CounterCtx } from '../Context/CounterCtxFile'
export default function CompA() {
//   return <CounterCtx.Consumer>
//       {
//           ({counter})=>{
//             return <div>
//             <h1>Comp A sees the counter as {counter+1}</h1>
//           </div>
//           }
//       }
//   </CounterCtx.Consumer>
const {counter} = useContext(CounterCtx)
return <h1>Comp A sees counter as {counter+1}</h1>
}
