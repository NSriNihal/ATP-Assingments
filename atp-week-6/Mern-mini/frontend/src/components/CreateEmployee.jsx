import { useForm } from "react-hook-form"
import {useState} from 'react'
import { useNavigate } from "react-router"
import {counterContextObj} from '../contexts/ContextProvider'

import {useContext} from 'react'

function CreateEmployee() {
    const {counter, changeCounter} = useContext(counterContextObj)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    const {register,handleSubmit} = useForm()
    const navigate = useNavigate()

    const onFormSubmit = async(newEmpObj)=>{
        console.log(newEmpObj)
        //make post http
        try{
            setLoading(true)
        let res = await fetch('http://localhost:5050/employee-api/employee',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(newEmpObj)
        })
        if(res.status === 201){
            navigate("/list")
        }
        else{
            const errorResponse = await res.json()
            throw new Error(errorResponse.message || "Error creating employee")
        }
    }catch(err){
        setError(err.message)
        console.log(err)
    }
    finally{
        setLoading(false);
    }
    }

    if(loading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>Error: {error}</p>
    }
  return (
    <div>
        <h1 className='text-4xl'>Counter:{counter}</h1>
      <button onClick={changeCounter} className='bg-amber-200 p-5'>Increase</button>
        
        <h1 className="text-5xl text-center text-gray-600">Create New Employee</h1>
        {/* form */}
        <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
            <input type="text" placeholder="Enter name" {...register("name")} className="mb-3 border-2 p-3 w-full rounded-2xl" id="" />
            <input type="text" placeholder="Enter email" {...register("email")} className="mb-3 border-2 p-3 w-full rounded-2xl" id="" />
            <input type="text" placeholder="Enter mobile number" {...register("mobile")} className="mb-3 border-2 p-3 w-full rounded-2xl" id="" />
            <input type="text" placeholder="Enter Designation" {...register("designation")} className="mb-3 border-2 p-3 w-full rounded-2xl" id="" />
            <input type="text" placeholder="Company name" {...register("companyName")} className="mb-3 border-2 p-3 w-full rounded-2xl" id="" />
            <button type="submit" className="bg-gray-600 block p-5 mx-auto text-3xl text-white rounded-2xl">Submit</button>
        </form>
    </div>
  )
}

export default CreateEmployee