import {create } from 'zustand'

//create store

export const useCounterStore = create((set)=>({
    //state
    newCounter:0,
    newCounter1:100,
    //add user state
    user:{name:"ravi",email:"ravi@mail",age:21},
    //function to change email
    changeEmail:()=>set({...user,email:"test@mail"}),
    //function to change name and age
    changeNameAndAge:()=>set({...user,name:"ramesh",age:25}),

    //functins to modify state
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    incrementCounter1:()=>set(state=>({newCounter1:state.newCounter1+1})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    reset:()=>set({newCounter:0}),
    resetto500:()=>set({newCounter:500}),
    incrementCounterBy20 :()=>set(state=>({newCounter:state.newCounter+20}))
}))