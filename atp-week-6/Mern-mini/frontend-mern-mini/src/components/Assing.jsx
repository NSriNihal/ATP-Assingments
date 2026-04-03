import { useState } from 'react'
import {useForm} from 'react-hook-form'

function Assing() {

    const {register,handleSubmit,reset,formState:{errors}} = useForm()
    const [users, setUsers] = useState([])

    const onFormSubmit = (obj)=>{
        setUsers((prev) => [...prev, obj])
        reset()
    }

    return(
        <div className='bg-blue-300'>
            

            <form className='max-w-md mx-auto mt-10 bg-orange-400' onSubmit={handleSubmit(onFormSubmit)}>
                <h1 className='text-center text-5xl'>User Form</h1>
                {/* Firstnamename */}
                <div className='mb-3'>
                    <label htmlFor="#username">First Name</label>
                    <input type="text" 
                    {...register("firstname",
                        {
                            required:"firstname required",
                            validate:(v) =>v.trim().length !== 0 || "WhiteSpace is not a valid charecter",
                            minLength:4,
                            maxLength:12
                        }
                    )} id="firstname" className='border w-full p-3 bg-white'/>
                    {errors.firstname?.type === "required" && <p className='text-red-500'>{errors.firstname.message}</p>}
                    {errors.firstname?.type === "minLength" && <p className='text-red-500'>min of 4 characters are required</p>}
                    {errors.firstname?.type === "maxLength" && <p className='text-red-500'>max of 12 characters are allowed</p>}
                    {errors.firstname?.type === "validate" && <p className='text-red-500'>{errors.firstname.message}</p>}
                </div>
                {/* email */}
                <div className='mb-3'>
                    <label htmlFor="#email">Email</label>
                    <input type="email" {...register("email",
                        {
                            required:"email feild is required"
                        }
                    )} id="email" className='border w-full p-3 bg-white'/>
                    {errors.email?.type === "required" && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                {/* DOB */}
                <div className='mb-3'>
                    <label htmlFor="date">Date Of Birth</label>
                    <input type="date" {...register("date",
                        {
                            required:"date feild is required"
                        }
                    )} id="date" className='border w-full p-3 bg-white'/>
                    {errors.date?.type === "required" && <p className='text-red-500'>{errors.date.message}</p>}
                </div>

                {/* submit button */}
                <button type="submit" className='bg-pink-500 block p-4 mx-auto '>Add User</button>
            </form>

            <div className='max-w-md mx-auto mt-10 bg-red-500'>
                <h1 className='text-3xl text-white text-center'>List of Users</h1>

                <table className='w-full mt-3 bg-red-500'>
                    <thead>
                        <tr>
                            <th className='p-3 border'>firstname</th>
                            <th className='p-3 border'>email</th>
                            <th className='p-3 border'>dateOfBirth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => (
                                <tr key={user.email}>
                                    <td className='p-3 border'>{user.firstname}</td>
                                    <td className='p-3 border'>{user.email}</td>
                                    <td className='p-3 border'>{user.date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div> 

        
    )
}
export default Assing