import {useState} from 'react'
function TestRefTypes(){
    const [user,setUser] = useState({name:"Raju",age:22})
    const [marks, setMarks] = useState([10,20,30])

    const updateUser = ()=>{
        setUser({...user,name:"bhanu",age:23})
    }
    const updateMarks = ()=>{
        setMarks([...marks,40])
    }
    return <div>
        <h1 className='text-4xl font-bold p-4'>Name : {user.name} Age : {user.age}</h1>
        <button className='bg-green-500 px-6 py-3' onClick={updateUser}>Update User</button>

        
        <h1 className='text-4xl font-bold p-4'>Marks : {marks.join(', ')}</h1>
        <button className='bg-blue-500 px-6 py-3' onClick={updateMarks}>Update Marks</button>
    </div>
}
export default TestRefTypes;