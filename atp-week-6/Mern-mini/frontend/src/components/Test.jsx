import {useContext} from 'react'
import {counterContextObj} from '../contexts/ContextProvider'
import { useCounterStore } from '../store/CounterStore'

function Test() {
    console.log("Test rendered")
    const {counter1, changeCounter1} = useContext(counterContextObj)
    let newCounter1= useCounterStore(state=>state.newCounter1)
    let incrementCounter1= useCounterStore(state=>state.incrementCounter1)
  return (
    
    <div>
      <h1 className='text-4xl'>Counter:{counter1}</h1>
      <button onClick={changeCounter1} className='bg-amber-200 p-5'>Increase</button>
      <h1 className='text-4xl'>Counter:{newCounter1}</h1>
      <button onClick={incrementCounter1} className='bg-amber-200 p-5'>Increase increment counter</button>
    </div>
  )
}

export default Test