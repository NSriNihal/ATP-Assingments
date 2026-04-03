import {useContext} from 'react'
import {counterContextObj} from '../contexts/ContextProvider'
import Test from './Test'
import { useCounterStore } from '../store/CounterStore' 

function Home() {
  console.log("Home rendered")
  let newCounter = useCounterStore((state)=>state.newCounter)
  let incrementCounter = useCounterStore((state)=>state.incrementCounter)
  let decrementCounter = useCounterStore((state)=>state.decrementCounter)
  let  resetto500 = useCounterStore((state)=>state.resetto500)
  let incrementCounterBy20 = useCounterStore((state)=>state.incrementCounterBy20)
  
  
  const {counter, changeCounter} = useContext(counterContextObj)
  return (
    <div className='gap-5 mx-3'>
      <h1 className='text-4xl gap-5'>Counter:{counter}</h1>
      <button onClick={changeCounter} className='bg-amber-200 p-5 gap-5'>change</button>
      
      <h1 className='text-4xl gap-5'>Counter:{newCounter}</h1>
      <button onClick={incrementCounter} className='bg-amber-200 p-5 gap-5'>Increase increment counter</button>
      <button onClick={decrementCounter} className='bg-amber-100 p-5'>Decrement increment counter</button>
      <button onClick={resetto500} className='bg-amber-300 p-5'>Reset to 500</button>
      <button onClick={incrementCounterBy20} className='bg-amber-400 p-5'>Increment by 20</button>
      <Test/>
    </div>
  )
}

export default Home

//rfce