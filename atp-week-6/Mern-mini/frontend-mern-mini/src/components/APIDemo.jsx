import {useState,useEffect} from 'react'

function APIDemo(){
    let [user,setUser] = useState([]);
    let [loading,setLoading] = useState(false)
    let [error,setError] = useState(null)


    // const changeCount = ()=>{
    //     setCount(count+1)
    // }
    useEffect(()=>{
        async function getData(){
            setLoading(true)
            try{
            let res = await fetch("https://jsonplaceholde.typicode.com/posts")
            let userList = await res.json()

            setUser(userList)
            

            }catch(err){
                console.log("Error is",err);
                setError(err)
            }
            finally{
                setLoading(false)
            }
        }
        getData();
    },[])
    console.log("API demo is rendered")
    if(loading){
        return <p className='text-center text-6xl '>Loading...</p>
    }
    if(error!==null){
        return <p className='text-center text-6xl text-red-600'>Failed to fetch</p>
    }


    //Making API req need to wait until initial rendering is complited
    //initial render -->display-->aoi claa-->rerender -->display

    return(
        <div className='text-5xl p-5 mt-3.5'>
            <h1 className='text-8xl text-center bg-blue-500 '>List of users</h1>
            {
                user.map((userObj)=>{
                    return <div key={userObj.id} className='grid grid-cols-2 gap-5 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 border-2 m-5 p-5'>
                        <h2>{userObj.title}</h2>
                        {/* <p>{userObj.body}</p> */}
                    </div>
                })
            }
        </div>
    )
}
export default APIDemo;