import {useState} from 'react'
//each hook is a function
function Counter(){
  
    const [count,setCount] =  useState(0) //[state,function to modify state]
    const increment = ()=>{
        setCount(count+1)
    }
    const decrement = ()=>{
        setCount(count-1)
    }
    const Zero = (value)=>{
        setCount(value)
    }
    return <div>
            <h1 className="text-6xl p-5 ">count  {count}</h1>
            <button className=" bg-green-500 px-6 py-3 mr-10" onClick={increment}>+</button>
            <button className=" bg-red-500 px-6 py-3 mr-10" onClick={decrement}>-</button>
            <button className=" bg-blue-400 px-6 py-3 mr-10" onClick={()=>Zero(0)}>Reset</button>
    </div>
}
export default Counter