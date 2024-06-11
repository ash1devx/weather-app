import React, { useContext } from 'react'
import { CounterContext } from './context/Counter'

const Counter = () => {
    const counterContext = useContext(CounterContext);
  return (
    <div className="flex">
        <button onClick={()=> {
            counterContext.setCount((prev) => prev+1)
        }} className='bg-slate-400 p-2 m-1'>Increment</button>
        <button onClick={()=> {
            counterContext.setCount((prev) => prev-1)
        }}  className='bg-slate-400 p-2 m-1'>Decrement</button>
    </div>
  )
}

export default Counter