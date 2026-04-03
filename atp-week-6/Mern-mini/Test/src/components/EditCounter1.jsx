import React from 'react'
import {counterContextObj} from '../contexts/ContextProvider'
import {useContext} from 'react'
function EditCounter1() {
    const {counter,incrementCounter,decrementCounter} = useContext(counterContextObj)
  return (
    <div className='bg-amber-400 p-5 text-4xl text-center  gap-5'>
        <h1> {counter}</h1>
        <button className='bg-violet-700 p-5 gap-5 mx-5' onClick={incrementCounter}>+</button>
        <button className='bg-violet-700 p-5 gap-5 mx-5' onClick={decrementCounter}>-</button>
    </div>
  )
}

export default EditCounter1