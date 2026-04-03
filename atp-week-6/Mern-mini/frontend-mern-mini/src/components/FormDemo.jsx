import {useForm} from 'react-hook-form'

function FormDemo() {

    const {register,handleSubmit,formState:{errors}} = useForm()

    const onFormSubmit = (obj)=>{
        console.log(obj)
    }

    return(
        <div>
            <h1 className='text-center text-5xl'>Form Demo</h1>

            <form className='max-w-md mx-auto mt-10' onSubmit={handleSubmit(onFormSubmit)}>
                {/* Username */}
                <div className='mb-3'>
                    <label htmlFor="#username">Username</label>
                    <input type="text" 
                    {...register("username",
                        {
                            required:"Username required",
                            validate:(v) =>v.trim().length !== 0 || "WhiteSpace is not a valid charecter",
                            minLength:4,
                            maxLength:12
                        }
                    )} id="username" className='border w-full p-3'/>
                    {errors.username?.type === "required" && <p className='text-red-500'>{errors.username.message}</p>}
                    {errors.username?.type === "minLength" && <p className='text-red-500'>min of 4 characters are required</p>}
                    {errors.username?.type === "maxLength" && <p className='text-red-500'>max of 12 characters are allowed</p>}
                    {errors.username?.type === "validate" && <p className='text-red-500'>{errors.username.message}</p>}
                </div>
                {/* email */}
                <div className='mb-3'>
                    <label htmlFor="#username">Email</label>
                    <input type="email" {...register("email",
                        {
                            required:"email feild is required"
                        }
                    )} id="email" className='border w-full p-3'/>
                    {errors.email?.type === "required" && <p className='text-red-500'>{errors.email.message}</p>}
                </div>

                {/* submit button */}
                <button type="submit" className='bg-amber-400 block p-4 mx-auto'>Submit</button>
            </form>
        </div>
    )
}
export default FormDemo