import { useForm } from "react-hook-form"
import {useLocation,useNavigate} from "react-router"
import {useEffect} from "react"
// import { useNavigate } from "react-router"
import axios from 'axios'

function EditEmployee() {
  const {register,handleSubmit,setValue} = useForm()
  const {state} = useLocation();
  const navigate = useNavigate()

  useEffect(()=>{
    if (!state) return;
    setValue("name",state.name);
    setValue("email",state.email);
    setValue("mobile",state.mobile);
    setValue("designation",state.designation);
    setValue("companyName",state.companyName);
  }, [])

  const saveModifiedEmp = async(ModifiedEmp)=>{
    console.log(ModifiedEmp)
    const res = await axios.put(`http://localhost:5050/employee-api/employee/${state._id}`,ModifiedEmp)
    if(res.status = 200){
      navigate("/list")
    }
  }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
  return (
    <div>
        
        <h1 className="text-5xl text-center text-gray-600">Edit Employee</h1>
        {/* form */}
        <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(saveModifiedEmp)}>
            <input type="text" placeholder="Enter name" {...register("name")} className="mb-3 border-2 p-3 w-full rounded-2xl" id="" />
            <input type="text" placeholder="Enter email" {...register("email")} className="mb-3 border-2 p-3 w-full rounded-2xl" id="" />
            <input type="text" placeholder="Enter mobile number" {...register("mobile")} className="mb-3 border-2 p-3 w-full rounded-2xl" id="" />
            <input type="text" placeholder="Enter Designation" {...register("designation")} className="mb-3 border-2 p-3 w-full rounded-2xl" id="" />
            <input type="text" placeholder="Company name" {...register("companyName")} className="mb-3 border-2 p-3 w-full rounded-2xl" id="" />
            <button type="submit" className="bg-green-600 block p-5 mx-auto text-3xl text-white rounded-2xl">Update</button>
        </form>
    </div>
  )
}

export default EditEmployee